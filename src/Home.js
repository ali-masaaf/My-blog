import {Link} from 'react-router-dom';
import BlogsList from './components/BlogsList';
import useFetsh from "./hooks/useFetch";

const Home = () => {
    const {data:blogs} = useFetsh("http://localhost:5000/blogs");
    let x = 0;

    const handleScroll = (childs)=>{
        for (let i = 0; i < childs.length; i++) {
            x = childs[i].getBoundingClientRect().x;
            if (x < 225){
                console.log("Clear:" + childs[i].className);
                childs[i].firstChild.style.display = "none";
            }else{
                childs[i].firstChild.style.display = "inline-block";
            }
        }
    }

    return ( 
        <div className="app_home">
            <div className="home_content">
                <Link to="/">
                    <h1  className='content_titel'>
                        My<br/>
                        Blog
                    </h1>
                </Link>

                <Link to="/menu" className='content_button-menu'>
                    <i className='button_menu-icon'/>
                </Link>
                <div className='content_subject' onScroll={(e)=>{handleScroll(e.target.firstChild.children)}}>
                    {blogs && <BlogsList className="subject" blogs={blogs}/>}
                </div>
            </div>
        </div>
     );
}

export default Home;