import React, {useState} from "react";
import "./../Style/Forms.css";
import { useDispatch } from 'react-redux';
import { userFind } from './usersSlice';

function UserLogInForm() {
    const [closeForm, setCloseForm] = useState(true);
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    function handleClick() {
        setCloseForm(false);
    }

    const dispatch = useDispatch();

    const userNameOnChange = e => setUserName(e.value.target);
    const passwordOnChange = e => setPassword(e.value.target);

    function submit() {
        if (userName && password) {
            dispatch(
                userFind({
                    userName,
                    password
                })
            );
            setCloseForm(true);
        }
    }

    return(
        <>
            <button onClick={handleClick}>Log in</button>
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

/*class UserLogInForm extends React.Component {

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
                            <legend className="form-header">Log in</legend>
                            <div  className="wrapper">
                                <legend>Enter username</legend>
                                <input type="text" placeholder="Username" className="input"/>
                                <legend>Enter password</legend>
                                <input type="text" placeholder="Password" className="input"/>
                                <input type="submit" value="Log in" className="submit" onClick={() => this.handleClickSubmit()}/>
                            </div>
                        </fieldset>
                    </form>
                </div>
            }
            </>
            
        );
    }
}*/

export default UserLogInForm;