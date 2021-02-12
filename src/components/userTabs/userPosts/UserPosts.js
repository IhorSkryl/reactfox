import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import { fetchPostsAction } from '../../../actions/usersPostsAction';

const UserPosts = (props) => {
  const { id } = props.singleUser.user;
  const { posts, isFetching } = props.usersPosts;

  useEffect(() => {
    props.fetchPostsAction(id);
  }, []);

  const renderPosts = posts.map(post => {
    return (
      <li key={post.id} className='post'>
        <h2>Post #{post.id}</h2>
        <div><span>Title:</span> {post.title}</div>
        <div><span>Body: </span>{post.body}</div>
      </li>
    )
  });

  return (
    <div>{isFetching ? <div>Loading...</div> : <ul>{renderPosts}</ul>}</div>
  );
};

const mapStateToProps = (state) => {
  return {
    singleUser: state.singleUser,
    usersPosts: state.usersPosts,
  };
};

export default connect(mapStateToProps, { fetchPostsAction })(UserPosts);
