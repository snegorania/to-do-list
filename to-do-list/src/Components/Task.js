import React from "react";
import "./Style/Task.css"
import arrow from "./assets/arrow.png"

class Task extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: String,
            description: String,
            classButton: String,
            classTaskInfo: String,
            counter: 0,
            date: new Date()
        };
    }

    componentDidMount() {
        this.setState({name: this.props.name});
        this.setState({description: this.props.description});
        this.setState({classButton: "button-arrow-style arrow-animation"});
        this.setState({ classTaskInfo: "task-info hidden"});
    }

    handleClick() {
        if(this.state.counter == 0) {
            this.setState({classButton: "button-arrow-style"});
            this.setState({ classTaskInfo: "task-info"});
            this.setState({counter: 1});
        } else {
            this.setState({classButton: "button-arrow-style arrow-animation"});
            this.setState({ classTaskInfo: "task-info hidden"});
            this.setState({counter: 0});   
        }
    }

    render() {
        return(
            <div className="task-wrapper">
                <div className = "task-name">
                    <input type="checkbox" className ="checkbox-style"></input>
                    <h3 className="task-heading">{this.state.name}</h3>
                    <button className={this.state.classButton} onClick={() => this.handleClick()}>
                        <img src={arrow} alt="arrow" className="arrow-image-style" />
                    </button>
                </div>
                <div className={this.state.classTaskInfo}>
                    <h4>Description:</h4>
                    <p>{this.state.description}</p>
                    <h4>Date:</h4>
                    <p>Date</p>
                </div>
            </div>
        );
    }
}

export default Task;