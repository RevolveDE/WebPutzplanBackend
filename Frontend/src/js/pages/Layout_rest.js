import React from "react";
import Header from "../components/Header";

// Komponente mit integriertem REST-Call 

export default class Layout extends React.Component{
    constructor() {
        super();
        this.state = {
            title: "",
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
            .then(items => { console.log(items); this.setState({items, isLoading:false}) }); 
        },1000); 
    }

    render() {
        var loaderStyle = {
          fontSize : 16
        };
        return (
            <div>
                <h1> {this.state.title} </h1> 
                <br />
                { this.state.isLoading ? <button type="button" class="btn btn-primary disabled"><i class="fa fa-spinner fa-spin" style = { loaderStyle }></i> Loading </button> : <button type="button" class="btn btn-primary" onClick={this.reloadData.bind(this)}><i class="fa fa-repeat" aria-hidden="true"></i> Reload</button> }
                <ul>
                    { this.state.isLoading ?  <div> Loading data </div> : this.state.items.map(item=><li key={item.id}>Person {item.name}</li>) }
                </ul>
           </div>
        );
    }
}