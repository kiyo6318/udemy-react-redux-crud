import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Field, reduxForm } from "redux-form";

import { postEvent } from "../actions";
class EventsNew extends Component {
  renderField(field) {
    const {
      input,
      label,
      type,
      meta: { touched, error },
    } = field;
    return (
      <div>
        <input {...input} placeholder={label} type={type} />
        {touched && error && <span>{error}</span>}
      </div>
    );
  }

async onSubmit(values){
  await this.props.postEvent(values)
  this.props.history.push('/')
}

  render() {
    return (
      <form onSubmit=handleSubmit(this.onSubmit)>
        <div>
          <Field
            label="Title"
            name="title"
            type="text"
            component={this.renderField}
          />
        </div>
        <div>
          <Field
            label="body"
            name="body"
            type="text"
            component={this.renderField}
          />
        </div>
        <div>
          <input type="submit" value="Submit" disabled={false} />
          <Link to="/">Cancel</Link>
        </div>
      </form>
    );
  }
}

const mapDispatchToProps = { postEvents };

const validate = (values) => {
  const errors = {};
  if (!values.title) errors.title = "Enter a title, please.";
  if (!values.body) errors.body = "Enter a body, please.";
  return errors;
};

export default connect(
  null,
  null
)(reduxForm({ validate, form: "eventNewForm" })(EventsNew));
