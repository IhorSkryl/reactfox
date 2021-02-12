import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchTodos } from '../../actions/todosAction';
import { connect } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListUl } from '@fortawesome/free-solid-svg-icons';

const TodoList = (props) => {
  useEffect(() => {
    props.fetchTodos();
  }, []);

  return (
    <div className="list">
      <ul className="list__container">
        <h1>Todos List</h1>
        {props.todos.map((todo) => {
          return (
            <li key={todo.id}>
              <FontAwesomeIcon icon={faListUl} className="icon" />
              <div className="list__info">
                <h2>{todo.title}</h2>
                <div>
                  <p>Completed: {todo.completed ? 'yes' : 'no'}</p>
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
    todos: state.todos,
  };
};

export default connect(mapStateToProps, { fetchTodos })(TodoList);
