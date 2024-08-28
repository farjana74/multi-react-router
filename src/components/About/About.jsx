import { useLoaderData } from "react-router-dom";
import User from "../User/User";


const About = () => {

    const displayShow = {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap:10,
        textAlign: 'center',
        

    }
    const  showData = useLoaderData()
    return (
        <div>
            <h3 className="">this is about page:{showData.length}</h3>
           <div  style={displayShow} className="">
           {
                showData.map(shows=><User key={shows.id} shows={shows}/>)
            }
           </div>
        </div>
    );
};

export default About;