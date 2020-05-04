import React from 'react';

export class Won extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        window.location.reload();
    }
    
    displaySolution() {
        if (this.props.secretWord) {
            return(
                <p>The secret Word was {this.props.secretWord}</p>
            )
        } else {
            return(
                <p>Upsy daisy, something went wrong</p>
            )
        }
    }

    render() {
        return (
            <div className='game-won'>
                <h2>Whoop whoop, this game is won</h2>
                {this.displaySolution()}
                <button onClick={this.handleClick}>Go Back</button>
            </div>
        )
    }
}