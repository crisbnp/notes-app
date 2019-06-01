import React, { Component } from "react";
import Form from "./components/Form";
import Note from "./components/Note";
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
    notes: []
  };

  handleSubmit = data => {
    let notes = JSON.parse(localStorage.getItem("notes"));
    let newNotes = JSON.stringify([...notes, data]);
    localStorage.setItem("notes", newNotes);
    this.setState({
      notes: [...notes, data]
    });
  };

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
    const { notes } = this.state;
    console.log(notes);
    return (
      <PageWrapper className="App">
        <Form onSubmit={this.handleSubmit} />{" "}
        <NotesWrapper>
          {notes &&
            notes.map(({ id, title, content }) => {
              return <Note key={id} title={title} content={content} />;
            })}
        </NotesWrapper>
      </PageWrapper>
    );
  }
}

export default App;
