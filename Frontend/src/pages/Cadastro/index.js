import "./style.css";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/Auth";

export default function Cadastro() {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [image, setImage] = useState();

    const { signUp } = useContext(AuthContext)

    async function handleRegister(){

        let formdata = new FormData();
        formdata.append('image', image);
        formdata.append('name', image.name);

        await signUp({
            email: email,
            password: password,
            username: username,
            image: formdata,
        })
    } 

    return (
        <div className="cadastro-page">
            <div className="form">
                <h3>Cadastre sua conta</h3>
                <form className="cadastro-form"
                      onSubmit={e => handleRegister}>
                    <label>Nome</label>
                    <input 
                        type="text" 
                        placeholder="Nome"
                        onChange={e => setUserName(e.target.value)}/>
                    <label>Senha</label>
                    <input 
                        type="password" 
                        placeholder="Senha"
                        onChange={e => setPassword(e.target.value)}/>
                    <label>E-mail</label>
                    <input 
                        type="text" 
                        placeholder="Email"
                        onChange={e => setEmail(e.target.value)}/>
                    <label>Imagem de Perfil</label>
                    <input
                        type="file"
                        onChange={e => setImage(e.target.files[0])}
                        accept="image/png, image/jpg, image/jpeg"
                    />
                    <button onClick={handleRegister}> registrar </button>
                    <p className="message">
                        Já registrado? 
                        <Link className='link-register' to ='/login'> Logue aqui.</Link>
                    </p>
                </form>
            </div>
        </div>
    )

}
