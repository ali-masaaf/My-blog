import BlogCard from "./BlogCard";

const BlogsList = (props) => {

    let id=1;
    return ( 
        <div className={props.className}>
            <BlogCard className={"blogs-list_blog-card-" + id}/>
        </div>
     );
}
 
export default BlogsList;