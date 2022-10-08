import React from "react";
import { Component } from "react";

export class Section extends Component {
    render() {
        const {title, children} = this.props
        return (
            <>
                <h2>{title}</h2>
                {children}
            </>
        )
    }
}