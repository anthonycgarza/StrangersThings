import { Link } from "react-router-dom";

const NavBar = ({user}) => {
  return (
    <nav className="nav-bar">
      <Link to='/'> Home{" "}</Link> |
      <Link to='/account/login'>{" "} Login</Link> |
      <Link to={`/profile/${user}`}> {" "} Inbox </Link> |
      <Link to='/posts'>{" "} Posts</Link> 
      
    </nav>

  )
}


export default NavBar;