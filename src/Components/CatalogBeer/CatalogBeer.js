import React, { Component } from 'react';
import ListBeers from '../ListBeers/ListBeers';
// import SwitchingPage from '../SwitchingPage/SwitchingPage';
// import BeerInfo from '../BeerInfo/BeerInfo';
// import Filter from '../Filter/Filter';
// import ButtonFilterOpenAndRandomBeer from '../ButtonFilterOpenAndRandomBeer/ButtonFilterOpenAndRandomBeer';
// import Progress from '../Progress/Progress'

const CatalogBeer= () => {
    return(
        <div>
            {/* {this.props.progress && <Progress />}
            <ButtonFilterOpenAndRandomBeer />
            <Filter />
            <BeerInfo />
            <SwitchingPage /> */}
            <ListBeers />
        </div>
    )
}

export default CatalogBeer;