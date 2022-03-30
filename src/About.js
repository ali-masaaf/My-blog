import SideBar from './components/SideBar.js'

const About = () => {
    return ( 
        <div className="app_about">
            <div className="about_content">
                <h1  className='content_titel'>I'M</h1>
                <div className='content_subject'>

                </div>
                <h1  className='subject_text'>
                    Ali MASAAF UI/UX
                    Designer and
                    Full-stack web 
                    Developer
                    With a masters degree in
                    Information system
                    Management and a 42 
                    Schools network student 
                    At 1337 campuses I enjoy
                    Watching Japeneis anime
                    And I like innovative 
                    Technologies and designing.
                </h1>
                <i className="subject_icon-smile"/>
            </div>
            <SideBar class="about"/>
        </div> 
     );
}
 
export default About;