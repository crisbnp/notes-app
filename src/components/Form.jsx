import React, { Component } from "react";
import styled from "styled-components";
import nanoid from "nanoid";

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
  background: papayawhip;
  border: none;
  border-radius: 3px;
  resize: none;
`;

const Button = styled.button`
  background: ${props => (props.primary ? "palevioletred" : "white")};
  color: ${props => (props.primary ? "white" : "palevioletred")};
  font-size: 1em;
  margin: 0.5em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 50%;
`;

class Form extends Component {
  state = {
    note: {
      title: "",
      content: ""
    },
    valid: false
  };

  input = null
  textArea = null

  componentDidMount() {
    const { activeNote } = this.props
    console.log(activeNote)
    if (activeNote) {
      let notes = JSON.parse(localStorage.getItem('notes'))
      let note = notes.filter(note => note.id === activeNote)[0]
      this.setState({
        note
      })
    }
  }

  onChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      note: {
        ...this.state.note,
        [name]: value
      }

    });
  };

  onSubmit = (e) => {
    e.preventDefault()
    const { onSave, onEdit, activeNote } = this.props;
    let data
    if (this.checkIfValid()) {
      if (activeNote) {
        data = {
          ...this.state.note,
          id: activeNote
        }
        onEdit(data)
        return
      }

      data = {
        ...this.state.note,
        id: nanoid(),
        time: new Date()
      };
      onSave(data);
    }
  };

  checkIfValid = () => {
    // if (this.input.validity.valueMissing) {
    //   this.input.setCustomValidity("PLZ CREATE A USERNAME, YO!");
    // }
    return this.input.checkValidity() && this.textArea.checkValidity()
  }

  render() {
    return (
      <Wrapper>
        <Input
          name="title"
          type="text"
          value={this.state.note.title}
          onChange={this.onChange}
          ref={ref => { this.input = ref }}
          required
        />
        <Textarea
          name="content"
          rows="20"
          cols="20"
          value={this.state.note.content}
          onChange={this.onChange}
          ref={ref => { this.textArea = ref }}
          required
        />
        <Button type='submit' primary onClick={this.onSubmit}>SAVE</Button>

      </Wrapper>
    );
  }
}

export default Form;
