// import react, useState hook, UserSingInForm component,
// UserLogInForm component, ListForm component, styles
import React from "react";
import UserSingInForm from "../fitures/users/UserSingInForm";
import UserLogInForm from "../fitures/users/UserLogInForm";
import '../Style/App.css';

function HeaderHome() {

    // return header
    return(
        <header className="header">
            <h1 className="logo">ToDo</h1>
            <div className="buttons">
                <UserLogInForm /> 
                <UserSingInForm />
            </div>
        </header>
    );
}

export default HeaderHome;