// import react, useState hook, useEffect hook, styles, useDispatch hook,
// nanoid function, taskAdded action
import React, {useState, useEffect} from "react";
import "../../Style/Forms.css";
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { taskAdded } from './tasksSlice';

// task component function
function TaskForm(props) {

    // component state
    const [closeForm, setCloseForm] = useState(true);
    const [listId, setListId] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    // set component state from props
    useEffect(() => {
        setListId(props.list);
    });

    // open form when you click on form button
    function handleClick() {
        setCloseForm(false);
    }

    // make dispatch object
    const dispatch = useDispatch();

    // read user inputs
    const onChangeTitle = e => setTitle(e.target.value);
    const onChangeDescription = e => setDescription(e.target.value);

    // this function happens when user click submit button
    // it checks is there input
    // if inout is there it add task, clean inputs and close form 
    function onSave() {
        if (title && description) {
            dispatch(
                taskAdded({
                    id: nanoid(),
                    title,
                    description,
                    listId
                })
            )
            setTitle('');
            setDescription('');
            setCloseForm(true);
        }
    }

    // return form component that opens when you click button of form 
    return(
        <>
            <button className="task-list-add-button" onClick={handleClick}>Add Task</button>
            {(closeForm) ?
                null:
                <div>
                    <div className="blur"></div>
                    <form className="form-task">
                        <fieldset className="form-fieldset">
                            <legend className="form-header">Add task information</legend>
                            <div className="wrapper">
                                <legend>Enter name of the task</legend>
                                <input type="text" placeholder="Task name" className="input" onChange={onChangeTitle}/>
                                <legend>Enter description of the task</legend>
                                <textarea placeholder="Task description" className="input-textarea" onChange={onChangeDescription}/>
                                <legend>Enter date of the task</legend>
                                <input type = "date" className="input-date" />
                                <input type="submit" value="Add task" className="submit" onClick={onSave}/>
                            </div>
                        </fieldset>
                    </form>
                </div>
            }
        </>
    );
}

export default TaskForm;