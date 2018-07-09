import React from "react";
import {calculateSum} from "../utils/algorithms"
import store from "../store"

export default class Initial extends React.Component {
  
  // ohne @connect kann so eine Action gefeuert werden. 
  // store.dispatch(**Action feuern**)

  render() {
  
    return (
      <div>
        <h2>Initial page</h2>
        The result is {calculateSum(30,20)}

      </div>
    );
  }
}