import React, { PropTypes, Component } from 'react';
import { PlaygroundComponent, View, Section, Ui } from '../../playground/index';
import * as taxes from '../../src/taxes/taxes';
import {defaultTax} from '../../src/taxes/tax';

@PlaygroundComponent
class Taxes extends Component {
  static contextTypes = {
    store: PropTypes.object
  };

  static subscribe = 'taxes';

  showTaxModal = () => {
    this.refs.modal.setState({ isOpen: true });
  };

  addTax = (value) => {
    this.refs.modal.setState({ isOpen: false });
    taxes.add(value);
  };

  removeTax = (index) => taxes.remove(index);
  resetTax = () => taxes.reset();

  actions = {
    addTax: this.showTaxModal,
    resetTax: this.resetTax
  };

  render() {
    return (
      <View>
        <Section.Items
          items={this.state.taxes}
          removeTax={this.removeTax}
        />
        <Ui.Modal ref="modal">
          <Section.Form
            name="Tax"
            defaults={{ ...defaultTax }}
            action={this.addTax}
          />
        </Ui.Modal>
      </View>
    );
  }
}

export default Taxes;
