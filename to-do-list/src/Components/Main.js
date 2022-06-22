import React from "react";
import List from "./List";
import ListForm from "./ListForm";

class Main extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            isAddList: false
        }
    }

    handleClick() {
        this.setState({isAddList: true});
    }

    componentDidMount() {
        this.setState({isAddList: false})
    }

    render() {
        return (
            <>
            <button onClick={() => this.handleClick()}>Add List</button>
            {this.state.isAddList ? <ListForm isSubmit={false}/> : null}
            <List name="List name" description="Some description"/>
            <List name="List name" description="Some description"/>
            <List name="List name" description="Some description"/>
            </>
        );
    }
}

export default Main;