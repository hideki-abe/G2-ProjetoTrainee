import "./style.css";
import { useState, useContext } from "react";
import { AuthContext } from "../../contexts/Auth";
import { Link } from "react-router-dom";

export default function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const { signIn } =  useContext(AuthContext)

    async function handleLogin(){
        let isValid = true;

        //checa se a senha ou o usuario nao estao em branco
        if(senha.length <= 0 || email.length <= 0)
        {
            alert("Erro: Email e/ou senha estão em branco.")
            isValid = false;
        }
        //checa se a senha possui mais que 8 caracteres
        if(senha.length > 8){
            alert("Erro: Senha muito longa. Máximo de 8 caracteres.")
            isValid = false;
        }
        //checa se o email possui mais que 32 caracteres
        if(email.length > 254){
            alert("Erro: Email muito longo ou inválido.")
            isValid = false;
        }

        //se o email e a senha forem validos
        if (isValid) {
            await signIn({
                email: email,
                senha: senha
        })
        }
        
    }

    return (
        <div className="login-page">
            <div className="form">
                <form className="login-form"
                      onSubmit={e => handleLogin}>
                    <h3>Logue em sua conta</h3>
                    <label>E-mail</label>
                    <input 
                        type="text" 
                        placeholder="E-mail"
                        onChange={e => setEmail(e.target.value)}/>
                    <label>Senha[até 8 caracteres]</label>
                    <input 
                        type="password" 
                        placeholder="Senha"
                        onChange={e => setSenha(e.target.value)}/>
                    <button type="button" onClick={handleLogin}>login</button>
                    <p className="message">
                        Sem cadastro? 
                        <Link className='link-login' to ='/cadastro'> Crie uma conta</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}