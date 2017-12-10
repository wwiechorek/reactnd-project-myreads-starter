import React, { Component } from 'react'
import PropTypes from 'prop-types'

import * as BooksAPI from '../../BooksAPI'

import './style.css'

class Book extends Component {
    static propTypes = {
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        cover: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        status: PropTypes.oneOf(['none', 'currentlyReading', 'wantToRead', 'read']),
        handleUpdate: PropTypes.func
    }
    static defaultProps = {
        handleUpdate: () => {},
        status: 'none'
    }

    state = {
        status: 'done'
    }

    update(id, value) {
        this.setState({
            status: 'loading'
        })
        BooksAPI.update({id}, value)
        .then(resp => {  
            this.setState({
                status: 'done'
            })
            this.props.handleUpdate(id, value)
        })    
    }
    
    render() {
        return (
            <div className={`book ${this.state.status === 'loading' ? 'loading' : ''}`}>
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${this.props.cover})` }}></div>
                    <div className="book-shelf-changer">
                    <select defaultValue={this.props.status} onChange={(e) => this.update(this.props.id, e.target.value)}>
                        <option disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                    </div>
                </div>
                <div className="book-title">{this.props.title}</div>
                <div className="book-authors">{this.props.author}</div>
            </div>              
        )
    }
}

export default Book