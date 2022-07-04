// import react, useState hook, useEffect hook, useSelector hook
// and task component
import React, {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';
import Task from './Task';

const TaskList = (props) => {

    // state of component
    const [list, setList] = useState('');

    // get tasks from store
    const tasks = useSelector(state => state.tasks);

    // set state from props
    useEffect(() => {
        setList(props.list);
    })

    // filter tasks of the list
    const tasksFiltered = tasks.filter((el) => el.listId === list);

    // renders tasklist
    const renderedTasks = tasksFiltered.map(task => (
        <Task list={task.list} id={task.id} title={task.title} description={task.description}/>
    ));

    // return tasklist
    return (
        <>
            {renderedTasks}
        </>
    );
}

export default TaskList;