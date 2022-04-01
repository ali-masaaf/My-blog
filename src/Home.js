import {Link} from 'react-router-dom'

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
                    
                    <div className="subject_blog-list"></div>
                </div>
            </div>
        </div> 
     );
}
 
export default Home;