import { Link } from "react-router-dom";


const User = ({shows}) => {
    const {name,userName,email,id}=shows

    const showStyle= {
        border:'1px solid red',
        borderRadius :'10px',
        padding:'10px'
    }
    return (
        <div style={showStyle}>
            <h2>{name}</h2>
            <p>{userName}</p>
            <span>{email}</span>
           <div>
           <Link to = {`/user/${id}`}><button>Details</button></Link>
           </div>
        </div>
    );
};

export default User;