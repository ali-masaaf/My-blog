import { Link } from "react-router-dom";
import Blog from "./components/Blog";
import useFetsh from "./hooks/useFetch";
import { useParams } from "react-router-dom";

const Details = () => {
    const {id} = useParams();
    console.log("id:"+ id);
    const {data:blog} = useFetsh("http://localhost:5000/blogs/" + id);
    return ( 
        <div className="app_details">
            <div className="details_content">
                <Link to="/">
                    <h1  className='content_titel'>
                        My<br/>
                        Blog
                    </h1>
                </Link>

                <Link to="/menu" className='content_button-menu'>
                    <i className='button_menu-icon'/>
                </Link>

                <div className='content_subject'>
                    {blog && <Blog className="blog-details" blog={blog}/>}
                </div>
            </div>
        </div>
     );
}
 
export default Details;