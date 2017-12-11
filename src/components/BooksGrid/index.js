import React from 'react'
import './style.css'

export default props => (
    <ol className="books-grid">
        { props.children }
    </ol>
)

export const Item = props => (
    <li>
        { props.children }
    </li>
)