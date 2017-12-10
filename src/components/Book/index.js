import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.css'

class Book extends Component {
    render() {
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${this.props.cover})` }}></div>
                    <div className="book-shelf-changer">
                    <select defaultValue={this.props.status}>
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

Book.propTypes = {
    title: PropTypes.string.isRequired,
    cover: PropTypes.string,
    author: PropTypes.string.isRequired,
    status: PropTypes.oneOf(['none', 'currentlyReading', 'wantToRead', 'read'])
}

export default Book