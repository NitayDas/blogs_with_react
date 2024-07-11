import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks}) => {
    return (
        <div className="md:w-1/3 flex-1 bg-gray-300 ml-4 rounded-lg">
            <h1 className="text-2xl font-bold text-center mb-4 mt-2">Bookmarked Blogs:{bookmarks.length}</h1>
            {
                  bookmarks.map(bookmark =><Bookmark key ={bookmark.id} bookmark ={bookmark}>
                    </Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes ={
    bookmarks : PropTypes.array
}

export default Bookmarks;