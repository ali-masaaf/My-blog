import BlogCard from "./BlogCard";

const BlogsList = (props) => {

    return ( 
        <div className={props.className}>
            { props.blogs.map((blog) =>(
                <BlogCard key={blog.id } id={blog.id} titel={blog.titel} content={blog.content}/>
            ))}
        </div>
     );
}
 
export default BlogsList;