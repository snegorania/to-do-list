import React, {useState} from "react";
import "./../Style/Forms.css";
import { useDispatch } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'
import { userAdded } from './usersSlice'

function UserSingInForm() {
    const [closeForm, setCloseForm] = useState(true);
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    function handleClick() {
        setCloseForm(false);
    }

    const dispatch = useDispatch();

    const userNameOnChange = e => setUserName(e.value.target);
    const passwordOnChange = e => setPassword(e.value.target);

    function onSave() {
        if (userName && password) {
            dispatch(
                userAdded({
                    id: nanoid(),
                    userName,
                    password
                })
            );
            setCloseForm(true);
        }
    }

    return(
        <>
            <button onClick={handleClick}>Sing in</button>
            {
                (closeForm) ?
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

/*class UserSingInForm extends React.Component {

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
}*/

export default UserSingInForm;