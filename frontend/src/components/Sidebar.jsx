import { Link } from 'react-router-dom';

function Sidebar() {

  return (
    <div className="sidebar-container">
      <ul>
        <div className="sidebar-item">
          <Link to="/frontend/home">
            <li>Home</li>
          </Link>
        </div>

        <div className="sidebar-item">
          <Link to="/frontend/banana-scale">
            <li>Nanerverter</li>
          </Link>
        </div>

        <div className="sidebar-item">
          <Link to="/frontend/banana-recipes">
            <li>Banana Recipes</li>
          </Link>
        </div>

        <div className="sidebar-item">
          <Link to="/frontend/banana-books">
            <li>Banana Books</li>
          </Link>
        </div>

        <div className="sidebar-item">
          <Link to="/frontend/banana-fun-facts">
            <li>Banana Fun Facts</li>
          </Link>
        </div>

        <div className="sidebar-item">
          <Link to="/frontend/banana-forum">
            <li>Banana Forum</li>
          </Link>
        </div>
      </ul>

      <div className="sidebar-gif">
        <img src="./src/assets/images/3183117_volfenthefox_peanut-butter-jelly-time.gif" alt="Sidebar GIF" />
      </div>
    </div>
  );
}

export default Sidebar;
