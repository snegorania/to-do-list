import React from "react";
import UserLogInForm from "./UserLogInForm";
import UserSingInForm from "./UserSingInForm";


class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
            isOpenLogInForm: false,
            isOpenSingInForm: false
        };
    }

    handleSignIn() {
        this.setState({isOpenSingInForm: true});
    }

    handleLogIn() {
        this.setState({isOpenLogInForm: true});
    }

    render() {
        return(
            <div>
                {this.state.isLoggedIn ? this.renderHeaderLoggedIn : 
                <>
                <button onClick={() => this.handleSignIn()}>Sign in</button>
                <button onClick={() => this.handleLogIn()}>Log in</button>
                {this.state.isOpenLogInForm ? <UserLogInForm /> : null}
                {this.state.isOpenSingInForm ? <UserSingInForm /> : null}
                </>}
            </div>
        );
    }
}

export default Header;