import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

// with classes that extend Components
// you can define state
// props are safer and used more
// STATEFULL CLASS 

// super is needed for 'this' to work
class App extends Component {
  constructor(props){
    super(props);
    console.log('[App.js] Inside Constructor', props);
    
  }

  componentWillMount() {
    console.log('[App.js] Inside componentWillMount');
  }

  componentDidMount() {
    console.log('[App.js] in componentDidMount()');
  }

  state = {
    persons: [
      { id: 1, name: 'Bill', age: 23 }, 
      { id: 2, name: 'frank', age: 55 },
      { id: 3, name: 'ted', age: 43 },
    ],
    otherState: 'some other value',
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
    console.log('[App.js] in render()');
    let persons = null;

    // Use the persons component
    if(this.state.showPersons) {
        persons = 
            <Persons 
              persons={this.state.persons}
              clicked={this.deletePersonHandler}
              changed={this.nameChangedHandler} />;
    }

    return (
      <div className={classes.App}>
      <Cockpit 
        showPersons={this.state.showPersons} 
        persons={this.state.persons} 
        clicked={this.togglePeopleHandler}/>
       {persons}
      </div>
    );
  }
}

export default App;
