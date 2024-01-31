import React, { Component } from 'react';
import Medal from './Medal';

class Country extends Component {
    // handleIncrement = () => {
    //     let increment = this.state.gold;
    //     increment++
    //     this.setState({ gold: increment });
    // }

    getCountryMedalCount = (countryGold, countrySilver, countryBronze) => {
        let totalCountryCount = countryGold + countrySilver + countryBronze;
        return totalCountryCount;
    }



    render() {
        const { country, medals, onIncrement, onDecrement } = this.props;
        return (
            <div className='country'>
                <div className='name'>{country.name}</div>
                <h4>Country Medals: {this.getCountryMedalCount(country.gold, country.silver, country.bronze)}</h4>
                {medals.map(medal =>
                    <Medal
                        key={medal.id}
                        country={country}
                        medal={medal}
                        onIncrement={onIncrement}
                        onDecrement={onDecrement}/>)}
                        <hr></hr>
            </div>
            
        )
    }

}

export default Country