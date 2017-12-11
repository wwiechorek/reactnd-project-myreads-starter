import React from 'react'
import { Route } from 'react-router-dom'
// import * as BooksAPI from './BooksAPI'
import './App.css'

import Search from './pages/Search'
import Bookcase from './pages/Bookcase'

class BooksApp extends React.Component {
  render() {
    return (
      <div className="app">
        <Route exact path="/" component={Bookcase} />
        <Route path="/search" component={Search} />
      </div>
    )
  }
}

export default BooksApp
