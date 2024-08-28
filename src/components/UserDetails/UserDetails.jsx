
import { useLoaderData, useNavigate } from 'react-router-dom';

const UserDetails = () => {
    const  showUserData = useLoaderData()
    const navigate = useNavigate()
    
    const {name,userName,email,id}=showUserData

    const handleNavigate=()=>{
        navigate(`${id}`)
        
    }
    return (
        <div>
            <h2>user details</h2>
            <h3>{name}</h3>
            <p>{email}</p>
            <div>
                <button onClick={handleNavigate}></button>
            </div>
        </div>
    );
};

export default UserDetails;