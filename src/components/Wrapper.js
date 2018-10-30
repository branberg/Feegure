import React, { Component } from 'react';

class Wrapper extends Component {
  constructor(props) {
    super(props);

    this.state = {
      startingCost: 0,
      percentage: 0.029,
      cents: 0.3,
    }

    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    console.log(event.target.value);
    this.setState({
      startingCost: event.target.value
    });
  }

  renderTotalFees() {

  }

  renderTotalCost() {


  }

  // var cost_value = parseFloat($(this).val());
  // var percentage = .029;
  // var cents = 0.3;

  // var total = (cost_value + cents) / ( 1 - percentage );
  // var fee = total - cost_value;

  // var feeRounded = fee.toFixed(2);
  // var totalRounded = total.toFixed(2);

  // //add new value to total fees & check to see if it's a number
  // if( isNaN(feeRounded) != true ){
  //   $('#total_fees').text(feeRounded);
  // } else {
  //   $('#total_fees').text('0.00');
  // }

  // //add total & check to see if it's a number
  // if( isNaN(totalRounded) != true ){
  //   $('#cost_after').text(totalRounded);
  // } else {
  //   $('#cost_after').text('0.00');
  // }

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

        <p id="fee_notice" className="notice">Based on 2.9% + 30&#162;</p>

        <footer>
        <p>Stripe is a registered trademark of Stripe.</p>
        <p>PayPal is a registered trademark of PayPal, Inc.</p>
        </footer>

      </div>
    );
  }
}

export default Wrapper;
