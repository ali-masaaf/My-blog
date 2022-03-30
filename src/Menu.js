import SideBar from './components/SideBar.js'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const Menu = () => {
    return ( 
    <div className="app_menu">
        <div className='menu_content'>
            <Router>
                <Switch>
                    <Route path="/menu">
                            <h1  className='content_titel'>My<br/>Blog</h1>
                    </Route>
                </Switch>
            </Router>
        </div>
        <SideBar  class="menu"/>
    </div> 
    );
}
 
export default Menu;