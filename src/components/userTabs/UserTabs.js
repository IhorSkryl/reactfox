import React from 'react';

import { connect } from 'react-redux';

import { changeActive } from '../../actions/changeTabAction';

import UserAlbums from './userAlbums/UserAlbums';
import UserTodos from './userTodos/UserTodos';
import UserPosts from './userPosts/UserPosts';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompactDisc } from '@fortawesome/free-solid-svg-icons';
import { faList } from '@fortawesome/free-solid-svg-icons';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';

const UserTabs = (props) => {
  const tabs = [
    {
      title: 'Albums',
      component: <UserAlbums />,
      icon: faCompactDisc,
    },
    {
      title: 'Todos',
      component: <UserTodos />,
      icon: faList,
    },
    {
      title: 'Posts',
      component: <UserPosts />,
      icon: faAddressCard,
    },
  ];

  const onTabClick = (index) => {
    props.changeActive(index);
  };

  const renderTabs = tabs.map((tab, index) => {
    return (
      <li
        key={index}
        className={`tab ${index === props.activeTab ? 'active' : ''}`}
        onClick={(e) => onTabClick(index)}
      >
        <FontAwesomeIcon icon={tab.icon} className="icon" />
        <div>{tab.title}</div>
      </li>
    );
  });

  return (
    <div className="tabs__container">
      <ul className="tabs">{renderTabs}</ul>
      <div className="tabs__content"><div>{tabs[props.activeTab].component}</div></div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    activeTab: state.activeTab,
  };
};

export default connect(mapStateToProps, { changeActive })(UserTabs);
