import React, { Component } from "react";
import Form from "./components/Form";
import Note from "./components/Note";
import Modal from "./components/Modal"
import styled, {createGlobalStyle} from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
  box-sizing: border-box;
  }
`

const PageWrapper = styled.div`
  margin: 10px;
`;

const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
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

    let newNotes = notes.map(n => {
      if (n.id === note.id) {
        return note
      }
      return n
    })
    localStorage.setItem("notes", JSON.stringify(newNotes))
    this.setState({
      notes: newNotes,
      showModal: false
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

  handleDelete = (activeNote) => {
    let notes = JSON.parse(localStorage.getItem("notes"));
    let newNotes = notes.filter(n => n.id !== activeNote)
    localStorage.setItem("notes", JSON.stringify(newNotes))
    this.setState({
      notes:newNotes
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
      <React.Fragment>
        <GlobalStyles/>
        <PageWrapper className="App">
          <FormWrapper>
            <Form onSave={this.handleSubmit} />
          </FormWrapper>
          <NotesWrapper>
            {notes &&
              notes.map(({ id, title, content, time }) => {
                return (
                  <Note
                    key={id}
                    id={id}
                    title={title}
                    content={content}
                    handleOpen={this.handleOpen}
                    handleDelete={this.handleDelete}
                    date={time}
                  />
                )
              })}
          </NotesWrapper>
          {showModal && <Modal
            show={showModal}
            handleClose={this.handleClose}>
            <FormWrapper>
              <Form
                onEdit={this.handleEdit}
                activeNote={activeNote}
              />
            </FormWrapper>
          </Modal>
          }
        </PageWrapper>
      </React.Fragment>
    );
  }
}

export default App;
