import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './pages/Home'
import Error from './pages/Error'
import Header from './pages/components/Header'

function Routes() {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path='/' component = {Home} />
                <Route path='*' component = {Error} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes
