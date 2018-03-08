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

  switchNamehandler = () => {
    // merges with existing state
    this.setState({persons: [
      // changes the first item in state
     {name: 'Maroon', age: 300 },

    ] })
  }
  render() {
    return (
      <div className="App">
       <h1>React app</h1>
       <p>Paragraph text</p>
       <button onClick={this.switchNamehandler}>Switch Name</button>
       <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
       <Person name="ted" age="33">Hobbies: Skiing</Person> 
       <Person name="sally" age="44"/> 
      </div>
    );
  }
}

export default App;
