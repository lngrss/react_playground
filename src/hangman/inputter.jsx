import React from 'react';
import './../css/index.css';

export class Inputter extends React.Component {
    
    moveValidator() {
        var move = 'bad-move';
        if (this.props.value.length < 2) {
            move = 'good-move';
        }
        return move
    }

    render() {
        return (
            <form onSubmit={this.props.onSubmit}>
                <label>
                    <div> Wrong Guesses: {this.props.wrongGuesses.join(' , ')}</div>
                    <input 
                    type="text" 
                    onChange={this.props.onChange}
                    value={this.props.value}/>
                </label>
                <br/>
                <div className={this.moveValidator()}>Your Move: {this.props.value}</div>
            </form>
        )
    }
}