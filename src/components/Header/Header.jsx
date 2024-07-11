
import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <header className="flex justify-between items-center p-2 mx-4 mb-4 border-b-2">
             <h2 className="text-3xl font-semibold">Knowledge cafe</h2>
             <img src={profile} alt="" />
        </header>
    );
};

export default Header;