import React from "react";

class UserSingInForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isSubmit: false
        }
    }

    handleClickSubmit() {
        this.setState({isSubmit: true});
    }

    render() {
        return(
            <>
            {
                this.state.isSubmit ?
                null :
                <div>
                    <div className="blur"></div>
                    <form className="form">
                        <fieldset className="form-fieldset">
                            <legend className="form-header">Sing In</legend>
                            <div className="wrapper">
                                <legend>Enter username</legend>
                                <input type="text" placeholder="Username" className="input"/>
                                <legend>Enter password</legend>
                                <input type="text" placeholder="Password" className="input"/>
                                <input type="submit" value="Sing in" className="submit" onClick={() => this.handleClickSubmit()}/>
                            </div>
                        </fieldset>
                    </form>
                </div>
            }
            </>
        );
    }
}

export default UserSingInForm;