import React from "react";
import Car from "../components/Car"

export default class IndexPage extends React.Component {
  constructor() {
        super();
        this.state = {
            lastvote : 0
        };
    }
  componentWillUnmount() {
      console.log("IndexPage: componentWillUnmount")
  }

  buttonclicked(e) {
      this.setState({lastvote : e})
  }

  render() {
    const Cars = [
      {"name":"Audi", "id": 0},
      {"name":"BMW", "id": 1},
      {"name":"Tesla", "id": 2}
    ].map((oem, i) => <Car oem={oem} buttonclicked={this.buttonclicked.bind(this)}/>);

     return (
      <div>
        <h2 class="red-color">Cars</h2>
        <h2>Last Vote: { this.state.lastvote }</h2>
        <div class="row"> { Cars } </div>
      </div>
    );
  }
}