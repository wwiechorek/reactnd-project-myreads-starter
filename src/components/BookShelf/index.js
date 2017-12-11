import React, { Component } from 'react'
import PropTypes from 'prop-types'

import BooksGrid, { Item } from '../BooksGrid'
import Book from '../Book'

import './style.css'

class BookShelf extends Component {
    static propTypes = {
        books: PropTypes.array,
        title: PropTypes.string,
        handleBookUpdate: PropTypes.func
    }
    static defaultProps = {
        handleBookUpdate: () => {}
    }

    
    
    render() {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.title}</h2>
                <div className="bookshelf-books">
                    <BooksGrid>            
                        {this.props.books.map(book => (
                            <Item key={book.id}>
                                <Book
                                    id={book.id}
                                    title={book.title}
                                    author={book.authors[0]}
                                    status={book.shelf}
                                    cover={undefined}
                                    handleUpdate={(id, data) => this.props.handleBookUpdate(id, data)}                         
                                    />
                            </Item>
                        ))}
                    </BooksGrid>
                </div>
            </div>
        )
    }
}

export default BookShelf