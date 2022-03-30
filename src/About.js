import SideBar from './components/SideBar.js'

const About = () => {
    return ( 
        <div className="app_about">
            <div className="about_content">
                <h1  className='content_titel'>I'M</h1>
                <div className='content_subject'>
                    <h1  className='subject_text'>
                        <span className='text_name'>Ali MASAAF</span> UI/UX<br/>
                        Designer and<br/>
                        Full-stack web <br/>
                        Developer<br/>
                        With a masters degree in<br/>
                        Information system<br/>
                        Management and a 42 <br/>
                        Schools network student <br/>
                        At 1337 campuses I enjoy<br/>
                        Watching Japeneis anime<br/>
                        And I like innovative <br/>
                        Technologies and designing.<br/>
                    </h1>
                    <i className="subject_icon-smile"/>
                </div>

            </div>
            <SideBar class="about"/>
        </div> 
     );
}
 
export default About;