import { combineReducers } from 'redux';
import usersReducer from './usersReducer';
import todosReducer from './todosReducer';
import postsReducer from './postsReducer';
import singleUserReducer from './singleUserReducer';
import changeTabReducer from './changeTabReducer';
import usersAlbumsReducer from './usersAlbumsReducer';
import usersTodosReducer from './usersTodosReducer';
import usersPostsReducer from './usersPostsReducer';

import { reducer as formReducer } from 'redux-form';

export default combineReducers({
  users: usersReducer,
  todos: todosReducer,
  posts: postsReducer,
  form: formReducer,
  singleUser: singleUserReducer,
  activeTab: changeTabReducer,
  usersAlbums: usersAlbumsReducer,
  usersTodos: usersTodosReducer,
  usersPosts: usersPostsReducer,
});
