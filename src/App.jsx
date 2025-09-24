import { useEffect, useState } from 'react'
import BookList from './components/BookList'
import './App.css'
import BookCreate from './components/BookCreate'
import axios from 'axios'
function App() {
  const [books,setBooks] = useState([
    // {id:1,title:"The subtle art of not giving a fuck. ",img:"https://panamericana.vtexassets.com/arquivos/ids/568943-800-auto?v=638693552241630000&width=800&height=auto&aspect=true"},
    // {id:2,title:"Atomic Habbits. ",img:"https://www.enjoyerbooks.com/cdn/shop/files/AtomicHabits.png?v=1735280647&width=1445"}
  ])

  useEffect(()=>{
       fetchAllBooks()
  },[])
 
  const deleteHandler = async (id)=>{

    const response = await axios.delete(`http://localhost:3001/books/${id}`)
    setBooks(books.filter((e=>e.id!=response.data.id)))
  }

  const fetchAllBooks = async()=>{
    console.log(books)
      const response = await axios(`http://localhost:3001/books`)
      setBooks(response.data)
     
  }

  const editHandlerById = async (id,title)=>{
    console.log(title)
    const response = await axios.patch(`http://localhost:3001/books/${id}`,{title})
    console.log("while editing ",response.data)
    setBooks(books.map((el)=>{
      if(el.id===response.data.id){
        return {...el,title:title};
      }
      return el;
    }))
  }

  const createBookHandler = async (newBook)=>{
    const response =  await axios.post('http://localhost:3001/books',{...newBook})
    console.log("response data is",response.data)
    setBooks([...books,response.data])
  }

  return (
    <>
      <BookList onDelete={deleteHandler} books={books} onEdit={editHandlerById}/>
      <BookCreate onCreate={createBookHandler}/>
    </>
  )
}

export default App
