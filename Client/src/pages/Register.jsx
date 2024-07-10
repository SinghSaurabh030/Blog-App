import { Link } from "react-router-dom";
import logo from "../assets/blogger.png"

function Register() {
    return (  
        <form className="signin" >
        <div className="contain">
        <img class="mb-4" src={logo} alt="" width="57" height="57"/>
        <h2 class="h3 mb-3 fw-normal">Please sign in</h2>

        <div class="form-floating inputF">
        <div className="form-floating">
        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" fdprocessedid="c901jg"/>
        <label for="floatingInput">User Name</label>
        </div>
        <div className="form-floating">
        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" fdprocessedid="c901jg"/>
        <label for="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
        <input type="password" class="form-control" id="floatingPassword" placeholder="Password" fdprocessedid="rrw4cq"/>
        <label for="floatingPassword">Password</label>
        </div>
        <button class="btn btn-outline-dark  py-2" type="submit" fdprocessedid="38ygfe">Sign in</button>
        
        </div>
        
        </div>
        
        </form>
    );
}

export default Register;