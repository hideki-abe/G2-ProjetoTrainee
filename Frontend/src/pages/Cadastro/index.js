import "./style.css";

export default function Cadastro() {

    return (
        <div class="cadastro-page">
            <div class="form">
                <form class="cadastro-form">
                    <input type="text" placeholder="Nome"/>
                    <input type="password" placeholder="Senha"/>
                    <input type="text" placeholder="Email"/>
                    <button> registrar </button>
                    <p class="message">
                        Já registrado? 
                        <a href="../Login"> Sign In</a>
                    </p>
                </form>
            </div>
        </div>
    )

}
