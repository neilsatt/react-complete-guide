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
      { name: 'Bill', age: 23 },
      { name: 'frank', age: 55 }
    ],
    showPersons: false
  }

  // 

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

  deletePersonHandler= (personIndex) => {
    console.log('delete')
    const persons = this.state.persons; // reference/pointer
    persons.splice(personIndex, 1); // removes one element from array
    this.setState({persons: persons})
  }

   togglePeopleHandler = () => {
     console.log('toggle')
      const doesShow = this.state.showPersons;
      this.setState({showPersons: !doesShow});
   }

  // pass method as a prop (line 42)
  // add inline styles (not the preferred way)
  // toggle statement below - show div if it's true, else null (show nothing)
  render() {
    const myStyle = {
      backgroundColor: 'teal',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px'
    };

    let persons = null;
    // arrow function below allows you to pass the index 
    if(this.state.showPersons) {
        persons = (
          <div>
              {this.state.persons.map((person, index) => {
                return <Person 
                click={() => this.deletePersonHandler(index)}
                name={person.name} 
                age={person.age}/>
              })}
        </div>
      );
    }


    return (
      <div className="App">
       <h1>React app</h1>
       <p>Paragraph text</p>
       <button 
        style={myStyle}
        onClick={this.togglePeopleHandler}>Toggle People
       </button>
       {persons}
      </div>
    );
  }
}

export default App;
