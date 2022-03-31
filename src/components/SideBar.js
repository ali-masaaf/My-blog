import { Link } from "react-router-dom";

const SideBar = (props) => {
    return (
        <div className={props.class + "_side-bar"}>
            <i className="side-bar_exit"/>
            <ul className="side-bar_items">
                <li className="items_add-new-blog">
                    <Link to="/create">Add New Blog</Link>
                </li>
                <li className="items_about-me">
                    <Link to="/about">About Me</Link>
                </li>
                <li className="items_contact">
                    <Link to="/contact">Contac</Link>
                </li>
            </ul>
        </div>
      );
}
 
export default SideBar;