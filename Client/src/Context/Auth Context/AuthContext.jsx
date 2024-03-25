import React, { createContext, useState } from 'react';
import axios from 'axios';
import BASE_URL from '../../Components/constants';
//
const AuthContext = createContext()
const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    //
    const Login = async (credentials) => {
        try {
            const response = await axios.post('http://localhost:3000/login', credentials);
            console.log(response.data)
            setCurrentUser(response.data.user);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
            setIsLoading(false)
        }
    }
    const Logout = async () => {
        try {
          await axios.post(`${BASE_URL}/logout`);
           setCurrentUser(null)

        } catch (error) {
            console.error(error)
            
        }
    }

    console.log({currentUser, isLoading})
    return (
        <AuthContext.Provider value={{ currentUser, setCurrentUser, Login, Logout, isLoading }}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProvider }