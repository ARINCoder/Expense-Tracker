import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Register = () => {
    const [identifier, setIdentifier] = useState({
        username: '',
        email: '',
        password: '',
    });
    const navigate = useNavigate()

    const handleChange = async (event) => {
        setIdentifier({
            ...identifier, [event.target.name]: event.target.value
        });
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log('Identifier ', identifier)

        try {
            const response = await axios.post('http://localhost:3000/register', identifier)
            console.log("Registration successful", response.data);
            navigate('/login')


        } catch (error) {
            console.log(error);

        }
    }
    return (

        <div className='register'>
            <h1> Register </h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="identifier">
                    Username:
                    <input type="text"
                        name='username'
                        value={identifier.username}
                        onChange={handleChange} />
                </label>
                <label htmlFor="identifier">
                    Email:
                    <input type="email"
                        name='email'
                        value={identifier.email}
                        onChange={handleChange} />
                </label>
                <label htmlFor="identifier">
                    Password:
                    <input type="password"
                        name='password'
                        value={identifier.password}
                        onChange={handleChange} />
                </label>
                <button onClick={handleSubmit}> Register </button>
                <p>Do You Have an Account? </p>
                <p><Link to="/login">Log In</Link></p>


            </form>

        </div>
    )
}

export default Register