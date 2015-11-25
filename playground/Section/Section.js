import React, { Component } from 'react';
import Items from './Items';
import Form from './Form';
import Param from './Param';

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

  render() {
    return (
      <div style={styles.section}>
        {this.props.children}
      </div>
    );
  }
}

export default Section;
