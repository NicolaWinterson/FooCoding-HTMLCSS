import React, { useState, useEffect } from "react"
import axios from "axios"
import BookshelfList from '../bookshelfList/BookshelfList'
import './bookshelf.css'

const BookShelf = () => {
    const [author, setAuthor] = useState('')
    const [title, setTitle] = useState('')
    const [pubDate, setPubDate] = useState('')
    const [rating, setRating] = useState('')
    const [books, setBooks] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchBooks()
    }, [])

    const fetchBooks = async () => {
        axios
            .get('/books/all')
            .then(response => {
                setBooks(response.data)
                setLoading(false)
            })
            .catch(error => console.error(`There was an error retrieving the book list: ${error}`))
    }

    const handleInputReset = () => {
        setAuthor('')
        setTitle('')
        setPubDate('')
        setRating('')
    }

    const handleBookCreate = () => {
        axios
            /* TODO: figure out why there is no cors issue */
            .post('http://localhost:4000/books/create', {
                author: author,
                title: title,
                pubDate: pubDate,
                rating: rating
            })
            .then(response => {
                console.log(response.data)
                fetchBooks()
            })
            .catch(error => console.error(`There was an error creating the ${title} book: ${error}`))
    }

    const handleBookSubmit = () => {
        if (author.length > 0 && title.length > 0 && pubDate.length > 0 && rating.length > 0) {
            handleBookCreate()
            console.info(`Book ${title} by ${author} added to db.`)
            handleInputReset()
        }
    }

    const handleBookRemove = (id, title) => {
        axios
            .put('http://localhost:4000/books/delete', { id: id })
            .then(() => {
                console.log(`Book ${title} was removed.`)
                fetchBooks()
            })
            .catch(error => console.error(`There was a problem removing the ${title} book: ${error}`))
    }

    const handleListReset = () => {
        axios
            .put('http://localhost:4000/books/reset')
            .then(() => {
                fetchBooks()
            })
            .catch(error => console.error(`There was a problem resetting the book list: ${error}`))
    }
    return (
        <div className="book-list-wrapper">
            <div className="book-list-form">
                <div className="form-wrapper" onSubmit={handleBookSubmit}>
                    <div className="form-row">
                        <fieldset>
                            <label className="form-label" htmlFor="title">Enter title:</label>
                            <input className="form-input" type="text" id="title" name="title" value={title} onChange={(e) => setTitle(e.currentTarget.value)} />
                        </fieldset>

                        <fieldset>
                            <label className="form-label" htmlFor="author">Enter author:</label>
                            <input className="form-input" type="text" id="author" name="author" value={author} onChange={(e) => setAuthor(e.currentTarget.value)} />
                        </fieldset>
                    </div>
                    <div className="form-row">
                        <fieldset>
                            <label className="form-label" htmlFor="pubDate">Enter publication date:</label>
                            <input className="form-input" type="number" id="pubDate" name="pubDate" value={pubDate} onChange={(e) => setPubDate(e.currentTarget.value)} />
                        </fieldset>

                        <fieldset>
                            <label className="form-label" htmlFor="rating">Enter rating:</label>
                            <input className="form-input" type="number" id="rating" name="rating" value={rating} onChange={(e) => setRating(e.currentTarget.value)} />
                        </fieldset>
                    </div>
                </div>

                <button onClick={handleBookSubmit} className="btn btn-add">Add the book</button>
            </div>

            {/* Render bookshelf list component */}
            <BookshelfList books={books} loading={loading} handleBookRemove={handleBookRemove} />

            {/* Show reset button if list contains at least one book */}
            {books.length > 0 && (
                <button className="btn btn-reset" onClick={handleListReset}>Reset books list.</button>
            )}
        </div>
    )
}

/* Bookshelf.propTypes = {
    id: PropTypes.string,
    author: PropTypes.string,
    title: PropTypes.func,
    pubDate: PropTypes.string,
    rating: PropTypes.string
} */

export default BookShelf