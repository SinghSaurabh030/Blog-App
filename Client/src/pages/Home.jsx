import { Link } from "react-router-dom";
import arr from "../assets/array.js"

function Home() {
    
    return (  
        
        <>
        <div class="container">
            {
               <div className="posts">
                 {arr.map((post)=>{
                    return <div className="post" key={post.id}>
                        <div className="image">
                        <img src={post.image}/>
                        </div>
                        <div className="bttom">
                        <Link to="/single">
                        <h2 className="link">{post.title}</h2>
                        </Link>
                        <p>{post.desc}</p>
                        <button type="button" class="btn btn-outline-dark">Read More</button>
                        </div>
                    </div>
                })}
               </div>
            }
        </div>
        </>
    );
}

export default Home;