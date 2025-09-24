import { useEffect, useState,useContext } from 'react'
import BookList from './components/BookList'
import './App.css'
import BookCreate from './components/BookCreate'
import BooksContext from './Context/books'
import axios from 'axios'
function App() {
  const {books,fetchAllBooks} = useContext(BooksContext)

  useEffect(()=>{
      fetchAllBooks()
  },[])







  return (
    <>
      <BookList />
      <BookCreate />
    </>
  )
}

export default App
