import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import Button from '@material-ui/core/Button';
import './ButtonFilterOpenAndRandomBeer.sass';

@inject('filter', 'infoBeers')
@observer

class ButtonFilterOpenAndRandomBeer extends Component {
    render(){
        return(
            <div className = 'buttonFilterOpenAndRandomBeer'>
                <Button onClick = {this.props.filter.openFilterFormModal}>Фильтр</Button>
                <Button onClick = {this.props.infoBeers.randomBeer}>Мне повезёт</Button>
            </div>
        )
    }
}

export default ButtonFilterOpenAndRandomBeer;