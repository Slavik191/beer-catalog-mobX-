import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import Button from '@material-ui/core/Button';
import './SwitchingPage.sass';

@inject('infoBeers', 'filter')
@observer

class SwitchingPage extends Component {
    next = () => {
        this.props.infoBeers.newListBeers(this.props.infoBeers.page + 1, this.props.filter.filterForm)
    }

    prev = () => {
        if(this.props.infoBeers.page > 1)
            this.props.infoBeers.newListBeers(this.props.infoBeers.page - 1, this.props.filter.filterForm)
    }
    render(){
        return(
            <div className = 'switchingPageButtons'>
                <Button onClick = {this.prev}>Предыдущая</Button>
                <Button onClick = {this.next}>Следующая</Button>
            </div>
        )
    }
}

export default SwitchingPage;