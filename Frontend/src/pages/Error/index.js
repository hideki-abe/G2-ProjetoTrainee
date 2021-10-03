import {Link} from 'react-router-dom'

function Error() {
    return (
        <div>
            <h1>404: Página não encontrada.</h1>
            <Link to= '/'>Home</Link>
        </div>
    )
}

export default Error
