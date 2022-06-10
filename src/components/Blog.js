import iconCancel from '../assets/icons/cancel.svg';
import iconSave from '../assets/icons/save.svg';


const Blog = (props) => {
    const blog = props ? props.blog : null;

    const buttonCancel = props.className == 'blog-create' ? {
        backgroundImage: 'url(' + iconCancel + ')'
    } : {};
    
    const buttonSave = props.className == 'blog-create'? {
        backgroundImage: 'url(' + iconSave + ')'
    } : {};

    return (
        <div className={"subject_" + props.className}>
            <h1 data-text="Titel" contenteditable={props.contenteditable} className={props.className + "_titel"}>{blog ? blog.titel : ''}</h1>
            <p data-text="Feel free to write your blog content here." contenteditable={props.contenteditable} className={props.className + "_body"}>{blog ? blog.content : ''}</p>
            <div  className={props.className + "_actions"}>
                <i style={buttonCancel} className="actions_cancel"></i>
                <i style={buttonSave} className="actions_delete"></i>
            </div>
        </div>
    );
}

export default Blog;