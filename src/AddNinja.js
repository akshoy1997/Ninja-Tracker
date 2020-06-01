import React, { Component } from 'react';
import './AddNinja.css';

class AddNinja extends Component {
    state = {
        name: null,
        age: null,
        belt: null
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addNinja(this.state);
    }
    render() {
        return (
        <div className="AddNinja">
            <form onSubmit={this.handleSubmit}>
                <div className="FormRow">
                    <label className="FormLabel" htmlFor="name">Name: </label>
                    <input className="FormInput" type="text" id="name" onChange={this.handleChange} />
                </div>
                <div className="FormRow">
                    <label className="FormLabel" htmlFor="age">Age: </label>
                    <input className="FormInput" type="number" id="age" onChange={this.handleChange} />
                </div>
                <div className="FormRow">
                    <label className="FormLabel" htmlFor="belt">Belt: </label>
                    <input className="FormInput" type="text" id="belt" onChange={this.handleChange} />
                </div>
                <button className="FormSubmit">Add Ninja</button>
            </form>
        </div>
        );
    }
}

export default AddNinja;
