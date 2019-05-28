import React, { Component } from 'react';
import Header from './components/Header';
import NoteCard from './components/NoteCard'
import './App.css';

class App extends Component {
  state = {
    title: prompt('Name your notes!'),
    note : '',
    notes: [],
    time: ''
  }

  handleDelete = (event) => {
    
  }

  handleAdd = (event) => {
    const {notes, note} = this.state
    let newNote = notes.push(note)  
    this.setState({
      notes: newNote
    })
  }

  handleEdit = (event) => {
    this.setState({

    })
  }

  handleNote = (event) => {
    this.setState({
      note: event.target.value
    })
  }

  render() {
    const {title, getTime, note} = this.state

    return (
      <div className="App">
        <Header title={title}></Header>
        <button onClick={this.handleAdd}>Add New Note</button>
        <NoteCard handleDelete={this.handleDelete} handleEdit={this.handleEdit} timestamp={getTime} yourNotes={note}></NoteCard>
      </div>
    );
  }
}

export default App;
