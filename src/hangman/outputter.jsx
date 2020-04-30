import React from 'react';
import './../css/index.css';
import { gallows } from './enum'

export class Outputter extends React.Component {
    render() {
        var i = 0;
        return (
            <div>
                {gallows[this.props.wrongGuesses.length].map(value => {
                    i++;
                    return (
                        <div key={i}>
                            {value} <br/>
                        </div>
                    )
                })}
                <div>
                    {[...this.props.secretWord].map(letter => {
                        return this.props.rightGuesses.includes(letter)) ? letter : ' _ '
                    })}
                </div>
            </div>
        )
    }
}