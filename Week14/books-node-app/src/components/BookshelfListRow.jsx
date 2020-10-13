import React from "react"
import PropTypes from "prop-types"

export default BookshelfListRow = (props) => {

    /* const handleBookRemove = (id, title) => void */
    
    return(
    <tr className="table-row">
        <td className="table-item">{props.position}</td>
        <td className="table-item">{props.books.title}</td>
        <td className="table-item">{props.books.pubDate}</td>
        <td className="table-item">{props.books.rating}</td>
        <td className="table-item">
            <button
                    className="table-item"
                    onClick={/* () => props.handleBookRemove(props.book.id, props.book.title)*/ props.onClick}> 
                Remove Book
            </button>
        </td>
    </tr>
) }

BookshelfListRow.propTypes = {
    id: PropTypes.string,
    author: PropTypes.string,
    title: PropTypes.func,
    pubDate: PropTypes.string,
    rating: PropTypes.string
}