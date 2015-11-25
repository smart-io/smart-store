import React, { PropTypes, Component } from 'react';
import { PlaygroundComponent, View, Section } from '../../playground/index';
import { Order as OrderActions } from '../../src/index';

@PlaygroundComponent
class Order extends Component {
  static contextTypes = {
    store: PropTypes.object
  };

  static subscribe = 'order';

  convertCartToOrder = () => {
    this.context.store.dispatch(OrderActions.convertCartToOrder(this.context.store.getState().cart));
  };

  actions = {
    convertCartToOrder: this.convertCartToOrder
  };

  render() {
    return (
      <View>
        <Section>
          <Section.Param name="Items" value={this.state.state.items ? this.state.state.items.length : 0}/>
        </Section>
        <Section>
          <Section.Form onChange={(state) => { this.context.store.dispatch(state) }}/>
        </Section>
      </View>
    );
  }
}

export default Order;
