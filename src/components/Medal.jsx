import React, { Component } from 'react';
import Country from './Country';

class Medal extends Component {


    getMedalCount(medalName, countryGold, countrySilver, countryBronze) {
        if (medalName == 'Gold') {
            return countryGold
        } else if(medalName == 'Silver') {
            return countrySilver
        } else if(medalName == 'Bronze') {
            return countryBronze
        } else {
            return 0
        }
    }

    
        
    
    

    render() {
        const { medal, country, onIncrement, onDecrement } = this.props;
        return (
            <div className='medal'>
                {medal.name} Medals: {this.getMedalCount(medal.name, country.gold, country.silver, country.bronze) } 
                <button className='addSubtractButton' onClick={ () => onIncrement(medal.name, country.id) }>+</button>
                <button className='addSubtractButton' onClick={ () => onDecrement(medal.name, country.id, country.gold, country.silver, country.bronze) }>-</button>
            </div>
        )

    }
}

export default Medal