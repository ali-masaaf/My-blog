import BlogCard from "./BlogCard";

const BlogsList = (props) => {

    return ( 
        <div className={props.className}>
            { props.blogs.map((blog) =>(
                <BlogCard key={blog.id } blog={blog}/>
            ))}
        </div>
     );
}
 
export default BlogsList;