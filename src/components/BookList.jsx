import React from 'react'
import BookShow from './BookShow'
import './booklist.css'
import { useContext } from 'react'
import BooksContext from '../Context/books'

const BookList = ({books,onDelete,onEdit}) => {
  const {count,increment} = useContext(BooksContext);
    let renderBooks = books.map((e)=>{
        return <BookShow title={e.title} img={e.img} id={e.id} onDelete={onDelete} key={e.id} onEdit={onEdit}/>
    })
    
  return (
    <div className="book-container">
      {count}
      <button onClick={()=>{increment(count+1)}}>increase</button>
        {renderBooks}
    </div>
    
  )
}

export default BookList