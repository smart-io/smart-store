import React, { Component } from 'react';
import Items from './items';
import Form from './form';
import Param from './param';
import Message from './message';
import Errors from './errors';
import Request from './request';

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
