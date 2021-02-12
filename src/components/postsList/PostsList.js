import React, { useEffect } from 'react';

import { Link } from 'react-router-dom';
import { fetchPosts } from '../../actions/postsAction';
import { connect } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMailBulk } from '@fortawesome/free-solid-svg-icons';
import AddPostForm from '../addPostForm/AddPostForm';

const PostsList = (props) => {

  useEffect(() => {
    props.fetchPosts();
  }, []);

  return (
    <div className="list">
      <ul className="list__container">
        <AddPostForm />
        <h1>Posts List</h1>
        {props.posts.map((post) => {
          return (
            <li key={post.id}>
              <FontAwesomeIcon icon={faMailBulk} className="icon" />
              <div className="list__info">
                <h2>{post.title}</h2>
                <div>
                  <p>{post.body}</p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
      <div className="list__home-link">
        <Link to="/">Back to App</Link>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    posts: state.posts.posts,
    addedPost: state.posts.addedPost
  };
};

export default connect(mapStateToProps, { fetchPosts })(PostsList);
