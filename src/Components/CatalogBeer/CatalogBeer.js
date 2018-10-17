import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import ListBeers from '../ListBeers/ListBeers';
import SwitchingPage from '../SwitchingPage/SwitchingPage';
import BeerInfo from '../BeerInfo/BeerInfo';
import Filter from '../Filter/Filter';
import ButtonFilterOpenAndRandomBeer from '../ButtonFilterOpenAndRandomBeer/ButtonFilterOpenAndRandomBeer';
import Progress from '../Progress/Progress';

@inject('infoBeers')
@observer

class CatalogBeer extends Component {
    render(){
        return(
            <div>
                {/* {this.props.progress && <Progress />}
                <ButtonFilterOpenAndRandomBeer />
                <Filter />
                <BeerInfo />
                <ListBeers />
                <SwitchingPage /> */}
                {this.props.infoBeers.progress && <Progress />} 
                <ButtonFilterOpenAndRandomBeer />
                <Filter />
                <BeerInfo />
                <ListBeers />
                <SwitchingPage />
            </div>
        )
    }
}

export default CatalogBeer;