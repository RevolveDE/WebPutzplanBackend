import React from "react";

export default class ShowTheLineProps extends React.Component {

    render() {
        console.log(this.props);
        return (
            <div>
                Line: { this.props.lineText }
            </div>
        );
    }
}
