import React, { Component } from "react";
import Form from "./components/Form";
import Note from "./components/Note";
import Modal from "./components/Modal"
import styled from "styled-components";

const PageWrapper = styled.div`
  margin: 10px;
`;

const NotesWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

class App extends Component {
  state = {
    notes: [],
    showModal: false,
    activeNote: null
  };

  handleSubmit = data => {
    let notes = JSON.parse(localStorage.getItem("notes"));
    let newNotes = JSON.stringify([...notes, data]);
    localStorage.setItem("notes", newNotes);
    this.setState({
      notes: [...notes, data]
    });
  };

  handleClose = () => {
    this.setState({
      showModal: false
    })
  }

  handleOpen = (activeNote) => {
    this.setState({
      showModal: true,
      activeNote
    })
  }

  componentDidMount() {
    let notes = JSON.parse(localStorage.getItem("notes"));
    if (!notes) {
      localStorage.setItem("notes", JSON.stringify([]));
    }
    this.setState({
      notes: notes || []
    });
  }

  render() {
    const { showModal, notes, activeNote } = this.state;
    return (
      <PageWrapper className="App">
        <Form onClick={this.handleSubmit} />{" "}
        <NotesWrapper>
          {notes &&
            notes.map(({ id, title, content }) => {
              return <Note key={id} id={id} title={title} content={content} handleOpen={this.handleOpen} />;
            })}
        </NotesWrapper>
        <Modal show={showModal} handleClose={this.handleClose}><Form onClick={this.handleSubmit} activeNote={activeNote} /></Modal>
      </PageWrapper>
    );
  }
}

export default App;
