import SideBar from './components/SideBar.js'

const Contact = () => {
    return ( 
        <div className="app_contact">
            <div className="contact_content">
                <h1  className='content_titel'>
                    My<br/>
                    Blog
                </h1>
                <div className='content_subject'>
                    <h1  className='subject_text'>
                        Find Me<br/>
                        On
                    </h1>
                    <div className='subject_icons'>
                        <i className="icons_linkedin"/>
                        <i className="icons_github"/>
                        <i className="icons_dribbble"/>
                        <i className="icons_behance"/>
                    </div>
                </div>
            </div>
            <SideBar class="contact"/>
        </div> 
     );
}
 
export default Contact;