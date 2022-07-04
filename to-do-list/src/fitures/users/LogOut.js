import React from 'react';
import "../../Style/Forms.css";
import { useDispatch } from 'react-redux';
import { currentUserLogOut } from './currentUserSlice';
import { useNavigate } from 'react-router-dom';

function LogOut() {

    let navigate = useNavigate();

    // make dispatch object
    const dispatch = useDispatch();

    function handleClick() {
        dispatch(currentUserLogOut());
        navigate('../', {replace: true});
    }

    return(
        <button className="user-form-button" onClick={handleClick}>Log out</button>
    )
}

export default LogOut;
