import React from 'react';
import './../css/index.css';

export class Inputter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            choosen_value: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({value: e.target.value});
    }

    handleSubmit(e) {
        this.setState({choosen_value: this.state.value});
        this.setState({value: ''});
        e.preventDefault();
    }

    move_validator() {
        var move = 'bad_move';
        if (this.state.value.length < 2) {
            move = 'good_move';
        }
        return move
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    <input type="text" onChange={this.handleChange}/>
                </label>
                <br/>
                <div className={this.move_validator()}>Your Move: {this.state.value}</div>
            </form>
        )
    }
}