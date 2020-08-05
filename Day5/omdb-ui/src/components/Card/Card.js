import React from 'react';
import { useHistory } from 'react-router-dom';

/**
 * useState(), useHistory() => Both are react hooks.
 * React hooks help to change state.
 * State change via hooks also informs React that
 * re-rendering is required.
 * React.memo is a special function. It prevents re-rendering
 * unless this component's input has changed.
 * Usually all child components re-rendered.
 * With React.memo() only if this component input has updated
 * then re-rendering will occur.
 */
const Card = React.memo(props => {
  /**
   * movie = {
   *  Poster: String,
   *  Title: String,
   *  Year: String,
   *  Type: String,
   *  imdbID: String
   * }
   */
  const movie = props.movie;
  const history = useHistory();

  const viewButtonClick = () => {
    history.push(`/details/${movie.imdbID}`);
  }
  
  return (
    <div className="col-md-4">
      <div className="card" style={{ width: '18rem', margin: 'auto' }}>
        <div className="bd-placeholder-img card-img-top" style={{ width: '18rem', height: '18rem', overflow: 'hidden' }}>
          <img src={movie.Poster} style={{ width: '18rem' }} alt="Poster" />
        </div>
        <div className="card-body">
          <h5 className="card-title">{movie.Title}</h5>
          <p className="card-text"> Year : {movie.Year} , Type: {movie.Type} </p>
          <button className="btn btn-primary" onClick={viewButtonClick}>View</button>
        </div>
      </div>
      <br />
    </div>
  )
})

export default Card;