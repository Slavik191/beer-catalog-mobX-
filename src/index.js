import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import CatalogBeer from './Components/CatalogBeer/CatalogBeer';
import InfoBeers from './stores/InfoBeers';
import Filter from './stores/Filter';
import './index.sass';

const infoBeers = new InfoBeers();
const filter = new Filter();

const Main = () => (
    <Provider 
        infoBeers = {infoBeers}
        filter = {filter}
    >
        <CatalogBeer />
    </Provider>
);

ReactDOM.render(
    <Main />,
    document.getElementById('app')
);
