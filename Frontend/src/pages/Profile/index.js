import { AuthContext } from "../../contexts/Auth"
import { useContext } from 'react'
import './style.css'
import { Link } from "react-router-dom";

function Profile() {

    const { user } = useContext(AuthContext);

    return (
        <div className="profile-display">
            <h1>Perfil</h1>
            <h2>Bem vindo <span>{user.username}</span>. Esse é o seu perfil.</h2>
            <div className="text-display">
                <ul>
                    <b>Dados do usuário:</b>
                    <li><b>Username:</b> {user.username}</li>
                    <li><b>Email:</b> {user.email}</li>
                </ul>
            </div>
            <br/>
            Clique <Link className="link" to='/'>aqui</Link> para voltar a página principal.
        </div>
    )
}

export default Profile
