import React, { useContext } from 'react'
// import AuthContext from '../Context/Auth Context/AuthContext'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/Auth Context/AuthContext';
import '../Navbar/navbar.scss'
import homepage from '../Homepage/homepage'
const Navbar = () => {
    const { currentUser, Logout } = useContext(AuthContext)
    console.log(currentUser)
    return (
        <div>
            <nav className='navbar'>

                {currentUser ? (
                    <p>
                        Welcome Back, <span className='username'> {currentUser.username}</span>!
                        <ul><Link to="/income"> Income</Link></ul>
                        <ul><Link to="/expense">Expense</Link></ul>
                        <span onClick={Logout}> LogOut</span>
                    </p>
                ) : (
                    <div>
                        <p> Please <Link to="/login">LogIn</Link> to access the full features of the App</p>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/login">Login</Link></li>
                            <li><Link to="/register">Register</Link></li>
                            <li><Link to="/income">Income</Link></li>
                            <li><Link to="/expense">Expense</Link></li>
                        </ul>
                    </div>
                )}
            </nav>

        </div>


    )
}

export default Navbar