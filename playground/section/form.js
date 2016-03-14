import React, { PropTypes, Component } from 'react';
import Action from '../ui/action';

const styles = {
  container: {
    marginRight: '12px',
    marginBottom: '12px',
    fontSize: '11px',
    border: '1px solid rgba(255, 255, 255, .2)',
    borderRadius: '3px',
    padding: '12px 12px',
    background: 'rgba(255, 255, 255, .04)'
  },
  name: {
    display: 'block',
    paddingBottom: '8px',
    marginBottom: '12px',
    borderBottom: '1px solid rgba(255, 255, 255, .2)',
    textTransform: 'uppercase',
    color: 'rgba(255, 255, 255, .4)'
  },
  label: {
    textTransform: 'uppercase',
    color: '#00b4ff',
    marginRight: '12px'
  },
  input: {
    border: '1px solid rgba(255, 255, 255, .1)',
    backgroundColor: 'rgba(255, 255, 255, .05)',
    padding: '4px 12px',
    width: '180px',
    color: '#FC6D24'
  },
  buttonContainer: {
    marginTop: '12px',
    display: 'flex',
    justifyContent: 'center'
  }
};

class Form extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    defaults: PropTypes.object.isRequired,
    state: PropTypes.object,
    action: PropTypes.func
  };

  constructor(props, context, updater) {
    super(props, context, updater);
    this.state = { ...props.state };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.state) this.setState(nextProps.state);
  }

  onChange = (name, event) => {
    let state = {};
    state[name] = event.target.value;
    this.setState(state);
  };

  action = () => {
    this.props.action(this.state);
  };

  render() {
    const { name, defaults } = this.props;

    return (
      <div style={styles.container}>
        <span style={styles.name}>
          {name}
        </span>
        {this.renderFields(defaults, this.state)}
        <div style={styles.buttonContainer}>
          <Action name="Save" color="blue" action={this.action}/>
        </div>
      </div>
    );
  }

  renderFields(defaults, state) {
    let children = [];
    for (const prop of Object.keys(defaults)) {
      children.push(
        <tr key={prop}>
          <td>
            <label style={styles.label}>
              {prop}
            </label>
          </td>
          <td>
            <input
              style={styles.input}
              value={state && typeof state[prop] !== 'undefined' ? state[prop] : null}
              onChange={this.onChange.bind(this, prop)}
              placeholder={defaults[prop] === null ? 'NULL' : defaults[prop]}
            />
          </td>
        </tr>
      );
    }

    return (
      <table>
        <tbody>
        {children}
        </tbody>
      </table>
    );
  }
}

export default Form;
