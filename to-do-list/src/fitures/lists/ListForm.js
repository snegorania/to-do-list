// imports react, useState hook, styles, useDispatch hook, useSelector hook,
// nanoid function and listAdded action
import React, { useState } from "react";
import "../../Style/Forms.css";
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";
import { addList } from './listsSlice';

// function of list component
function ListForm() {

    // state of component
    const [closeForm, setCloseForm] = useState(true);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    // opens form when you click on form button
    function handleClick() {
        setCloseForm(false);
    }

    // get current user from state
    const user = useSelector(state => state.currentUser);

    // make dispatch object
    const dispatch = useDispatch();

    // get values from input
    const onChangeTitle = e => setTitle(e.target.value);
    const onChangeDescription = e => setDescription(e.target.value); 

    // this function happens when you click submit button
    // it checks is there anything in form inputs
    // if there is something it add new list, clean input and close form 
    function onSave() {
        if (title && description) {
            dispatch(
                addList({
                    title,
                    description,
                    userId: user.id
                })
            );
            setTimeout(() => {
                setTitle('');
                setDescription('');
                setCloseForm(true);
            }, 3000);
        }
    }


    // returns form component
    // form opens when you click form button
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