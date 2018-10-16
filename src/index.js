import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import CatalogBeer from './Components/CatalogBeer/CatalogBeer';
import ListBeers from './stores/ListBeers';

const listBeers = new ListBeers();

const Main = () => (
    <Provider 
        listBeers = {listBeers}
    >
        <CatalogBeer />
    </Provider>
);

ReactDOM.render(
    <Main />,
    document.getElementById('app')
);
