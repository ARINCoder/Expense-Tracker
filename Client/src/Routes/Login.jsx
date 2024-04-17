import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../Context/Auth Context/AuthContext';
import Register from './Register';
import { Link } from 'react-router-dom';
import '../Routes/login.scss'


const Login = ({ onLogin }) => {
    const [credentials, setCredentials] = useState({
        email: '',
        password: '',
    })
    const { Login } = useContext(AuthContext)
    const navigate = useNavigate();
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await Login(credentials)
            return navigate('/income')
        } catch (error) {
            console.log(error);

        }
    }



    return (
        <div className='login'>
            <form onSubmit={handleSubmit}>

                <h1 className='header'> LogIn </h1>
                <label htmlFor='email'>
                    <h1>Email:</h1>
                </label>
                <input
                    type='email'
                    value={credentials.email}
                    placeholder='Email Address'
                    onChange={(event) =>
                        setCredentials({ ...credentials, email: event.target.value })}

                />

                <label>
                    <h1>Password </h1>:
                    <input
                        type='password'
                        value={credentials.password}
                        placeholder='Password'
                        onChange={(event) =>
                            setCredentials({ ...credentials, password: event.target.value })}
                    />
                </label>
                <button type='submit'>
                    LogIn
                </button>
                <p> Do not have an Account? <Link to='/register'>  Register Here </Link> </p>
            </form>

        </div>
    )
}

export default Login
