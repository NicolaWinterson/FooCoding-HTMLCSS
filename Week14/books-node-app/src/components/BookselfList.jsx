import React from 'react'
import PropTypes from 'prop-types'
import BookshelfListRow from './BookshelfListRow'
import './../styles/bookshelf-list.css'

const BookshelfList = (props) => {

    if (props.loading) return <p>Books are loading...</p>

    return (
        <table className="table">
            <thead>
                <tr>
                    <th className="table-head-item" />

                    <th className="table-head-item">Title</th>

                    <th className="table-head-item">Author</th>

                    <th className="table-head-item">Pub. date</th>

                    <th className="table-head-item">Rating</th>

                    <th className="table-head-item" />
                </tr>
            </thead>

            <tbody className="table-body">
                {props.books.length > 0 ? (
                    props.books.map((book, idx) => (
                        <BookshelfListRow
                            key={book.id}
                            book={book}
                            position={idx + 1}
                            handleBookRemove={props.handleBookRemove}
                        />
                    )
                    )
                ) : (
                        <tr className="table-row">
                            <td className="table-item" style={{ textAlign: 'center' }} colSpan={6}>There are no books to show. Create one!</td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    )
}

BookshelfList.propTypes = {
    id: PropTypes.string,
    author: PropTypes.string,
    title: PropTypes.func,
    pubDate: PropTypes.string,
    rating: PropTypes.string
}

export default BookshelfList