import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import { fetchUsersTodos } from '../../../actions/usersTodosAction';

const UserTodos = (props) => {
  const { id } = props.singleUser.user;
  const { todos, isFetching } = props.usersTodos;

  useEffect(() => {
    props.fetchUsersTodos(id);
  }, []);

  const renderTodos = todos.map((todo) => {
    return (
      <li key={todo.id} className="todo">
        <h2>Todo #{todo.id}</h2>
        <div className="todo__title">
          <div>{todo.completed ? <div className="done__mark">&#10003;</div> : <div className='empty__mark'></div>}</div>
          <div className={todo.completed ? 'done' : ''}>{todo.title}</div>
        </div>
      </li>
    );
  });

  return (
    <div>{isFetching ? <div>Loading...</div> : <ul>{renderTodos}</ul>}</div>
  );
};

const mapStateToProps = (state) => {
  return {
    singleUser: state.singleUser,
    usersTodos: state.usersTodos,
  };
};

export default connect(mapStateToProps, { fetchUsersTodos })(UserTodos);
