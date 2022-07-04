// import react, useState hook, useEffect hook, styles, arrow picture, 
// useDispatch hook, taskDone action
import React, { useState, useEffect } from "react";
import "../../Style/Task.css"
import arrow from "../../assets/arrow.png"
import { useDispatch } from "react-redux";
import { taskDone } from './tasksSlice';

// function of task component
function Task(props) {

    // state of component
    const [classButton, setClassButton] = useState('button-arrow-style arrow-animation');
    const [classTaskInfo, setClassTaskInfo] = useState('task-info hidden');
    const [counter, setCounter] = useState(0);
    const [description, setDescription] = useState('');
    const [title, setTitle] = useState('');
    const [id, setId] = useState();
    const [list, setList] = useState();

    // set state from props
    useEffect(() => {
        setDescription(props.description);
        setTitle(props.title);
        setId(props.id);
        setList(props.list);
    })

    // make dispatch object
    const dispatch = useDispatch();

    // check is task checked or not
    // if task checked delete task
    function handleTaskDone(e) {
        if (e.target.checked) {
            dispatch(
                taskDone({
                    id,
                    title,
                    description,
                    listId: list
                })
            );
        }
    }

    // open task description
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

    // return task component
    return(
        <div className="task-wrapper">
            <div className = "task-name">
                <input type="checkbox" className ="checkbox-style" onChange={handleTaskDone}></input>
                <h3 className="task-heading">{title}</h3>
                <button className={classButton} onClick={handleClick}>
                    <img src={arrow} alt="arrow" className="arrow-image-style" />
                </button>
            </div>
            <div className={classTaskInfo}>
                <h4>Description:</h4>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default Task;