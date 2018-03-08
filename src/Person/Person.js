import React from 'react';
/*
  props give you access to the attributes added to </Person> components
  class-based components use this.props
  children refers to any elements between the opening and closing tags
  of our component 

  THIS IS REFERRED TO AS A FUNCTION STATELESS COMPONENT
*/
const person = (props) => {
    return (
        <div>
          <p>I am {props.name} and I'm {props.age} years old</p>
          <p>{props.children}</p>
        </div>
    )
  
};

export default person;