import { Link } from "react-router-dom";


const Post = ({showpost}) => {
    const {id,title,body}=showpost

    const showStyle= {
        border:'1px solid red',
        borderRadius :'10px',
        padding:'10px'
    }

    return (
        <div>
            
            <div style={showStyle}>
                <h3>{title}</h3>
                <p>{body}</p>
                <div>
                   <Link to = {`/post/${id}`}> <button>click details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Post;