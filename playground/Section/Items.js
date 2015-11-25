import React, { PropTypes, Component } from 'react';
import Action from '../Ui/Action';

const styles = {
  table: {
    width: '100%',
    marginTop: '20px',
    borderCollapse: 'collapse',
    borderSpacing: 'none'
  },

  theadTd: {
    borderBottom: '1px solid rgba(255, 255, 255, .1)',
    padding: '8px 0',
    textTransform: 'uppercase',
    color: 'rgba(255, 255, 255, .3)'
  },

  tbodyTd: {
    borderTop: '1px solid rgba(255, 255, 255, .1)',
    padding: '8px 0'
  },

  tfootTd: {
    borderTop: '1px solid rgba(255, 255, 255, .1)',
    backgroundColor: 'rgba(255, 255, 255, .05)',
    padding: '8px 0',
    fontWeight: 'bold',
    color: '#00b4ff'
  }
};

class Items extends Component {
  static propTypes = {
    items: PropTypes.array
  };

  render() {
    const { items, showTotals, ...actions } = this.props;
    let children = [];

    items.forEach((item, index) => {
      children = [...children, this.renderChild(index, item, actions)];
    });

    let totals = null;
    if (showTotals && items.length) {
      totals = this.renderTotals(showTotals, items);
    }

    return (
      <table style={styles.table}>
        <thead>
        {this.renderHeader()}
        </thead>
        <tbody>
          {children}
        </tbody>
        {totals}
      </table>
    );
  }

  renderHeader() {
    if (typeof this.props.items !== 'undefined' && typeof this.props.items[0] !== 'undefined') {
      let children = [<td style={{...styles.theadTd, width: '50px'}} key="index">index</td>];
      for (const prop of Object.keys(this.props.items[0])) {
        children.push(<td style={styles.theadTd} key={prop}>{prop}</td>);
      }
      children.push(<td style={{...styles.theadTd, width: '10px'}} key="actions"/>);
      return <tr>{children}</tr>;
    }
    return null;
  }

  renderChild(index, item, actions) {
    let children = [<td style={styles.tbodyTd} key="index">{index}</td>];
    for (const prop of Object.keys(item)) {
      children.push(<td style={styles.tbodyTd} key={prop}>{item[prop]}</td>);
    }
    children.push(this.renderItemActions(index, actions));
    return <tr key={index}>{children}</tr>;
  }

  renderItemActions(index, actions) {
    let children = [];
    for (const prop of Object.keys(actions)) {
      children.push(<Action key={prop} name={prop} action={() => { actions[prop](index) }}/>);
    }

    return (
      <td style={{...styles.tbodyTd, width: '10px', whiteSpace: 'nowrap'}} key="actions">
        {children}
      </td>
    );
  }

  renderTotals(showTotals, items) {
    let totals = {};
    items.forEach((item) => {
      for (const prop of Object.keys(item)) {
        totals[prop] = showTotals.includes(prop) ? totals[prop] + parseFloat(item[prop]) || parseFloat(item[prop]) : null;
      }
    });

    let children = [<td style={styles.tfootTd} key="index"/>];
    for (const prop of Object.keys(totals)) {
      children.push(<td style={styles.tfootTd} key={prop}>{totals[prop]}</td>);
    }
    children.push(<td style={styles.tfootTd} key="actions"/>);

    return (
      <tfoot>
      <tr>
        {children}
      </tr>
      </tfoot>
    );
  }
}

export default Items;
