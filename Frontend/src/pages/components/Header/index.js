import {Link} from 'react-router-dom'

function Header() {
    return (
        <div className="header">
            <div className="inner_header">
               <div className="logo_container">
                   <Link className="logo_container" to='/'><h1>Anime<span>Sagasu</span></h1></Link>
                </div> 

                <ul className="navigation">
                    <Link className="header-link" to='/'><li>Home</li></Link>
                    <Link className="header-link" to='/profile'><li>Perfil</li></Link>
                </ul>
            </div>
        </div>
    )
}

export default Header
