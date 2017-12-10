import React, { Component } from 'react'
import './style.css'

class BooksGrid extends Component {
    render() {
        return (
            <ol className="books-grid">
                { this.props.children }
            </ol>
        )
    }
}

export default BooksGrid

export class Item extends Component {
    render() {
        return (
            <li>
                { this.props.children }
            </li>
        )
    }
}
