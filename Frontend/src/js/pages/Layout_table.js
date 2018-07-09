import React from "react";
import Header from "../components/Header";
import UserTable from "../components/UserTableFilter";

// Komponente mit integriertem REST-Call 

export default class Layout extends React.Component{
    constructor() {
        super();
        this.state = {
            title: "Welcome",
            items:[], 
            isLoading: false
        };
    }

    componentDidMount(){
       this.reloadData();
    }
    
    changeTitle(newTitle) {
        this.setState({ title: newTitle });
    }

    reloadData() {
        this.setState({isLoading:true})
        setTimeout(() => {
         fetch(`http://jsonplaceholder.typicode.com/users`)
            .then(result=>result.json())
            .then(items=> this.setState({items, isLoading:false})); 
        }, 3000); 
    }

    render() {
        var loaderStyle = {
          fontSize : 16
        };
        return (
            <div class='row'>
                <div class='col-md-3'>
                    Left
                </div>
                <div class='col-md-6'>
                    <UserTable />
                </div>
                <div class='col-md-3'>
                    Right
                </div>
                
           </div>
        );
    }
}