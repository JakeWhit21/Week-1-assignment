import React, { Component } from 'react';
import Country from './components/Country';
import Medal from './components/Medal';
import './App.css';

class App extends Component {
  state = {
    countries: [
      { id: 1, name: 'USA', gold: 2, silver: 0, bronze: 4 },
      { id: 2, name: 'Japan', gold: 1, silver: 2, bronze: 3 },
      { id: 3, name: 'Germany', gold: 5, silver: 1, bronze: 8 }
    ],
    medals: [
      { id: 1, name: 'Gold' },
      { id: 2, name: 'Silver' },
      { id: 3, name: 'Bronze' }
    ]
  }

  handleIncrement = (medalName, countryId) => {

    const countriesMutable = [...this.state.countries];

    const idx = countriesMutable.findIndex((c) => c.id === countryId);

    if (medalName == 'Gold') {
      countriesMutable[idx].gold++;
      this.setState({ countries: countriesMutable });
    } else if (medalName == 'Silver') {
      countriesMutable[idx].silver++;
      this.setState({ countries: countriesMutable });
    } else if (medalName == 'Bronze') {
      countriesMutable[idx].bronze++;
      this.setState({ countries: countriesMutable });
    } else {
      return 0
    }


  }

  handleDecrement = (medalName, countryId, countryGold, countrySilver, countryBronze) => {
    const countriesMutable = [...this.state.countries];

    const idx = countriesMutable.findIndex((c) => c.id === countryId);

    if (medalName == 'Gold' && countryGold >= 1) {
      countriesMutable[idx].gold--;
      this.setState({ countries: countriesMutable });
    } else if (medalName == 'Silver' && countrySilver >= 1) {
      countriesMutable[idx].silver--;
      this.setState({ countries: countriesMutable });
    } else if (medalName == 'Bronze' && countryBronze >= 1) {
      countriesMutable[idx].bronze--;
      this.setState({ countries: countriesMutable });
    } else {
      return 0
    }
  }

  getTotalMedalCount = () => {
    let goldMedals;
    let silverMedals;
    let bronzeMedals;
    goldMedals = this.state.countries.reduce((a, b) => a + b.gold, 0);
    silverMedals = this.state.countries.reduce((a, b) => a + b.silver, 0);
    bronzeMedals = this.state.countries.reduce((a, b) => a + b.bronze, 0);
    return goldMedals + silverMedals + bronzeMedals;
  }

  render() {
    return (
      <div className="App">
        <h2>Total Medals: {this.getTotalMedalCount()}</h2> 
        {this.state.countries.map(country =>
          <Country
            key={country.id}
            country={country}
            medals={this.state.medals}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement} />)}
      </div>
    );
  }
}

export default App;
