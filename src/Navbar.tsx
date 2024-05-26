import { Link } from 'react-router-dom'


const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>אידיליה | הפנינה</h1>
            <div className="links">
                <Link to="/about">אודות</Link>
                <Link to="/contact">צור קשר</Link>
                <Link to="/">דף הבית</Link>
            </div>
            </nav>
     );
}
 
export default Navbar;