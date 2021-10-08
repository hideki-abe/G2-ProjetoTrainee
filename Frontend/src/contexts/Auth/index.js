import { useState, createContext, useEffect } from 'react';
import { api } from '../../services/api';

export const AuthContext = createContext({})

export default function AuthProvider({ children }){
    const [user, setUser] = useState(null);

    useEffect(() => {
        function loadStorage() {
            const storageUser = localStorage.getItem('@Anime-Sagasu.user');
            const storageToken = localStorage.getItem('@Anime-Sagasu:token');
            if (storageUser && storageToken) {
                setUser(JSON.parse(storageUser))
                api.defaults.headers.Authorization = `Bearer ${storageToken}`;
            }
        }

        loadStorage()
    }, [])

    function storageUser(response) {
        localStorage.setItem('@Anime-Sagasu:user', JSON.stringify(response.data.user))
        localStorage.setItem('@Anime-Sagasu:token', response.data.token)
    }

    async function signIn(userData){
        
        const response = await api.post('/login', userData)

        if(response){
            setUser(response.data.user)
            api.defaults.headers.Authorization = `Bearer ${response.data.token}`
            storageUser(response) 
        } 
    }
    async function signUp(userData){
 
        const response = await api.post('/cadastro', userData)

        if(response){
            setUser(response.data.user)
            api.defaults.headers.Authorization = `Bearer ${response.data.token}`
            storageUser(response)
        }
    }
    async function logOut(){

        setUser(null);
        localStorage.removeItem(`@Anime-Sagasu:user`);
        localStorage.removeItem(`@Anime-Sagasu:token`);

    }
    return (
        <AuthContext.Provider
            value={{
                signed: !!user,
                user,

                signUp,
                signIn,
                logOut,
                setUser,
                storageUser,
            }}
        >
            {children}
            </AuthContext.Provider>
    )
}