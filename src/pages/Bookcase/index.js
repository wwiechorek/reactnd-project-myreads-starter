import React, { Component } from 'react'
import './style.css'

import BooksGrid, { Item } from '../../components/BooksGrid'
import Book from '../../components/Book'

class Bookcase extends Component {
    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Currently Reading</h2>
                            <div className="bookshelf-books">
                                <BooksGrid>
                                    <Item>
                                        <Book
                                            title="Books title"
                                            author="Books Author"
                                            status="wantToRead"
                                        />
                                    </Item>
                                </BooksGrid>
                            </div>
                        </div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Want to Read</h2>
                        </div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Read</h2>
                        </div>
                    </div>
                </div>
                <div className="open-search">
                    <a onClick={() => this.props.handleSearchPage()}>Add a book</a>
                </div>
          </div>
        )
    }
}

export default Bookcase