import { useState, createContext, useEffect } from 'react';
import { api } from '../../services/api';

export const AuthContext = createContext({})

export default function AuthProvider({ children }){
    const [user, setUser] = useState(null);
    //axios.post({name: 'd' password:'adw'})

    useEffect(() => {
        function loadStorage() {
            const storageUser = localStorage.getItem(
                '@Anime-Sagasu.user'
            )
            if (storageUser) {
                setUser(JSON.parse(storageUser))
            }
        }

        loadStorage()
    }, [])

    function storageUser(data) {
        localStorage.setItem('@Anime-Sagasu.user', JSON.stringify(data))
    }

    async function signIn(userData){
        //const response = await api.post('/login', userData)
        const response = userData;
        if(response){
            setUser(response)
            storageUser(response) 
        }
  
        
    }
    async function signUp(userData){
        //registrar
        //const response = await api.post('/cadastro', userData)
        const response = userData;
        if(response){
            setUser(response)
            storageUser(response)
        }
   

        //usar o axios pra mandar todas as informacoes do novo usuario ao backend.
        //se der td ok, setUser(u) e storageUser(u) [logar]
    }
    async function logOut(){
        //deslogar, talvez mandando uma mensagem pro back???

        setUser(null);
        localStorage.removeItem(`@Anime-Sagasu.user`);
       // storageUser(null)  ou   tirar do localStorage o usuario carregado de alguma maneira
       // 
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