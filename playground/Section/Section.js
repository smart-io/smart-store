import React, { Component } from 'react';
import Items from './Items';
import Form from './Form';
import Param from './Param';
import Message from './Message';
import Errors from './Errors';
import Request from './Request';

const styles = {
  section: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: '22px',
    marginBottom: '22px'
  }
};

class Section extends Component {
  static Items = Items;
  static Form = Form;
  static Param = Param;
  static Message = Message;
  static Errors = Errors;
  static Request = Request;

  render() {
    return (
      <div style={styles.section}>
        {this.props.children}
      </div>
    );
  }
}

export default Section;
