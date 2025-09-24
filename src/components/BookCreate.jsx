import React, { useState } from 'react'

function BookCreate({onCreate}) {

    let [createBook,setCreateBook] = useState({title:"",img:""})

    const addHandler = (createBook) =>{
        console.log("new createdbook is",createBook)
        onCreate(createBook)
        setCreateBook({title:"",img:""})
    }
  return (
    <>
    <div className="add-book-container">
        <div className="title">
            <input type='text' name='title' placeholder='enter the bookname' value={createBook.title} onChange={(e)=>setCreateBook({...createBook, [e.target.name]:e.target.value})}/>
            <input type='txt' name='img' placeholder='enter the img link' value={createBook.img} onChange={(e)=>setCreateBook({...createBook, [e.target.name]:e.target.value})}/>
            <button onClick={()=>addHandler(createBook)}>Add Book</button>
        </div>
    </div>
    </>
  )
}

export default BookCreate