import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import * as BooksAPI from '../../BooksAPI'

import BooksGrid, { Item } from '../../components/BooksGrid'
import Book from '../../components/Book'

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

    renderBooksShelf(shelf) {
        return (
            <BooksGrid>            
                {this.state.books.filter(item => item.shelf === shelf).map(book => (
                    <Item key={book.id}>
                        <Book
                            title={book.title}
                            author={book.authors[0]}
                            status={book.shelf}
                            cover={book.imageLinks.smallThumbnail}                            
                            />
                    </Item>
                ))}
            </BooksGrid>
        )
    }


    render() {
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
                            <div className="bookshelf">
                                <h2 className="bookshelf-title">Currently Reading</h2>
                                <div className="bookshelf-books">
                                    {this.renderBooksShelf('currentlyReading')}
                                </div>
                            </div>
                            <div className="bookshelf">
                                <h2 className="bookshelf-title">Want to Read</h2>
                                <div className="bookshelf-books">
                                    {this.renderBooksShelf('wantToRead')}
                                </div>
                            </div>
                            <div className="bookshelf">
                                <h2 className="bookshelf-title">Read</h2>
                                <div className="bookshelf-books">
                                    {this.renderBooksShelf('read')}
                                </div>
                            </div>
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