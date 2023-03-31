import React from 'react'
import { useState, useEffect, createContext } from 'react';
import axios from "axios";

export const UserContext = createContext();

export const UserProvider = ({children}) => {

    const [user, setUser] = useState([]);

    const fetchUser = async () => {
        try {
            const response = await axios.get(`https://randomuser.me/api/?results=20`);
            setUser(response.data.results);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchUser();
    }, []);

    return(
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    )

};