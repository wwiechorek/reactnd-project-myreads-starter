import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import * as BooksAPI from '../../BooksAPI'

import BooksGrid, { Item } from '../../components/BooksGrid'
import Book from '../../components/Book'

import './style.css'

class Search extends Component {
    state = {
        search: '',
        data: [],
        status: 'done'
    }

    componentWillUpdate(nextProps, nextState) {
        if(nextState.search !== this.state.search) {
            // waiting user stop typing 
            clearTimeout(this.timeout)
            
            // Make a new timeout set to go off in 800ms
            this.timeout = setTimeout(function () {
                this.searchBooks(nextState.search)
            }.bind(this), 500)
        }
    }

    searchBooks(search) {
        if(search === "") return

        this.setState({
            status: 'loading'
        })
        BooksAPI.search(search)
        .then(resp => {
            if(resp.error) {
                this.setState({
                    status: "error"
                })
            } else {
                this.setState({
                    data: resp,
                    status: 'done'
                })
            }

        })
    }

    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/" className="close-search">Close</Link>
                    <div className="search-books-input-wrapper">
                        {/*
                        NOTES: The search from BooksAPI is limited to a particular set of search terms.
                        You can find these search terms here:
                        https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                        However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                        you don't find a specific author or title. Every search is limited by search terms.
                        */}
                        <input
                            type="text"
                            value={this.state.search}
                            onChange={(e) => {
                                this.setState({
                                    search: e.target.value
                                })
                            }}
                            placeholder="Search by title or author"/>

                    </div>
                </div>
                <div className="search-books-results">
                    {this.state.status === 'loading' && (
                        <div style={{textAlign: "center"}}>
                            Loading...
                        </div>
                    )}
                    {this.state.status === 'error' && (
                        <div style={{textAlign: "center"}}>
                            No search found
                        </div>
                    )}
                    {this.state.status === 'done' && (
                        <BooksGrid>
                            {this.state.data.map(book => (
                                <Item key={book.id}>
                                    <Book
                                        title={book.title}
                                        author={book.authors ? book.authors[0] : ''}
                                        status={book.shelf}
                                        cover={book.imageLinks.smallThumbnail}
                                        />
                                </Item>
                            ))}
                        </BooksGrid>
                    )}
                </div>
            </div>
        )
    }
}

export default Search