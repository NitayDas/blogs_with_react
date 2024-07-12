import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className="md:w-1/3 flex-1 bg-gray-300 ml-4 rounded-lg">
            <div>
                <h3>Reading Time : {readingTime}</h3>
            </div>
            <h1 className="text-2xl font-bold text-center mb-4 mt-2">Bookmarked Blogs:{bookmarks.length}</h1>
            {
                  bookmarks.map((bookmark, idx) =><Bookmark key ={idx} bookmark ={bookmark}>
                    </Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes ={
    bookmarks : PropTypes.array,
    readingTime: PropTypes.number,
}

export default Bookmarks;