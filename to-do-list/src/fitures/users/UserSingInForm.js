import React, {useState} from "react";
import "../../Style/Forms.css";
import { useDispatch } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'
import { userAdded } from './usersSlice'
import { currentUserSetted } from './currentUserSlice'

function UserSingInForm() {
    const [isClosedForm, setIsClosedForm] = useState(true);
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    function handleClick() {
        setIsClosedForm(false);
    }

    const dispatch = useDispatch();

    const userNameOnChange = e => setUserName(e.target.value);
    const passwordOnChange = e => setPassword(e.target.value);
    
    const id = nanoid();

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
                currentUserSetted({
                    id
                })
            );
            setUserName('');
            setPassword('');
            setIsClosedForm(true);
        }
    }

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