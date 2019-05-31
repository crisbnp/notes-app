import React, { Component } from 'react';
import Textarea from './components/Textarea'
import Note from './components/Note'

class App extends Component {
  state = {
    notes: [],
  }

  handleSubmit = (data) => {
    let notes = JSON.parse(localStorage.getItem('notes'))
    let newNotes = JSON.stringify([...notes, data])
    localStorage.setItem('notes', newNotes)
    this.setState({notes: [...notes, data]})
  }

  componentDidMount () {
    let notes = JSON.parse(localStorage.getItem('notes'))
    if (!notes) {
      localStorage.setItem('notes', JSON.stringify([]))
    }
    this.setState({notes: notes || []})
  }

  render() {
    const {notes} = this.state
    console.log(notes)
    return (
  
      <div className="App">
            <Textarea onSubmit={this.handleSubmit}/>
            {notes && notes.map(note => {
              return (
                <Note key={note.id} title={note.title} content={note.content}/>
              )
            })}
      </div>
    );
  }
}

export default App;
