import { Link } from "react-router-dom";

const SideBar = (props) => {
    return (
        <div className={props.class + "_side-bar"}>
            <Link className="side-bar_exit" to="/">
                <i className="exit_icon"/>
            </Link> 
            <ul className="side-bar_items">
                <li className="items_add-new-blog">
                    <Link to="/create">Add New Blog</Link>
                </li>
                <li className="items_about-me">
                    <Link to="/about">About Me</Link>
                </li>
                <li className="items_contact">
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </div>
      );
}
 
export default SideBar;