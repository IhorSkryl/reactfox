import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchSingleUser } from '../../actions/singleUserAction';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faCameraRetro } from '@fortawesome/free-solid-svg-icons';
import { faProjectDiagram } from '@fortawesome/free-solid-svg-icons';

import UserTabs from '../userTabs/UserTabs';

const getPhoneString = (phone) => {
  const phoneArr = phone.split('');
  const spaceIndex = phoneArr.findIndex((element) => element === ' ');

  return spaceIndex < 0 ? phone : phoneArr.splice(0, spaceIndex);
};

const UserDetails = (props) => {
  const { id } = props.match.params;
  const { isFetching } = props.singleUser;
  const {
    name,
    email,
    phone,
    address,
    website,
    company,
  } = props.singleUser.user;

  useEffect(() => {
    props.fetchSingleUser(id);
  }, []);

  return (
    <div>
      {isFetching ? (
        <div className="user-detail__loader">Loading...</div>
      ) : (
        <div className="user-detail">
          <h1>User Details</h1>
          <h2>{name}</h2>
          <ul className="user-detail__container">
            <li className="user-detail__li">
              <FontAwesomeIcon icon={faEnvelope} className="icon" />
              <div>
                <p>{email}</p>
                <small>Email</small>
              </div>
            </li>
            <li className="user-detail__li">
              <FontAwesomeIcon icon={faPhoneAlt} className="icon" />
              <div>
                <p>{getPhoneString(phone)}</p>
                <small>Mobile</small>
              </div>
            </li>
            <li className="user-detail__li">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
              <div>
                <p>
                  {address.street}
                  <br />
                  {address.city}, CA {address.zipcode}
                </p>
                <small>Work</small>
              </div>
            </li>
            <li className="user-detail__li">
              <FontAwesomeIcon icon={faCameraRetro} className="icon" />
              <div>
                <p>{website}</p>
                <small>Social Channels</small>
              </div>
            </li>
            <li className="user-detail__li">
              <FontAwesomeIcon icon={faProjectDiagram} className="icon" />
              <div>
                <p>
                  {company.name}
                  <br />
                  {company.catchPhrase}
                </p>
                <small>Segments</small>
              </div>
            </li>
          </ul>
          <UserTabs />
          <div className="user-detail__link">
            <Link to="/userlist">Users</Link>
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    singleUser: state.singleUser,
  };
};

export default connect(mapStateToProps, { fetchSingleUser })(UserDetails);
