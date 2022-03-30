const SideBar = (props) => {
    return (
        <div className={props.class + "_side-bar"}>
            <i className="side-bar_exit"/>
            <ul className="side-bar_items">
                <li className="items_add-new-blog">Add New Blog</li>
                <li className="items_about-me">About Me</li>
                <li className="items_contact">Contact</li>
            </ul>
        </div>
      );
}
 
export default SideBar;