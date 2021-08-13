import Home from "./pages/Home";
import Login from "./pages/Login"
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
    return (
        <>
            <Router>
                <Switch>
                    <Route path='/' exact component={Home}/>
                    <Route path='/about' component={Home}/>
                    <Route path='/events' component={Home}/>
                    <Route path='/annual' component={Home}/>
                    <Route path='/team' component={Home}/>
                    <Route path='/blogs' component={Login}/>
                    <Route path='/sign-up' component={Login}/>
                </Switch>
            </Router>
        </>
    );
}

export default App;