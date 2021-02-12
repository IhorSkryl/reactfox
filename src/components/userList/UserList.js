import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchUsers } from '../../actions/usersAction';
import { connect } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const UserList = (props) => {
  useEffect(() => {
    props.fetchUsers();
  }, []);

  const renderUser = props.users.map((user) => {
    return (
      <li key={user.id} className="user-li">
        <Link
          to={`/userlist/${user.id}`}
          className="user-link"
        >
          <FontAwesomeIcon icon={faUser} className="icon" />
          <div className="list__info">
            <h2>{user.name}</h2>
            <div>
              <p>Username: {user.username}</p>
              <p>Web Site: {user.website}</p>
            </div>
          </div>
        </Link>
      </li>
    );
  });

  return (
    <div className="list">
      <ul className="list__container">
        <h1>Users List</h1>
        {renderUser}
      </ul>
      <div className="list__home-link">
        <Link to="/">Back to App</Link>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};

export default connect(mapStateToProps, { fetchUsers })(UserList);
