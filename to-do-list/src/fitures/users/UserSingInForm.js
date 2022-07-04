// imports react and useState hook, styles, useDispatch hook, nanoid function,
// userAdded action and currentUserSet action
import React, {useState} from "react";
import "../../Style/Forms.css";
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { userAdded } from './usersSlice';
import { currentUserSet } from './currentUserSlice';
import { useNavigate } from 'react-router-dom';

// function of sing in form component
function UserSingInForm() {

    // state of component
    const [isClosedForm, setIsClosedForm] = useState(true);
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    let navigate = useNavigate();

    // open form when you click on form button
    function handleClick() {
        setIsClosedForm(false);
    }

    // make dispatch object
    const dispatch = useDispatch();

    //  read what user enters to form
    const userNameOnChange = e => setUserName(e.target.value);
    const passwordOnChange = e => setPassword(e.target.value);
    
    // get id from nanoid
    const id = nanoid();

    // this function work when you click on submit button
    // it checks is something written to form inputs
    // if something is written it adds new user and set new user as current user
    //than it cleans inputs and close form 
    function onSave() {
        if (userName && password) {
            dispatch(
                userAdded({
                    id,
                    userName,
                    password
                })
            );
            dispatch(
                currentUserSet({
                    id
                })
            );
            setUserName('');
            setPassword('');
            navigate("../lists", {replace: true});
            setIsClosedForm(true);
        }
    }

    // return form component
    // form opens when is close form is false
    return(
        <>
            <button className="user-form-button" onClick={handleClick}>Sing in</button>
            {
                (isClosedForm) ?
                null :
                <div>
                    <div className="blur"></div>
                    <form className="form">
                        <fieldset className="form-fieldset">
                            <legend className="form-header">Sing In</legend>
                            <div className="wrapper">
                                <legend>Enter username</legend>
                                <input type="text" placeholder="Username" className="input" onChange={userNameOnChange}/>
                                <legend>Enter password</legend>
                                <input type="text" placeholder="Password" className="input" onChange={passwordOnChange}/>
                                <input type="submit" value="Sing in" className="submit" onClick={onSave}/>
                            </div>
                        </fieldset>
                    </form>
                </div>
            }
        </>
    );
}


export default UserSingInForm;