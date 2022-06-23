import React, {useState, useEffect} from "react";
import TaskList from "../taasks/TaskList";
import "../../Style/List.css"
import arrow from "../../assets/arrow.png"
import TaskForm from "../taasks/TaskForm";


function List(props) {

    const [description, setDescription] = useState('Some list description');
    const [title, setTitle] = useState('Some list name');
    const [id, setId] = useState('0');

    useEffect(() => {
        setId(props.id);
        setDescription(props.description);
        setTitle(props.title);
    })


    return (
        <div className="list-wrapper">
            <div className="list-name-flex-wrapper">
                <h2 className="list-header">{title}</h2>
                <button className="button-arrow-style-list">
                    <img src={arrow} alt="arrow" className="arrow-image-style-list" />
                </button>
            </div>
            <hr align="left" className="line" />
            <div className="list-info">
                <p>{description}</p>
                <TaskForm list={id}/>
                <TaskList list={id}/>
            </div>
        </div>
    );
}

export default List;