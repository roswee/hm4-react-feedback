import { Component } from "react";

export class FeedbackOptions extends Component {
    render() {
        const { options, onLeaveFeedback, className} = this.props
        return (
                <>
                <button type="button" onClick={options} className={className}>
                    {onLeaveFeedback}
                </button>
                </>
        )
    }
}