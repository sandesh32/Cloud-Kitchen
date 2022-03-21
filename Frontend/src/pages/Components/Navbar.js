import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
      <Link to={"/home"}><img src="images/GhostEats.png" alt="GhostEats" /></Link></div>
      <div className="nav_list">
          <ul>
              <li><img src="images/search.png" alt="search" /></li>
              <li><img src="images/people.png" alt="people" /></li>
              <li> <Link to={"/Cart"}><img src="images/buy.png" alt="buy" /></Link></li>
          </ul>
      </div>
    </div>
  );
};

export default Navbar;
