import React, { Component } from 'react';
import ReactModal from 'react-modal';

const styles = {
  overlay: {
    position: 'fixed',
    zIndex: 20000,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, .75)',
    display: 'flex',
    justifyContent: 'center'
  },
  content: {
    position: 'relative',
    top: null,
    left: null,
    right: null,
    bottom: null,
    border: 'none',
    borderRadius: 'none',
    backgroundColor: 'rgba(0, 0, 0, .8)',
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
    outline: 'none',
    padding: '0',
    marginTop: '40px',
    marginBottom: 'auto'
  }
};

class Modal extends Component {
  constructor(props, context, updater) {
    super(props, context, updater);
    this.state = {
      isOpen: false
    };
  }

  openModal = () => {
    this.setState({ isOpen: true });
  };

  closeModal = () => {
    this.setState({ isOpen: false });
  };

  render() {
    return (
      <ReactModal
        isOpen={this.state.isOpen}
        onRequestClose={this.closeModal}
        style={styles}
      >
        {this.props.children}
      </ReactModal>
    );
  }
}

export default Modal;
