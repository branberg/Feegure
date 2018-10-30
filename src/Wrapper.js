import React, { Component } from 'react';

class Wrapper extends Component {
  constructor(props) {
    super(props);

    this.state = {
      startingCost: '',
      percentage: 0.029,
      cents: 0.3,
    }

    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    const convertedNumber = parseFloat(event.target.value);

    if (isNaN(convertedNumber)) {
      return null;
    }

    this.setState({
      startingCost: convertedNumber
    });
  }

  renderTotalFees() {
    const fee = this.renderTotalCost() - this.state.startingCost;

    if (this.state.startingCost === '') {
      return '0.00';
    }

    return fee.toFixed(2);
  }

  renderTotalCost() {
    const total = (this.state.startingCost + this.state.cents) / (1 - this.state.percentage);

    if (this.state.startingCost === '') {
      return '0.00';
    }

    return total.toFixed(2);
  }

  render() {
    return (
      <div id="wrapper">

        <header>
          <h1 className="title">Feegure</h1>
          <span className="subtitle">The clean way to calculate those dreaded Paypal and Stripe fees.</span>
        </header>

        <div className="lines">

          <div className="line">
            <div className="label">Starting Cost</div>
            <div className="money">
              <span className="dollar">$</span>
              <input
                id="starting_cost"
                name="starting_cost"
                placeholder="0.00"
                type="number"
                step="0.01"
                min="0.00"
                onChange={this.onInputChange}
                value={this.state.startingCost}
              />
            </div>
          </div>

          <div className="line">
            <div className="label">Total Fees</div>
            <div className="money">
              <span className="dollar">$</span>
              <span className="total">
                {this.renderTotalFees()}
              </span>
            </div>
          </div>

          <div className="line">
            <div className="label">Cost After Fees</div>
            <div className="money">
              <span className="dollar">$</span>
              <span className="total" id="cost_after">
                {this.renderTotalCost()}
              </span>
            </div>
          </div>

        </div>

        <p id="fee_notice" className="notice">Based on 2.9% + $0.30</p>

        <footer>
        <p>Stripe is a registered trademark of Stripe.</p>
        <p>PayPal is a registered trademark of PayPal, Inc.</p>
        </footer>

      </div>
    );
  }
}

export default Wrapper;
