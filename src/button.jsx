import React from 'react';

export class Button extends React.Component {
    render() {
        return (
            <div>
                <button onClick={() => this.props.action(this.props.game)}>{this.props.game}</button>
            </div>
        )
    }
}