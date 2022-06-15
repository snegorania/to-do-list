import React from "react";
import Task from "./Task";
import "./Style/List.css"
import arrow from "./assets/arrow.png"

class List extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: String,
            description: String
        }
    }

    componentDidMount() {
        this.setState({name: this.props.name});
        this.setState({description: this.props.description});
    }

    render() {
        return (
            <div className="list-wrapper">
                <div className="list-name-flex-wrapper">
                    <h2 className="list-header">{this.state.name}</h2>
                    <button className="button-arrow-style-list" onClick={() => this.handleClick()}>
                        <img src={arrow} alt="arrow" className="arrow-image-style-list" />
                    </button>
                </div>
                <hr align="left" className="line" />
                <div className="list-info">
                    <p>{this.state. description}</p>
                    <button>Add Task</button>
                    <Task name="Some name" description="Some description" />
                    <Task name="Some name" description="Some description" />
                    <Task name="Some name" description="Some description" />
                </div>
            </div>
        )
    }
}

export default List;