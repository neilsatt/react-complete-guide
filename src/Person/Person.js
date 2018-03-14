import React from 'react';
import './Person.css';
import Radium from 'radium';
/*
  props give you access to the attributes added to </Person> components
  class-based components use this.props
  children refers to any elements between the opening and closing tags
  of our component 

  THIS IS REFERRED TO AS A FUNCTION STATELESS COMPONENT
  Add input so we can add our own new name. Method comes
  from the App.js file
*/
const person = (props) => {
   const style = {
    '@media (min-width: 500px)': {
      width: '450px'
    }
   };
    return (
        <div className="Person" style={style}>
          <p onClick={props.click}>I am {props.name} and I'm {props.age} years old</p>
          <p>{props.children}</p>
          <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
  
};

export default Radium(person);