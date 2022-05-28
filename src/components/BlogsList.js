import BlogCard from "./BlogCard";

const BlogsList = (props) => {


    return ( 
        <div className={props.className}>
            <BlogCard id={1} titel="There are many variations of passages of Lorem Ipsum" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis ullamcorper fermentum. Donec ultricies dolor eu consequat malesuada. Aliquam vel pulvinar lacus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis ullamcorper fermentum. Donec ultricies dolor eu consequat malesuada. Aliquam vel pulvinar lacus"/>
            <BlogCard id={2} titel="Titel titel titel titel titel" content="Content content content content content content content content content content content content content content content content content content content content content content content content"/>
            <BlogCard id={3} titel="Titel titel titel" content="Content content content content content content content content content content content content content content content content content content content content content content content content"/>
        </div>
     );
}
 
export default BlogsList;