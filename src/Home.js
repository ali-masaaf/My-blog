import {Link} from 'react-router-dom'
import BlogsList from './components/BlogsList';

const Home = () => {
    return ( 
        <div className="app_home">
            <div className="home_content">
                <Link to="/">
                    <h1  className='content_titel'>
                        My<br/>
                        Blog
                    </h1>
                </Link>
                
                <div className='content_subject'>
                    <Link to="/menu" className='subject_button-menu'>
                        <i className='button_menu-icon'/>
                    </Link>

                    <BlogsList className="subject_blogs-list"/>
                </div>
            </div>
        </div> 
     );
}
 
export default Home;