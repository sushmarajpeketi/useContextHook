import React from 'react'
import BookShow from './BookShow'
import './booklist.css'
import { useContext } from 'react'
import BooksContext from '../Context/books'

const BookList = () => {
  const {books} = useContext(BooksContext);
    let renderBooks = books.map((e)=>{
        return <BookShow title={e.title} img={e.img} id={e.id} key={e.id} />
    })
    
  return (
    <div className="book-container">
        {renderBooks}
    </div>
    
  )
}

export default BookList