import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";


const Posts = () => {
    const ShowPosts= useLoaderData()
    const displayShowPost = {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap:10,
        textAlign: 'center',
        

    }
    return (
        <div>
            <h4>posts</h4>
            <div style={displayShowPost}>
            {
                ShowPosts.map(showpost=><Post key={showpost.id} showpost={showpost}/>)
            }
            </div>
            
        </div>
    );
};

export default Posts;