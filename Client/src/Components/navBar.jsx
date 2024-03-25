import React, { useContext } from 'react'
// import AuthContext from '../Context/Auth Context/AuthContext'
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/Auth Context/AuthContext';
const Navbar = () => {
    const { currentUser, Logout } = useContext(AuthContext)
console.log(currentUser)
    return (
        <nav className='navbar'>
            
            {currentUser ? (
                <p>
                    Welcome Back, <span className='username'> {currentUser.username}</span>!
                    <ul><Link to="/income">Add Income</Link></ul>
                <ul><Link to="/expense">Add Expense</Link></ul>
                <span onClick={Logout}> LogOut</span>
                </p>
            ) : (
                <div>
                <p> Please <Link to="/login">LogIn</Link> to access the full features of the App</p>
                <ul>
                <li><Link to="/">Home Page</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Register</Link></li>
                <li><Link to="/income">Add Income</Link></li>
                <li><Link to="/expense">Add Expense</Link></li>
            </ul> 
            </div>
            )}

        
        </nav>
    )
}

export default Navbar