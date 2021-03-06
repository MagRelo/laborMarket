import React, { Component } from 'react';

import Chart from '../misc/chart';
import LoadWrapper from '../misc/loader';

class CreateContractForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contractOwner: '',
      oracleAddress: '',
      basePrice: 0.15,
      totalSupply: 400,
      exponent: 2
    };
  }
  componentDidMount() {
    fetch('https://api.coinmarketcap.com/v1/ticker/ethereum/?convert=USD')
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({
          exchangeRate: parseInt(data[0].price_usd, 10)
        });
      });
  }

  // Form functions
  handleChange(event) {
    event.preventDefault();

    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    // this.props.createTournament({
    //   contractOwner: this.props.userAddress,
    //   oracleAddress: 'asdnfaosdifnasdoif',
    //   name: this.state.tournamentName,
    //   timedGame: this.state.gameType === 'timed',
    //   minDeposit: this.state.minDeposit,
    //   rounds: this.state.rounds,
    //   playerList: this.state.playerWhitelist
    // });
    console.log('TODO: create tournament');
  }

  round(value, places) {
    places = places || 4;
    return Number(Math.round(value + 'e' + places) + 'e-' + places);
  }
  formatEth(ether) {
    return (
      'Ξ' +
      this.round(ether, 5) +
      ' ETH ($' +
      this.round(this.state.exchangeRate * ether) +
      ')'
    );
  }
  render() {
    return (
      <div>
        <h1>Create contract</h1>

        <LoadWrapper>
          <form className="pure-form" onSubmit={this.handleSubmit.bind(this)}>
            <legend>Profile</legend>
            <fieldset>
              <label>Name</label>
              <input
                className="pure-input-1"
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleChange.bind(this)}
              />

              <label>Avatar</label>
              <input
                className="pure-input-1"
                type="text"
                name="avatar"
                value={this.state.avatar}
                onChange={this.handleChange.bind(this)}
              />

              <label>Position</label>
              <input
                className="pure-input-1"
                type="text"
                name="postion"
                value={this.state.postion}
                onChange={this.handleChange.bind(this)}
              />

              <label>Introduction</label>
              <div>
                <textarea
                  rows="3"
                  className="pure-input-1"
                  value={this.state.intro}
                  name="content"
                  onChange={this.handleChange.bind(this)}
                />
              </div>
            </fieldset>

            <legend>Pricing</legend>

            <div
              style={{
                display: 'grid',
                gridTemplateRows: '1fr',
                gridTemplateColumns: '1fr 1fr',
                margin: '0.5em 0 1em'
              }}
            >
              <div>
                <fieldset>
                  <label>
                    Minimum Price: {this.formatEth(this.state.basePrice)}
                  </label>
                  <input
                    className="pure-input-1"
                    type="range"
                    name="basePrice"
                    min="0.01"
                    max="1"
                    step="0.01"
                    value={this.state.basePrice}
                    onChange={this.handleChange.bind(this)}
                  />

                  <label>Steepness: {this.state.exponent}</label>
                  <input
                    className="pure-input-1"
                    type="range"
                    name="exponent"
                    min="1"
                    max="4"
                    step="0.1"
                    value={this.state.exponent}
                    onChange={this.handleChange.bind(this)}
                  />

                  <label>Total Supply: {this.state.totalSupply}</label>
                  <input
                    className="pure-input-1"
                    type="range"
                    name="totalSupply"
                    min="100"
                    max="1000"
                    step="10"
                    value={this.state.totalSupply}
                    onChange={this.handleChange.bind(this)}
                  />
                </fieldset>
              </div>
              <div>
                <Chart
                  basePrice={this.round(
                    this.state.exchangeRate * this.state.basePrice
                  )}
                  totalSupply={this.state.totalSupply}
                  basis={this.state.basis}
                  exponent={this.state.exponent}
                  currentPrice={this.round(
                    this.state.exchangeRate * this.state.currentPrice
                  )}
                  currentSupply={this.state.currentSupply}
                />
              </div>
            </div>

            <button
              type="submit"
              className="pure-button pure-button-xlarge pure-button-primary"
              onClick={this.handleSubmit.bind(this)}
            >
              + Create contract
            </button>
          </form>
        </LoadWrapper>
      </div>
    );
  }
}

export default CreateContractForm;
