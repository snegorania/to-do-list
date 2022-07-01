import React, {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';
import Task from './Task';

const TaskList = (props) => {

    const tasks = useSelector(state => state.tasks);
    const [list, setList] = useState('');

    useEffect(() => {
        setList(props.list);
    })
    const tasksFiltered = tasks.filter((el) => el.listId === list);

    const renderedTasks = tasksFiltered.map(task => (
        <Task list={task.list} id={task.id} title={task.title} description={task.description}/>
    ));

    return (
        <>
            {renderedTasks}
        </>
    );
}

export default TaskList;