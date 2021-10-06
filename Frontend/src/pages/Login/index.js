import "./style.css";

export default function Login() {
    
    return (
        <div class="login-page">
            <div class="form">
                <form class="login-form">
                    <input type="text" placeholder="Username"/>
                    <input type="password" placeholder="Senha"/>
                    <button>login</button>
                    <p class="message">
                        Sem cadastro? 
                        <a href="../Cadastro"> Crie uma conta </a>
                    </p>
                </form>
            </div>
        </div>
    )
}