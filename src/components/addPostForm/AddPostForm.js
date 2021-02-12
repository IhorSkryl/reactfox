import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { addPost } from '../../actions/addPostAction';

const validate = ({ title, body }) => {
  const errors = {};

  if (!title) {
    errors.title = 'Title is required';
  }

  if (!body) {
    errors.body = 'Body is required';
  }

  return errors;
};

const renderError = ({ touched, error }) => {
  if (touched && error) {
    return <div className="error">{error}</div>;
  }
};

const renderField = ({ input, type, label, autoComplete, meta }) => {
  const redBorder = `${meta.error && meta.touched ? 'red-border' : ''}`;
  const redLabel = `${meta.error && meta.touched ? 'red-label' : ''}`;
  return (
    <div className="field">
      <label className={redLabel}>{label}</label>
      <input
        {...input}
        type={type}
        autoComplete={autoComplete}
        className={redBorder}
      />
      {renderError(meta)}
    </div>
  );
};

const AddPostForm = (props) => {

  const onSubmit = (formValues) => {
    props.addPost(formValues, props.posts);
  };

  return (
    <form className="form" onSubmit={props.handleSubmit(onSubmit)}>
      <h1>Add Post</h1>
      <Field
        name="title"
        component={renderField}
        label="Post Title"
        type="text"
        autoComplete="off"
      />
      <Field
        name="body"
        component={renderField}
        label="Post Body"
        type="text"
        autoComplete="off"
      />
      <div className="list__home-link">
        <button>Submit</button>
      </div>
    </form>
  );
};

const formWrapped = reduxForm({
  form: 'addPostForm',
  validate,
})(AddPostForm);

export default connect(null, { addPost })(formWrapped);
