import "./style.css";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/Auth";

export default function Cadastro() {
    const [username, setUserName] = useState('');
    const [senha, setSenha] = useState('');
    const [email, setEmail] = useState('');
    //const [image, setImage] = useState();

    const { signUp } = useContext(AuthContext)

    async function handleRegister(){
        let isValid = true;
        //checa se algum espaço obrigatório esta em branco
        if(senha.length <= 0 || email.length <= 0 || username.length <= 0)
        {
            alert("Erro: Email, username e/ou senha estão em branco.")
            isValid = false;
        }
        //checa se a senha possui mais que 8 caracteres
        if(senha.length > 8){
            alert("Erro: Senha muito longa. Máximo de 8 caracteres.")
            isValid = false;
        }
        //checa se o email possui mais que 254 caracteres
        if(email.length > 254){
            alert("Erro: Email muito longo ou inválido.")
            isValid = false;
        }
        //checa se o usuario possui mais que 20 caracteres
        if(username.length > 20){
            alert("Erro: Username muito longo. Máximo de 20 caracteres.")
            isValid = false;
        }
        if (isValid){
            /*let formdata = new FormData();
            *formdata.append('image', image);
            *formdata.append('name', image.name);
            *setImage(formdata);
            *console.log(image);
            *console.log(formdata);
            *
            *trashcode para implementação de imagem
            *
            **/
            await signUp({
                email: email,
                senha: senha,
                username: username,
            })
        }
    } 

    return (
        <div className="cadastro-page">
            <div className="form">
                <h3>Cadastre sua conta</h3>
                <form className="cadastro-form"
                      onSubmit={e => handleRegister}>
                    <label>Nome[até 20 caracteres]</label>
                    <input 
                        type="text" 
                        placeholder="Nome"
                        onChange={e => setUserName(e.target.value)}/>
                    <label>Senha[até 8 caracteres]</label>
                    <input 
                        type="password" 
                        placeholder="Senha"
                        onChange={e => setSenha(e.target.value)}/>
                    <label>E-mail</label>
                    <input 
                        type="text" 
                        placeholder="Email"
                        onChange={e => setEmail(e.target.value)}/>
                    <button type="button" onClick={handleRegister}> registrar </button>
                    <p className="message">
                        Já registrado? 
                        <Link className='link-register' to ='/login'> Logue aqui.</Link>
                    </p>
                </form>
            </div>
        </div>
    )

}
