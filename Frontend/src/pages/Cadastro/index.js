import "./style.css";

export default function Cadastro() {

    return (
        <div class="cadastro-page">
            <div class="form">
                <h3>Cadastre sua conta</h3>
                <form class="cadastro-form">
                    <input type="text" placeholder="Nome"/>
                    <input type="password" placeholder="Senha"/>
                    <input type="text" placeholder="Email"/>
                    <button> registrar </button>
                    <p class="message">
                        Já registrado? 
                        <a href="../Login"> Logue aqui.</a>

                    </p>
                </form>
            </div>
        </div>
    )

}
