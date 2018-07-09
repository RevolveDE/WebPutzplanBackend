import React from "react";

export default class ShowTheLine extends React.Component {

    render() {
        const theText = "Text from imported ShowTheLine.js";
        return (
            <div>
                Line: { theText }
            </div>
        );
    }
}
