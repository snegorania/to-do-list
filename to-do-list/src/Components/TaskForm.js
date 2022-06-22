import React from "react";
import "./Style/Forms.css";

class TaskForm extends React.Component {
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
                    <form className="form-task">
                        <fieldset className="form-fieldset">
                            <legend className="form-header">Add task information</legend>
                            <div className="wrapper">
                                <legend>Enter name of the task</legend>
                                <input type="text" placeholder="Task name" className="input"/>
                                <legend>Enter description of the task</legend>
                                <textarea placeholder="Task description" className="input-textarea"/>
                                <legend>Enter date of the task</legend>
                                <input type = "date" className="input-date" />
                                <input type="submit" value="Add task" className="submit" onClick={() => this.handleClickSubmit()}/>
                            </div>
                        </fieldset>
                    </form>
                </div>
            }
            </>
        );
    }
}

export default TaskForm;