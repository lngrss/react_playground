import React from 'react';
import { TicTacToe } from './tictactoe/game'
import { Hangman } from './hangman/game'
import { Button } from './button'

export class Start extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayTicTacToe: false,
            displayHangman: false,
        };
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick(displayGame) {
        console.log('Its a click', this);
        this.setState({
            [displayGame]: true,
        })
    }
    
    render() {
        console.log('Rendering',this);
        const hangman = this.state.displayHangman;
        const ttt = this.state.displayTicTacToe;
        if(hangman) {
            return <Hangman />
        } else if(ttt) {
            return <TicTacToe />
        } else {
            return (
                <div>
                    <Button 
                      action={this.handleClick} game="displayTicTacToe"
                    />
                    <Button 
                      action={this.handleClick} game="displayHangman" 
                    />
                </div>
            )
        }
    }
}