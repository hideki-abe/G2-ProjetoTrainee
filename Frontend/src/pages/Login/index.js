import "./style.css";
import { useState, useContext } from "react";
import { AuthContext } from "../../contexts/Auth";
import { Link } from "react-router-dom";

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { signIn } =  useContext(AuthContext)

    async function handleLogin(){
        let isValid = true;

        //checa se a senha ou o usuario nao estao em branco
        if(password.length <= 0 || email.length <= 0)
        {
            //display um erro na pagina = senha e email em branco
            isValid = false;
        }

        //checa se o email e valido

        //checa se a senha possui mais que 8 caracteres
        if(password.length > 8){
            //display um erro na pagina = senha muito longa
            isValid = false;
        }

        //se o email e a senha forem validos
        if (isValid) {
            await signIn({
                email: email,
                password: password
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
                    <label>Senha</label>
                    <input 
                        type="password" 
                        placeholder="Senha"
                        onChange={e => setPassword(e.target.value)}/>
                    <button onClick={handleLogin}>login</button>
                    <p className="message">
                        Sem cadastro? 
                        <Link className='link-login' to ='/cadastro'> Crie uma conta</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}