import React from 'react';
import { Outputter } from './outputter';
import { Inputter } from './inputter';

export class Hangman extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Outputter score={7}/>
                </div>
                <div className="game-info">
                    <Inputter />
                </div>
            </div>
        )
    }
}