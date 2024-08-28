import { Link } from "react-router-dom";


const Header = () => {
    return (
        <div className='text-center'>
            <nav>
                <Link to = "/">Home</Link>
                <Link to = "/contact">Contact</Link>
                <Link to = "/about">About</Link>
                <Link to = "/posts">Posts</Link>
                
            </nav>
            <h3>this is header</h3>
        </div>
    );
};

export default Header;