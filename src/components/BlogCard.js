import {Link} from 'react-router-dom'

const BlogCard = (props) => {
    return ( 
        <div className={"blogs-list_blog-card-" + props.blog.id}>
            <div className={"blog-card-"+ props.blog.id +"_mask"}/>
            <div className={"blog-card-"+ props.blog.id +"_left-side"}>
                <h2 className="left-side_titel">{props.blog.titel}</h2>
                <div  className="left-side_actions">
                    <i className="actions_edit"></i>
                    <i className="actions_delete"></i>
                </div>
            </div>

            <div className={"blog-card-" + props.blog.id + "_right-side"}>
                <div className="right-side_shadow-container">
                    <div className="shadow-container_shadow"/>
                </div>
                <p className="right-side_text">{props.blog.content}</p>
                <Link to ={"Details/" + props.blog.id}> <span className="right-side_read-more">Read more...</span></Link>
            </div>
        </div>
     );
}
 
export default BlogCard;