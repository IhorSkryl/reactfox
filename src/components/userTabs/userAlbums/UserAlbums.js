import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import { fetchUsersAlbums } from '../../../actions/usersAlbumsAction';

const UserAlbums = (props) => {
  const { id } = props.singleUser.user;
  const { albums, isFetching } = props.usersAlbums;

  useEffect(() => {
    props.fetchUsersAlbums(id);
  }, []);

  const renderAlbums = albums.map((album) => {
    return (
      <li key={album.id} className="album">
        <h2>Album #{album.id}</h2>
        <p>
          <span>Title:</span> {album.title}
        </p>
      </li>
    );
  });

  return (
    <div>{isFetching ? <div>Loading...</div> : <ul>{renderAlbums}</ul>}</div>
  );
};

const mapStateToProps = (state) => {
  return {
    singleUser: state.singleUser,
    usersAlbums: state.usersAlbums,
  };
};

export default connect(mapStateToProps, { fetchUsersAlbums })(UserAlbums);
