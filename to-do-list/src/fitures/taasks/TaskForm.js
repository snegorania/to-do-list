import React, {useState, useEffect} from "react";
import "../../Style/Forms.css";
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { taskAdded } from './tasksSlice';

function TaskForm(props) {

    const [closeForm, setCloseForm] = useState(true);
    const [listId, setListId] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        setListId(props.list);
    });

    function handleClick() {
        setCloseForm(false);
    }

    const dispatch = useDispatch();

    const onChangeTitle = e => setTitle(e.value.target);
    const onChangeDescription = e => setDescription(e.value.target);

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