import React from "react";
import UserSingInForm from "../fitures/users/UserSingInForm";
import UserLogInForm from "../fitures/users/UserLogInForm";
import ListForm from '../fitures/lists/ListForm';
import '../Style/App.css';

function Header() {
    return(
        <header className="header">
            <h1 className="logo">ToDo</h1>
            <div className="buttons">
                <ListForm />
                <UserLogInForm /> 
                <UserSingInForm />
            </div>
        </header>
    );
}

export default Header;