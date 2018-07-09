import React from"react";

export default class Header extends React.Component {
constructor() {
 super();
 this.state = 
 {
  votes: 0
 };
}

    buttonclicked() {
        this.props.buttonclicked(this.props.oem.id);
        console.log(this.props.oem.id);
        this.setState({votes: this.state.votes + 1})
    }
    
    render() {
        const {key} = this.props; 
        console.log(this.props); 
        return (
            <div>
                <h1> {this.props.oem.name} </h1>
                <h4> Votes: {this.state.votes}</h4>
                <button type="button" class="btn btn-warning" onClick={this.buttonclicked.bind(this)}>Vote!</button> 
                <hl/>
            </div>
        );
    }
}