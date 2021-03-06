import React, {Component } from 'react';

import Person from './Person/Person';
// converted component from stateless to stateful
class Persons extends Component {
  constructor(props){
    super(props);
    console.log('[Persons.js] Inside Constructor', props);
    
  }

  componentWillMount() {
    console.log('[Persons.js] Inside componentWillMount');
  }

  componentDidMount() {
    console.log('[Persons.js] in componentDidMount()');
  }

  componentWillReceiveProps(nextProps) {
    console.log('[UPDATE Persons.js] inside componentWillReceiveProps()', nextProps);
  }

  shouldComponentUpdate(nextProps, state) {
    console.log('[UPDATE Persons.js] inside shouldComponentUpdate()', nextProps);
    return nextProps.persons !== this.props.persons;
  }

  render () {
    console.log('[Persons.js] in render()');
    return this.props.persons.map( ( person, index ) => {
        return <Person
          click={() => this.props.clicked( index )}
          name={person.name}
          age={person.age}
          key={person.id}
          changed={( event ) => this.props.changed( event, person.id )} />
      } );
    }
  }

export default Persons;