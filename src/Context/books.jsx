import React, { Children, useState } from 'react';
import {createContext} from 'react';
const BooksContext = createContext()
const Provider= ({children})=>{
    const [count,setCount] = useState(0);
    const valToShare = {
        count:count,
        increment:setCount
    }
    return (<BooksContext.Provider value={valToShare}>
        {children}
    </BooksContext.Provider>)

}


export default BooksContext
export {Provider}