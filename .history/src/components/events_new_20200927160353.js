import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

// import { postEvent } from "../actions";
class EventsNew extends Component {
  render(field) {
    const {
      input,
      label,
      type,
      meta: { touched, error },
    } = field;
  }
  render() {
    return (
      <form>
        <div>
          <Field
            label="Title"
            name="title"
            type="text"
            component={this.renderField}
          />
        </div>
      </form>
    );
  }
}

// const mapDispatchToProps = { postEvents };

export default connect(null, null)(EventsNew);
