import React from "react";
import "./Style/Forms.css";

class ListForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isSubmit: false
        }
    }

    handleClickSubmit() {
        this.setState({isSubmit: true});
    }

    componentDidUpdate() {
        this.setState ({isSubmit: false})
    }

    render() {
        return(
            <>
            {
                this.state.isSubmit ?
                null :
                <div>
                    <div className="blur"/>
                    <form action="#" className="form-list">
                        <fieldset className="form-fieldset">
                            <legend className="form-header">Add list information</legend>
                            <div className="wrapper">
                                <legend>Enter name of the list</legend>
                                <input type="text" placeholder="List name" className="input"/>
                                <legend>Enter description of the list</legend>
                                <textarea placeholder="List description" className="input-textarea"/>
                                <input type="submit" value="Add list" className="submit" onClick={() => this.handleClickSubmit()}/>
                            </div>
                        </fieldset>
                    </form>
                </div>
            }
            </>
        );
    }
}

export default ListForm;