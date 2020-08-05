import React from 'react';

export default function List(props) {
  const elements = props.elements || []; // Array of movies
  const component = props.component; // Card component

  const createReactElement = (element) => {
    /**
     * This is a specific use case where you have to use the compiled version directly
     * Second argument is input for card component.
     * A list in react has to have a unique input property of key.
     */
    return React.createElement(component, { movie: element, key: element.imdbID })
  }

  return (
    <div className="row">
      {elements.map(e => createReactElement(e))}
    </div>
  )
}