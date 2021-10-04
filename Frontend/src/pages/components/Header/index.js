import {Link} from 'react-router-dom'

function Header() {
    return (
        <div class="header">
            <div class="inner_header">
               <div class="logo_container">
                   <h1>Anime<span>Sagasu</span></h1>
                </div> 

                <ul class="navigation">
                    <Link class="header-link" to='/'><li>Home</li></Link>
                    <Link class="header-link" to='/profile'><li>Profile</li></Link>
                </ul>
            </div>
        </div>
    )
}

export default Header
