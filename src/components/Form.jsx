import React, { Component } from "react";
import styled from "styled-components";
import nanoid from "nanoid";

const Input = styled.input`
  font-size: 1em;
  padding: 1em 0.5em;
  margin: 0.5em 1em;
  color: ${props => props.inputColor || "palevioletred"};
  border: 2px solid rebeccapurple;
  border-radius: 3px;
  width: 100%;
  
`;

const Textarea = styled.textarea`
  font-size: 1em;
  padding: 1em 0.5em;
  margin: 0.5em 1em;
  color: ${props => props.inputColor || "palevioletred"};
  background: white;
  border: 2px solid rebeccapurple;
  border-radius: 3px;
  resize: none;
  width: 100%;
`;

const Button = styled.button`
  box-sizing: border-box;
  background: ${props => (props.primary ? "palevioletred" : "white")};
  color: ${props => (props.primary ? "white" : "palevioletred")};
  width: 100%;
  font-size: 1em;
  padding: 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const Wrapper = styled.form`
  display: flex;
  padding: 1em;
  flex-direction: column;
  align-items: center;
  width: 800px;
  border: 2px solid papayawhip;
  box-shadow: 5px 5px 12px lightgray;
  background-color: papayawhip;
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
      this.setState({
        note: {
          title: "",
          content: ""
        }
      })
    }
  };

  checkIfValid = () => {
    return this.input.checkValidity() && this.textArea.checkValidity()
  }

  render() {
    return (
      <Wrapper autoComplete="off">
        <Input
          placeholder='Title'
          name="title"
          type="text"
          value={this.state.note.title}
          onChange={this.onChange}
          ref={ref => { this.input = ref }}
          required
        />
        <Textarea
          placeholder='Take a note...'
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
