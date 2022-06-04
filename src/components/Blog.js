const Blog = (props) => {
    console.log(props.blog)
    return ( 
        <div className={"subject_" + props.className}>
            <h1 className={props.className + "_titel"}>{props.blog.titel}</h1>
            <p className={props.className + "_body"}>{props.blog.content}</p>
            <div  className={props.className + "_actions"}>
                    <i className="actions_edit"></i>
                    <i className="actions_delete"></i>
            </div>
        </div> 
    );
}

export default Blog;