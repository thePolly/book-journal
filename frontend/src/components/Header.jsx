import './Header.css'
import { Link } from 'react-router-dom';


export default function Header() {
    return (
        <header className="header">
            <div className="header-content">
            <Link to = '/about' className="nav-button">ABOUT</Link>
            <Link to = '/' className="title-link">Book Journal</Link>
            <Link to = '/dashboard' className="nav-button">DASHBOARD</Link>
            </div>
        </header>
    )
}

