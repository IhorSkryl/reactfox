import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from '../App';
import PostsList from '../components/postsList/PostsList';
import TodoList from '../components/todoList/TodoList';
import UserList from '../components/userList/UserList';
import UserDetails from '../components/userDetails/UserDetails';
import Header from '../components/header/Header';

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/postslist" exact component={PostsList} />
        <Route path="/todolist" exact component={TodoList} />
        <Route path="/userlist" exact component={UserList} />
        <Route path="/userlist/:id" exact component={UserDetails} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
