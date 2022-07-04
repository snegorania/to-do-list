// import react and hook useState, styles, hooks for dispatch and selector, action currentUserSet
import React, {useState} from "react";
import "../../Style/Forms.css";
import { useDispatch, useSelector } from 'react-redux';
import { currentUserSet } from './currentUserSlice';
import { useNavigate } from 'react-router-dom';

// function of log in form component
function UserLogInForm() {

    // add state to component
    const [closeForm, setCloseForm] = useState(true);
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    let navigate = useNavigate();

    // this function will open form when you click the button of form
    function handleClick() {
        setCloseForm(false);
    }

    // make dispatch object
    const dispatch = useDispatch();

    // this functions reads what user write to form
    const userNameOnChange = e => setUserName(e.target.value);
    const passwordOnChange = e => setPassword(e.target.value);

    // get users from store
    const users = useSelector(state => state.users);

    // this function happens when submit button is clicked
    // it checks is there anything written in fields of form
    //if yes it find user with such password and user name
    // if it exist set this user as current user, clean input and close form
    function submit() {
        if (userName && password) {
            const user = users.find(el => el.password === password && el.userName === userName);
            console.log(user);
            if(user !== undefined) {
                dispatch(
                    currentUserSet({
                        id: user.id
                    })
                )
                setUserName('');
                setPassword('');
                navigate("../lists", {replace: true});
                setCloseForm(true);
            }
        }
    }

    // returns html form component
    // form opens if close form is false
    return(
        <>
            <button className="user-form-button" onClick={handleClick}>Log in</button>
            {
                closeForm ?
                null :
                <div>
                    <div className="blur"></div>
                    <form className="form">
                        <fieldset className="form-fieldset">
                            <legend className="form-header">Log in</legend>
                            <div  className="wrapper">
                                <legend>Enter username</legend>
                                <input type="text" placeholder="Username" className="input" onChange={userNameOnChange}/>
                                <legend>Enter password</legend>
                                <input type="text" placeholder="Password" className="input" onChange={passwordOnChange}/>
                                <input type="submit" value="Log in" className="submit" onClick={submit}/>
                            </div>
                        </fieldset>
                    </form>
                </div>
            }
        </>
        
    );
}


export default UserLogInForm;