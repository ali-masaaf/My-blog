import { Link } from "react-router-dom";
import Blog from "./components/Blog";
import useFetsh from "./hooks/useFetch";
import { useParams } from "react-router-dom";

const Create = () => {

    return ( 
        <div className="app_create">
            <div className="create_content">
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
                    <Blog className="blog-create" contenteditable="true" />
                </div>
            </div>
        </div>
     );
}
 
export default Create;