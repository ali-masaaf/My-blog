import BlogCard from "./BlogCard";

const BlogsList = (props) => {

    return ( 
        <div className={props.className + "_blogs-list"}>
            <i className={props.className + "_arrow-icon"}></i>
            { props.blogs.map((blog) =>(
                <BlogCard key={blog.id } blog={blog}/>
            ))}
        </div>
     );
}
 
export default BlogsList;