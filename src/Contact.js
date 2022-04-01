import SideBar from './components/SideBar.js'
import {Link} from 'react-router-dom'

const Contact = () => {
    return ( 
        <div className="app_contact">
            <div className="contact_content">
                <Link to="/">
                    <h1  className='content_titel'>
                        My<br/>
                        Blog
                    </h1>
                </Link>
                
                <div className='content_subject'>
                    <h1  className='subject_text'>
                        Find Me<br/>
                        On
                    </h1>
                    <div className='subject_icons'>
                        <a href="https://www.linkedin.com/in/ali-masaaf/"><i className="icons_linkedin"/></a>
                        <a href="https://github.com/ali-masaaf"><i className="icons_github"/></a>
                        <a href=""><i className="icons_dribbble"/></a>
                        <a to=""><i className="icons_behance"/></a>
                    </div>
                </div>
            </div>
            <SideBar class="contact"/>
        </div> 
     );
}
 
export default Contact;