import React, { Component } from 'react';
import styled from 'styled-components';
import nanoid from 'nanoid';

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${props => props.inputColor || "palevioletred"};
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;

const Textarea = styled.textarea`
padding: 0.5em;
  margin: 0.5em;
  color: ${props => props.inputColor || "palevioletred"};
  background: rebeccapurple;
  border: none;
  border-radius: 3px;

`

const Button = styled.button`
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;


class Form extends Component {

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
                <Input
                    name="title"
                    type="text"
                    value={this.state.title}
                    onChange={this.onChange}
                />
                <Textarea
                    name="content"
                    rows='4'
                    cols='20'
                    value={this.state.content}
                    onChange={this.onChange}
                />
                <Button onClick={this.onSubmit}>Save</Button>
            </div>
        )
    }
}

export default Form;
