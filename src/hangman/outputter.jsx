import React from 'react';
import './../css/index.css';
import { gallows } from './enum'

export class Outputter extends React.Component {
    render() {
        var i = 0;
        return (
            <div>
                {gallows[this.props.score].map(value => {
                    i++;
                    return (
                        <div key={i}>
                            {value} <br/>
                        </div>
                    )
                })}
            </div>
        )
    }
}