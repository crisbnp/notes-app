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

  handleEdit = data => {

    let notes = JSON.parse(localStorage.getItem("notes"));
    let note = notes.filter(note => note.id === data.id)[0]
    note = {
      ...note,
      ...data
    }
    let newNotes = JSON.stringify([...notes, note]);
    localStorage.setItem("notes", newNotes)
    this.setState({
      notes: [...notes, note]
    })
  }

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
        <Form onSave={this.handleSubmit} />{" "}
        <NotesWrapper>
          {notes &&
            notes.map(({ id, title, content }) => {
              return <Note key={id} id={id} title={title} content={content} handleOpen={this.handleOpen} />;
            })}
        </NotesWrapper>
        {showModal && <Modal
          show={showModal}
          handleClose={this.handleClose}>
          <Form
            onEdit={this.handleEdit}
            activeNote={activeNote} />
        </Modal>
        }
      </PageWrapper>
    );
  }
}

export default App;
