import React, { useState } from "react";
import "../../Style/Forms.css";
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";
import { nanoid } from '@reduxjs/toolkit';
import { listAdded } from './listsSlice';

function ListForm() {

    const [closeForm, setCloseForm] = useState(true);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    function handleClick() {
        setCloseForm(false);
    }

    const user = useSelector(state => state.currentUser);

    const dispatch = useDispatch();

    const onChangeTitle = e => setTitle(e.target.value);
    const onChangeDescription = e => setDescription(e.target.value); 

    function onSave() {
        if (title && description) {
            dispatch(
                listAdded({
                    id: nanoid(),
                    title,
                    description,
                    userId: user.id
                })
            )
            setTitle('');
            setDescription('');
        }
        setCloseForm(true);
    }

    return(
        <>
            <button className="user-form-button" onClick={handleClick}>Add List</button>
            {
                (closeForm) ?
                null :
                <div>
                    <div className="blur"/>
                    <form action="#" className="form-list">
                        <fieldset className="form-fieldset">
                            <legend className="form-header">Add list information</legend>
                            <div className="wrapper">
                                <legend>Enter name of the list</legend>
                                <input type="text" placeholder="List name" className="input" onChange={onChangeTitle} />
                                <legend>Enter description of the list</legend>
                                <textarea placeholder="List description" className="input-textarea" onChange={onChangeDescription} />
                                <input type="submit" value="Add list" className="submit" onClick={onSave}/>
                            </div>
                        </fieldset>
                    </form>
                </div>
            }
        </>
    );
}

export default ListForm;