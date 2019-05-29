import React, { Component } from 'react';
import Textarea from './components/Textarea'


import Header from './components/Header';
import NoteCard from './components/NoteCard'
import './App.css';

class App extends Component {
  state = {
    notes: [],
  }

  handleSubmit = (data) => {
    let notes = JSON.parse(localStorage.getItem('notes'))
    let newNotes = JSON.stringify([...notes, data])
    localStorage.setItem('notes', newNotes)
  }

  componentDidMount () {
    let notes = localStorage.getItem('notes')
    if (!notes) {
      localStorage.setItem('notes', JSON.stringify([]))
    }
  }

  render() {
    const {title, getTime, note} = this.state

    return (
  
      <div className="App">
            <Textarea onSubmit={this.handleSubmit}/>
      </div>
    );
  }
}

export default App;
