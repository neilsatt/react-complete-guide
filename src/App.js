import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

// with classes that extend Components
// you can define state
// props are safer and used more
// STATEFULL CLASS 


class App extends Component {
  state = {
    persons: [
      { id: 1, name: 'Bill', age: 23 }, 
      { id: 2, name: 'frank', age: 55 },
      { id: 3, name: 'ted', age: 43 },
    ],
    showPersons: false
  }

  // 

 // for input field
  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
     });

     const person = {
        ...this.state.persons[personIndex]
     };

     person.name = event.target.value;

     const persons = [...this.state.persons];
     persons[personIndex] = person;
    
    this.setState({ persons: persons} )

  }

  deletePersonHandler= (personIndex) => {
    console.log('delete')
    // ES5 use slice to copy array so you don't change the original array
    // const persons = this.state.persons.slice(); // reference/pointer
    // ES6 - spread operator 
    // spreads out items into a list of elements, then gets added to array
    // so, new items plus old items, but doesn't mutate original array
    // You should update state in an immutable way
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1); // mutates one element from array
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
    let persons = null;
    let btnClass = '';

    // arrow function below allows you to pass the index 
    if(this.state.showPersons) {
        persons = (
          <div>
              {this.state.persons.map((person, index) => {
                return <ErrorBoundary key={person.id}>
                <Person 
                click={() => this.deletePersonHandler(index)}
                name={person.name} 
                age={person.age}
                
                changed={(event) => this.nameChangedHandler(event, person.id)}/></ErrorBoundary>
              })}
        </div>
      );
      btnClass = classes.Red;
    }

    const assignedClasses = [];
    if(this.state.persons.length <=2){
      assignedClasses.push(classes.red);
    }
    if(this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }
    return (
      <div className={classes.App}>
       <h1>React app</h1>
       <p className={assignedClasses.join('')}>Paragraph text</p>
       <button 
         className = {btnClass}
          onClick={this.togglePeopleHandler}>Toggle People
       </button>
       {persons}
      </div>
    );
  }
}

export default App;
