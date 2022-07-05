// import react, useSelector hook and list component
import React from "react";
import { useSelector } from "react-redux";
import List from './List'

// component list of lists
const ListOfLists = () => {
    //get lists and current user from state
    const lists = useSelector(state => state.lists);
    const currentUser = useSelector(state => state.currentUser);

    //filter lists to find lists of user
    const listsFiltered = lists.lists.filter((el) => el.userId === currentUser.id);

    // render lists
    const renderedLists = listsFiltered.map(list => (
        <List key={list.id} id={list.id} title={list.title} description={list.description} />
    ));

    // return list of lists
    return(
        <>
            {renderedLists}
        </>
    );
}

export default ListOfLists;