import { Link } from "react-router-dom";
import logo from "../assets/blogger.png"
function Header() {
    return ( 
        <>
        <div class="container header">
        <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        <div class="col-md-3 mb-2 mb-md-0">
        <Link to="/home" class="d-inline-flex link-body-emphasis text-decoration-none">
        <img src={logo} style={{width:"30px"}}/>
        </Link>
        </div>

      <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li><Link to="/home" class="nav-link px-2 ">Home</Link></li>
        <li><Link to="/" class="nav-link px-2 ">Arts</Link></li>
        <li><Link to="/" class="nav-link px-2">Science</Link></li>
        <li><Link to="/" class="nav-link px-2 ">Technology</Link></li>
        <li><Link to="/" class="nav-link px-2">Cinema</Link></li>
        <li><Link to="/" class="nav-link px-2">Design</Link></li>    
        <li><Link to="/" class="nav-link px-2">Food</Link></li> 
        <li><Link to="/write" class="nav-link px-2 " >Write</Link></li>
        
      </ul>

      <div class="col-md-3 text-end">
        <Link to="/login"><button type="button" class="btn btn-outline-dark me-2">Login</button></Link>
        <button type="button" class="btn btn-dark">Sign-up</button>
      </div>
      </header>
      </div>
        </>
     );
}

export default Header;