import React, { useState, useEffect } from "react";
import "../../Style/Task.css"
import arrow from "../../assets/arrow.png"


function Task(props) {

    const [classButton, setClassButton] = useState('button-arrow-style arrow-animation');
    const [classTaskInfo, setClassTaskInfo] = useState('task-info hidden');
    const [counter, setCounter] = useState(0);
    const [description, setDescription] = useState(props.description);
    const [title, setTitle] = useState(props.name);

    useEffect(() => {
        setDescription(props.description);
        setTitle(props.title);
    })

    function handleClick() {
        if (counter === 0) {
            setClassButton('button-arrow-style');
            setClassTaskInfo('task-info');
            setCounter(1);
        } else {
            setClassButton('button-arrow-style arrow-animation');
            setClassTaskInfo('task-info hidden');
            setCounter(0);
        }
    }


    return(
        <div className="task-wrapper">
            <div className = "task-name">
                <input type="checkbox" className ="checkbox-style"></input>
                <h3 className="task-heading">{title}</h3>
                <button className={classButton} onClick={handleClick}>
                    <img src={arrow} alt="arrow" className="arrow-image-style" />
                </button>
            </div>
            <div className={classTaskInfo}>
                <h4>Description:</h4>
                <p>{description}</p>
                <h4>Date:</h4>
                <p>Date</p>
            </div>
        </div>
    );
}

export default Task;