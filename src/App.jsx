import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'


function App() {

  const [bookmarks , setBookmaarks] = useState([]);

  const [readingTime, setReadingTime] = useState(0);

  const handleAddToBookmark = blog =>{
    const newBookmarks = [...bookmarks, blog];
    setBookmaarks(newBookmarks);
   
  }

  const handleReadingTime = time =>{
      setReadingTime(readingTime + time)
  }

  return (
    <>
      <Header></Header>

      <div className='md:flex max-w-7xl mx-auto'>
        <Blogs handleAddToBookmark={handleAddToBookmark} 
        handleReadingTime={handleReadingTime}></Blogs>
        <Bookmarks bookmarks={bookmarks}  readingTime= {readingTime}></Bookmarks>
      </div>
    </>
  )
}



export default App
