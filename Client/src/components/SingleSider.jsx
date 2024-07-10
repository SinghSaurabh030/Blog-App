import { Link } from "react-router-dom";
import arr from "../assets/array.js"

function SingleSider() {
    return ( 
        <div className="sug">
            <h2>Other post you may like</h2>
            {arr.map((post)=>{
                return <div className="suggestion" key={post.id}>
                     <img src={post.image}/>
                     <p>{post.title}</p>
                     <button type="button" class="btn btn-outline-dark">Read More</button>
                </div>
            })}
        </div>
     );
}

export default SingleSider;