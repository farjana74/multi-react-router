import { useLoaderData } from "react-router-dom";


const PostDetails = () => {
    const post= useLoaderData()
    const{id,title,body} = post
    console.log(post)
    return (
        <div>
          <h3>postdetaisl</h3> 
          <h3>{title}</h3> 
          <p>{body}</p>
        </div>
    );
};

export default PostDetails;