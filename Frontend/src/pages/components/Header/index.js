import {Link} from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../../contexts/Auth'

function Header() {
    const { signed, logOut } = useContext(AuthContext);

    async function handleLogout(){
        await logOut();
    }

    return (
        <div className="header">
            <div className="inner_header">
               <div className="logo_container">
                   <Link className="logo_container" to='/'><h1>Anime<span>Sagasu</span></h1></Link>
                </div> 

                <ul className="navigation">
                    {signed ? 
                    <Link className="header-link" to='/profile'><li>Perfil</li></Link> 
                    : <Link className="header-link" to='/login'><li>Login</li></Link>}
                    {signed ? <span className="header-link"><li onClick={handleLogout}>Logout</li></span> : ''}
                </ul>
            </div>
        </div>
    )
}

export default Header
