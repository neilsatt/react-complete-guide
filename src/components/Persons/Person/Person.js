import React, {Component } from 'react';
import classes from './Person.css';
/*
  props give you access to the attributes added to </Person> components
  class-based components use this.props
  children refers to any elements between the opening and closing tags
  of our component 

  THIS IS REFERRED TO AS A FUNCTION STATELESS COMPONENT
  Add input so we can add our own new name. Method comes
  from the App.js file
*/
// convert to stateful 
class Person extends Component {
  render() {
    return (
      <div className={classes.Person}>
        <p onClick={this.props.click}>I am {this.props.name} and I'm {this.props.age} years old</p>
        <p>{this.props.children}</p>
        <input type="text" onChange={this.props.changed} value={this.props.name}/>
      </div>
    )
  }
}


export default Person;