import React, { Component } from 'react';
import styled from 'styled-components';
import nanoid from 'nanoid';

class Textarea extends Component {

    state = {
        title: '',
        content: '',
    }

    onChange = ({ target }) => {
        const { name, value } = target
        this.setState({
            [name]: value
        })
    }

    onSubmit = () => {
        const { onSubmit } = this.props
        let data = {
            ...this.state,
            id: nanoid(),
            time: new Date()
        }
        onSubmit(data)
    }

    render() {


        return (
            <div>
                <input
                    name="title"
                    type="text"
                    value={this.state.title}
                    onChange={this.onChange}
                />
                <textarea
                    name="content"
                    rows='4'
                    cols='20'
                    value={this.state.content}
                    onChange={this.onChange}
                />
                <button onClick={this.onSubmit}>Save</button>
            </div>
        )
    }
}

export default Textarea;
