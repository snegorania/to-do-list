import React from "react";
import { render } from "react-dom";
import { useSelector } from "react-redux";
import List from './List'

const ListOfLists = () => {
    const lists = useSelector(state => state.lists);
    const renderedLists = lists.map(list => (
        <List id={list.id} title={list.title} description={list.description} />
    ))

    return(
        <>
            {renderedLists}
        </>
    );
}

export default ListOfLists;