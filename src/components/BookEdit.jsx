import React, { useState } from 'react'
import './bookshow.css'
const BookEdit = ({book,onEdit,toggleEdit}) => {
  const {id,title,img} = book
  const [editBook, setEditBook] = useState({title,img,id})
  const saveEditHandler = (id,title) =>{
      onEdit(id,title)
      toggleEdit()

  }

  return (
    <div className='book-card' key={id}>
       
        <div className='book-img'><img src={img}/></div>
        <div>
          <p>title</p><br></br>
          <div className='book-title'>
            <input type='text' placeholder='enter title' name='title' autoFocus onChange={(e)=>setEditBook({...editBook,[e.target.name]:e.target.value})} value={editBook.title}/>
            <button onClick={()=>saveEditHandler(editBook.id,editBook.title)}>Save</button>
          </div>
        </div>
        
    </div>
  )
}

export default BookEdit