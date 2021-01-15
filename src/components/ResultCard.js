import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const ResultCard = ({ movie }) => {
  const {
    addMovieToWatchlist,
    watchlist,
    watched,
    addMoveToWatched,
  } = useContext(GlobalContext)

  let storedWatchlistMovie = watchlist.find((o) => o.id === movie.id)
  let storedWatchedMovie = watched.find((o) => o.id === movie.id)

  const watchlistDisabled = storedWatchlistMovie
    ? true
    : storedWatchedMovie
    ? true
    : false

  const watchedDisabled = storedWatchedMovie ? true : false
  return (
    <div className='result-card'>
      <div className='poster-wrapper'>
        {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={`${movie.titile} Poster`}
          />
        ) : (
          <div className='filler-poster'></div>
        )}
      </div>
      <div className='info'>
        <div className='header'>
          <h3 className='title'>{movie.title}</h3>
          <h4 className='release-date'>
            {movie.release_date ? movie.release_date.substring(0, 4) : '-'}
          </h4>
        </div>
        <div className='controls'>
          <button
            className='btn'
            disabled={watchlistDisabled}
            onClick={() => addMovieToWatchlist(movie)}
          >
            Add to watchlist
          </button>
          <button
            disabled={watchedDisabled}
            onClick={() => addMoveToWatched(movie)}
            className='btn'
          >
            Add to Watched
          </button>
        </div>
      </div>
    </div>
  )
}
