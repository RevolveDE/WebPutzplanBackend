import React from"react";
import {connect} from "react-redux"
import { welcomeTextSync } from "../actions/welcomeTextActions"


@connect((store) => {  // @connect (mit Annotation) : Wenn sich irgendwas in diesem Store ändert, was für dieses Komponente relevant ist, wird dies mit dieser Methode behandelt. Für alle, die mit store connected sind, werden die reducer aufgerufen 
    return {
    };
})

export default class Header extends React.Component {

    handleChange(e) {
    	const title = e.target.value
    	console.log(title);
        this.props.dispatch(welcomeTextSync(e.target.value))
    }
    
    render() {
    
        return (
            <div>
                <h1> {this.props.title} </h1>
                <input value={this.props.title} onChange={this.handleChange.bind(this)} />
            </div>
        );
    }
}