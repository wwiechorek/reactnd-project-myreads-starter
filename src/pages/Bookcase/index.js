import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import * as BooksAPI from '../../BooksAPI'

import BookShelf from '../../components/BookShelf'

import './style.css'
class Bookcase extends Component {
    state = {
        books: [],
        status: 'loading'
    }

    componentWillMount() {
        BooksAPI.getAll()
        .then(resp => {
            this.setState({
                books: resp,
                status: 'done'
            })
        })
    }

    handleBookUpdate(id, shelf) {
        let books = this.state.books
        let key = null
        let bookChanged = books.filter((book, k) => {
            if(book.id === id) {
                key = k
                return true
            }

            return false
        })[0]
        bookChanged.shelf = shelf
        books[key] = bookChanged
    
        this.setState({
            books
        })
    }


    render() {

        const shelves = [
            {
                id: 'currentlyReading',
                title: 'Currently Reading',
                books: this.state.books.filter(book => book.shelf === 'currentlyReading')
            },
            {
                id: 'wantToRead',
                title: 'Want To Read',
                books: this.state.books.filter(book => book.shelf === 'wantToRead')
            },
            {
                id: 'read',
                title: 'Read',
                books: this.state.books.filter(book => book.shelf === 'read')
            },
        ]

        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                {this.state.status === 'loading' ? 
                    <div style={{textAlign: 'center'}}>
                        Loading...
                    </div>
                : (
                    <div className="list-books-content">
                        <div>
                            {shelves.map(shelf => (
                                <BookShelf
                                    key={shelf.id}
                                    title={shelf.title}
                                    books={shelf.books}
                                    handleBookUpdate={(id, value) => this.handleBookUpdate(id, value)}
                                     />
                            ))}
                        </div>
                    </div>
                )}                
                <div className="open-search">
                    <Link to="/search">Add a book</Link>
                </div>
          </div>
        )
    }
}

export default Bookcase