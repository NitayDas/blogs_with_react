import Blogs from "../Blogs/Blogs";

const Header = () => {
    return (
        <div>
             <h2 className="text-3xl font-semibold text-center bg-slate-400">Knowledge cafe</h2>
             <Blogs></Blogs>
        </div>
    );
};

export default Header;