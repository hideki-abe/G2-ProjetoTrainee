import {BrowserRouter, Switch} from 'react-router-dom'
import Route from './Route'
import Home from '../pages/Home'
import Error from '../pages/Error'
import Header from '../pages/components/Header'
import Login from '../pages/Login'
import Cadastro from '../pages/Cadastro'

function Routes() {

    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path='/' isPrivate component = {Home} />
                <Route exact path = "/login" component = {Login} />
                <Route exact path = "/cadastro" component = {Cadastro} />
                <Route exact path = "/profile" isPrivate component = {Error} />
                <Route path='*' component = {Error} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes
