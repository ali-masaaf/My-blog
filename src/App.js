import Home from './Home'
import Details from './Details'
import Create from './Create'
import Edit from './Edit'
import About from './About'
import Contact from './Contact'
import NotFound from './NotFound'
import bkg from "./assets/background.jpeg";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="root_app">
      <Router>
        <Switch>

          <Route exact path='/'>
            <Home/>
          </Route>

          <Route path='/details'>
            <Details/>
          </Route>

          <Route path='/create'>
            <Create/>
          </Route>

          <Route path='/edit'>
            <Edit/>
          </Route>

          <Route path='/about'>
            <About/>
          </Route>

          <Route path='/contact'>
            <Contact/>
          </Route>

          <Route path='/*'>
            <NotFound/>
          </Route>

        </Switch>
      </Router>
      <img src={bkg} className="app_background"  alt=""/>
    </div>
  );
}

export default App;
