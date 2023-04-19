import { NavLink } from 'react-router-dom'

export const Navbar = () => {
    const navLinkStyle = ({ isActive }) => {
        return {
            fontWeight: isActive ? 'bold' : 'normal',
            textDecoration: isActive ? 'underline' : 'none',
        }
    }
    
    return (
        <div className='primary_nav_container'>
            <nav className='primary_nav'>
                <NavLink style={navLinkStyle} to='/'>
                    Home
                </NavLink>
                <NavLink style={navLinkStyle} to='/about'>
                    About
                </NavLink>
                <NavLink style={navLinkStyle} to='/products'>
                    Products
                </NavLink>
                <NavLink style={navLinkStyle} to='/profile'>
                    Profile
                </NavLink>
            </nav>
        </div>

    )
}

