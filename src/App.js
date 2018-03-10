import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

// with classes that extend Components
// you can define state
// props are safer and used more
// STATEFULL CLASS 


class App extends Component {
  state = {
    persons: [
      {
        name: 'Bill',
        age: 23
      },
      {
        name: 'frank',
        age: 55
      }
    ]
  }
  // Pass in an argument, then bind it
  switchNamehandler = (newName) => {
    // merges with existing state
    this.setState({persons: [
      // changes the first item in state
     {name: newName, age: 300 },
     {name: newName, age: 33 },

    ] })
  }
 // for input field
  nameChangedHandler = (event) => {
    this.setState({
      persons: [
     {name: 'Max', age: 300 },
     {name: event.target.value, age: 300 },
     {name: 'Alice', age: 30 },
    ] 
   })
  }
  // pass method as a prop (line 42)
  // add inline styles (not the preferred way)
  render() {
    const myStyle = {
      backgroundColor: 'teal',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px'
    }
    return (
      <div className="App">
       <h1>React app</h1>
       <p>Paragraph text</p>
       <button 
       style={myStyle}
       onClick={this.switchNamehandler.bind(this, 'Fred')}>Switch Name</button>
       <Person name={this.state.persons[0].name} 
               age={this.state.persons[0].age}
               myClick={this.switchNamehandler.bind(this, 'REY')} >Hobbies: Skiing</Person>
       <Person name={this.state.persons[1].name}
                age={this.state.persons[1].age}
               changed={this.nameChangedHandler}/> 
       <Person name="sally" age="44"/> 
      </div>
    );
  }
}

export default App;
