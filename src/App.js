import './App.css';
import Home from './Home'
import Details from './Details'
import Create from './Create'
import Edit from './Edit'
import About from './About'
import Contact from './Contact'
import NotFound from './NotFound'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
