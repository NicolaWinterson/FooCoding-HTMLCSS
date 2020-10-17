import React from 'react'
import PropTypes from 'prop-types'
import BookshelfListRow from '../bookshelfListRow/BookshelfListRow'
import './bookshelf-list.css'


const BookshelfList = ({ books, loading , handleBookRemove }) => {

    if (loading) return <p>Books are loading...</p>
    
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
                {books.length > 0 ? (
                    books.map((book, index) => (
                        
                        <BookshelfListRow
                            key={book.id} 
                            book={book}
                            position={index + 1}
                            handleBookRemove={handleBookRemove}
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
    handleBookRemove: PropTypes.func
}

export default BookshelfList