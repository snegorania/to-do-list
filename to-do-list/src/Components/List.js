import React from "react";
import Task from "./Task";
import "./Style/List.css"
import arrow from "./assets/arrow.png"
import TaskForm from "./TaskForm";

class List extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: String,
            description: String,
            isAddTask: false,
        }
    }

    componentDidMount() {
        this.setState({name: this.props.name});
        this.setState({description: this.props.description});
    }

    handleAddTask() {
        this.setState({isAddTask: true});
    }

    /*addTask = () => {
        if(this.state.isAddTask) {
            this.setState({isAddTask: false});
            return <Task name="Some name" description="Some description" />;
        }
    }*/

    render() {
        const arr = [{name: 'Some name', description: 'Some description'}]
        return (
            <div className="list-wrapper">
                <div className="list-name-flex-wrapper">
                    <h2 className="list-header">{this.state.name}</h2>
                    <button className="button-arrow-style-list">
                        <img src={arrow} alt="arrow" className="arrow-image-style-list" />
                    </button>
                </div>
                <hr align="left" className="line" />
                <div className="list-info">
                    <p>{this.state. description}</p>
                    <button onClick={() => this.handleAddTask()}>Add Task</button>
                    {this.state.isAddTask ? <TaskForm /> : null}
                    <Task name="Some name" description="Some description" className="task"/>
                    <Task name="Some name" description="Some description" />
                    <Task name="Some name" description="Some description" />
                </div>
            </div>
        )
    }
}

export default List;