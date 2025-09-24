import React, { useState } from 'react'
import './bookshow.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';
import BookEdit from './BookEdit';

function BookShow({id,title,img,onDelete,onEdit}) {
  const [isEdit,setIsEdit] = useState(false)

  const setEditHandler = () =>{
    setIsEdit(false)
  }
  let editHandler = (e) =>{
    setIsEdit(true)
    
  }
  let deleteHandler = (id) =>{
      onDelete(id)
  }
  return (
    <>
    {
      (!isEdit) ?
      (<div className='book-card' key={id}>
        <div className='book-icons'>
          <div>
            <button onClick={(e)=>editHandler(e)}><FontAwesomeIcon icon={faPencil} style={{color: "#74C0FC",}}/></button>
          </div>
          <div>
            <button onClick={()=>deleteHandler(id)}><FontAwesomeIcon icon={faTrash} style={{color: "#e47049",}}/></button>
          </div>          
        </div>
        <div className='book-img'><img src={img}/></div>
        <div className='book-title'>{title}</div>
      </div>)
      :
      (<BookEdit book={{id,title,img}} onEdit={onEdit} toggleEdit={setEditHandler} />)
    }
    </>
     
    
  )
}

export default BookShow