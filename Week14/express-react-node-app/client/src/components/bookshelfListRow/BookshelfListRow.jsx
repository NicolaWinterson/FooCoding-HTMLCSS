import React from "react"
import PropTypes from "prop-types"

export default function BookshelfListRow (props) {

    /* console.log("******BOOKS", props.book) */
    /* const handleBookRemove = (id, title) => void */
    
    return(
    <tr className="table-row">
        <td className="table-item">{props.position}</td>
        <td className="table-item"> <img src={props.book.thumbnail} alt=":-/" /> </td>
        <td className="table-item">{props.book.title}</td>
        <td className="table-item">{props.book.author}</td>
        <td className="table-item">{props.book.pubDate}</td>
        <td className="table-item">{props.book.rating}</td>
        <td className="table-item">
            <button
                    className="table-item"
                    onClick={() => props.handleBookRemove(props.book.id, props.book.title)}> 
                Remove
            </button>
        </td>
    </tr>
) }

BookshelfListRow.propTypes = {
    position: PropTypes.number,
    thumbnail: PropTypes.string,
    author: PropTypes.string,
    title: PropTypes.string,
    pubDate: PropTypes.number,
    rating: PropTypes.number
}