import React from 'react';
import { Outputter } from './outputter';
import { Inputter } from './inputter';
import { secretWord, guessChecksOut } from './helpers/helper_functions';
import { Lost } from '../lost';
import { Won } from '../won';

export class Hangman extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            secretWord: secretWord(),
            wrongGuesses: [],
            rightGuesses: [],
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    gameWon() {
        var bool = true;
        for (var i = 0; i < this.state.secretWord.length; i++) {
            if (!this.state.rightGuesses.includes(this.state.secretWord[i])) {
                bool = false;
                break;
            }
        }
        return bool;
    }

    gameLost() {
        return (this.state.wrongGuesses.length > 6)
    }

    handleChange(e) {
        this.setState({value: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        if (guessChecksOut(this.state.value, this.state.secretWord)) {
            const newState = this.state.rightGuesses.concat(this.state.value);
            this.setState({
                rightGuesses: newState,
                value: ''});
        } else {
            const newState = this.state.wrongGuesses.concat(this.state.value);
            this.setState({
                wrongGuesses: newState,
                value: ''});
        }
    }

    render() {
        console.log('hangman', this.state);
        if (this.gameWon()) {
            return <Won secretWord={this.state.secretWord}/>
        } else if (this.gameLost()) {
            return <Lost secretWord={this.state.secretWord}/>
        } else {
            return (
                <div className="game">
                    <div className="game-board">
                        <Outputter 
                        secretWord={this.state.secretWord}
                        wrongGuesses={this.state.wrongGuesses}
                        rightGuesses={this.state.rightGuesses}/>
                    </div>
                    <div className="game-info">
                        <Inputter 
                        value={this.state.value}
                        wrongGuesses={this.state.wrongGuesses}
                        onChange={this.handleChange}
                        onSubmit={this.handleSubmit}/>
                    </div>
                </div>
            )
        }
    }
}