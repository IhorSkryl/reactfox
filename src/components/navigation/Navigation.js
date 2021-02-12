import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <ul className="navigation">
      <li>
        <Link to="/userlist" className="navigation__link">
          Users
        </Link>
      </li>
      <li>
        <Link to="/todolist" className="navigation__link">
          Todos
        </Link>
      </li>
      <li>
        <Link to="/postslist" className="navigation__link">
          Posts
        </Link>
      </li>
    </ul>
  );
};

export default Navigation;
