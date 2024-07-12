import PropTypes from 'prop-types'
import { FaBookmark } from "react-icons/fa";


const Blog = ({blog, handleAddToBookmark, handleReadingTime}) => {

    const {id,title, cover_img, author, author_img,
         reading_time,posted_date, hashtags} = blog
    return (
        <div className='mb-20 space-y-4'>
            <img className='w-full' src={cover_img} alt={`cover picture of the title ${title}`} />
            <div className='flex justify-between items-center mb-4'>
                <div className='flex p-2'>
                     <img className="rounded-full w-14" src={author_img} alt="" />
                     <div className='ml-6'>
                        <h1 className='text-xl font-semibold'>{author}</h1>
                        <h1 className='text-lg'>{posted_date}</h1>
                     </div>
                </div>
                <div className='flex items-center'>
                     <span className='text-lg font-medium mr-2'>{reading_time} min read</span>
                     <button 
                      onClick={() => handleAddToBookmark(blog)}
                      className='text-3xl'>
                     <FaBookmark></FaBookmark>
                     </button>
                </div>
            </div>
            <h1 className='text-3xl text-left mb-2'> {title}</h1>
            <p className='text-xl font-semibold text-left'>
                {
                    hashtags.map((hash, idx) => <span key={idx}>
                        <a href="">{hash}</a></span>)
                }
            </p>

            <button className='text-purple-800 font-semibold underline text-left ' onClick={ () => handleReadingTime(reading_time,id)}> Mark as read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark : PropTypes.func.isRequired,
    handleReadingTime: PropTypes.func.isRequired
};

export default Blog;