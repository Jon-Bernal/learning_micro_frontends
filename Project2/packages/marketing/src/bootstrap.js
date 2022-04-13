import React from 'react'
import ReactDOM from 'react-dom';

// mount function to startup the app
const mount = el => {
  ReactDOM.render(
    <h1>Hi there!</h1>,
    el
  )
}

// if we are in dev and in isolation mode,
// call mount immediately

// we are running through container
// and we should export the mount function