import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'


function App() {

  const [bookmarks , setBookmarks] = useState([]);

  const [readingTime, setReadingTime] = useState(0);

  const handleAddToBookmark = blog =>{
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
   
  }

  const handleReadingTime = (time, id) =>{
      setReadingTime(readingTime + time)
      const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id )
      setBookmarks(remainingBookmarks)
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
