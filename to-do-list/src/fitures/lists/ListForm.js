import React, { useState } from "react";
import "../../Style/Forms.css";
import { useDispatch } from 'react-redux';
import { nanoid } from '@react/toolkit';
import { listAdded } from './listsSlice';

function ListForm() {

    const [closeForm, setCloseForm] = useState(true);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    function handleClick() {
        setCloseForm(false);
    }

    const dispatch = useDispatch();

    const onChangeTitle = e => setTitle(e.value.target);
    const onChangeDescription = e => setDescription(e.value.target); 

    function onSave() {
        if (title && description) {
            dispatch(
                listAdded({
                    id: nanoid(),
                    title,
                    description
                })
            )
            setCloseForm(true);
        }
    }

    return(
        <>
            <button className="task-list-add-button" onClick={handleClick}>Add List</button>
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

/*class ListForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isSubmit: false
        }
    }

    handleClickSubmit() {
        this.setState({isSubmit: true});
    }

    componentDidUpdate() {
        this.setState ({isSubmit: false})
    }

    render() {
        return(
            <>
            {
                this.state.isSubmit ?
                null :
                <div>
                    <div className="blur"/>
                    <form action="#" className="form-list">
                        <fieldset className="form-fieldset">
                            <legend className="form-header">Add list information</legend>
                            <div className="wrapper">
                                <legend>Enter name of the list</legend>
                                <input type="text" placeholder="List name" className="input"/>
                                <legend>Enter description of the list</legend>
                                <textarea placeholder="List description" className="input-textarea"/>
                                <input type="submit" value="Add list" className="submit" onClick={() => this.handleClickSubmit()}/>
                            </div>
                        </fieldset>
                    </form>
                </div>
            }
            </>
        );
    }
}*/

export default ListForm;