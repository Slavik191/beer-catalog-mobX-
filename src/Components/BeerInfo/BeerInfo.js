import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Slide from '@material-ui/core/Slide';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import Table from '@material-ui/core/Table';
import './BeerInfo.sass';

function Transition(props) {
    return <Slide direction="up" {...props} />;
}


@inject('infoBeers')
@observer

class BeerInfo extends Component {
    render() {
        let foodPairing = [];
        let ingredients = [];
        let method = [];
        if(this.props.infoBeers.infoBeer){
            foodPairing = this.props.infoBeers.infoBeer.food_pairing.map((food,index) => {
                return(
                    <TableRow key = {index}>
                        <TableCell component="th" scope="row">{food}</TableCell>
                    </TableRow>
                )
            });
            let str = '';
            this.props.infoBeers.infoBeer.ingredients.hops.forEach((hop, index) => {
                str += ` ${hop.amount.value} ${hop.amount.unit} ${hop.name}`;
                if(this.props.infoBeers.infoBeer.ingredients.hops.length - 1 !== index)
                    str += ',';
                else
                    str += '.';
            })
            ingredients.push(
                <div key = {'ingredients1'}>
                    Хмель: {str}
                </div>
            )
            str = ''
            this.props.infoBeers.infoBeer.ingredients.malt.forEach((malt, index) => {
                str += ` ${malt.amount.value} ${malt.amount.unit} ${malt.name}`;
                if(this.props.infoBeers.infoBeer.ingredients.malt.length - 1 !== index)
                    str += ',';
                else
                    str += '.';
            })
            ingredients.push(
                <div key = {'ingredients2'}>
                    Солод: {str}
                </div>
            )
            method.push(
                <div key = {'method1'}>
                    {`Ферментация: ${this.props.infoBeers.infoBeer.method.fermentation.temp.value} ${this.props.infoBeers.infoBeer.method.fermentation.temp.unit}`}
                </div>
            )
            method.push(
                <div key = {'method2'}> 
                    {`Температура затора: продолжительность ${this.props.infoBeers.infoBeer.method.mash_temp[0].duration}, при температуре ${this.props.infoBeers.infoBeer.method.mash_temp[0].temp.value} ${this.props.infoBeers.infoBeer.method.mash_temp[0].temp.unit}`}
                </div>
            )
            method.push(
                <div key = {'method3'}>
                    {`Твист: ${this.props.infoBeers.infoBeer.method.twist ? this.props.infoBeers.infoBeer.method.twist : '-'}`}
                </div>
            )

        }
        return (
            <Dialog
                open={this.props.infoBeers.infoBeerModal}
                TransitionComponent={Transition}
                keepMounted
            >
                <h1 className = 'title'>
                    {this.props.infoBeers.infoBeer ? this.props.infoBeers.infoBeer.name : ''}
                </h1>
                
                <DialogContent>
                    <div className='beerDescription'>
                        <img src={this.props.infoBeers.infoBeer ? this.props.infoBeers.infoBeer.image_url : ''} />
                        <div>
                            {this.props.infoBeers.infoBeer ? this.props.infoBeers.infoBeer.description : ''}
                        </div>
                    </div>
                    <div>
                        {this.props.infoBeers.infoBeer && <Table>
                            <TableBody>
                                <TableRow >
                                    <TableCell component="th" scope="row">крепкосто</TableCell>
                                    <TableCell numeric>{this.props.infoBeers.infoBeer.abv}</TableCell>
                                </TableRow>
                                <TableRow >
                                    <TableCell component="th" scope="row">Цветность пива(Европейская)</TableCell>
                                    <TableCell numeric>{this.props.infoBeers.infoBeer.ebc ? this.props.infoBeers.infoBeer.ebc : '-'}</TableCell>
                                </TableRow>
                                <TableRow >
                                    <TableCell component="th" scope="row">Цветность пива(Стандартная)</TableCell>
                                    <TableCell numeric>{this.props.infoBeers.infoBeer.srm ? this.props.infoBeers.infoBeer.srm : '-'}</TableCell>
                                </TableRow>
                                <TableRow >
                                    <TableCell component="th" scope="row">Единица горечи</TableCell>
                                    <TableCell numeric>{this.props.infoBeers.infoBeer.ibu ? this.props.infoBeers.infoBeer.ibu : '-'}</TableCell>
                                </TableRow>
                                <TableRow >
                                    <TableCell component="th" scope="row">фактор затора</TableCell>
                                    <TableCell numeric>{this.props.infoBeers.infoBeer.ph}</TableCell>
                                </TableRow>
                                <TableRow >
                                    <TableCell component="th" scope="row">Подзаголовок</TableCell>
                                    <TableCell numeric>{this.props.infoBeers.infoBeer.tagline}</TableCell>
                                </TableRow>
                                <TableRow >
                                    <TableCell component="th" scope="row">Впервые сварен</TableCell>
                                    <TableCell numeric>{this.props.infoBeers.infoBeer.first_brewed}</TableCell>
                                </TableRow>
                                <TableRow >
                                    <TableCell component="th" scope="row">уровень затухания</TableCell>
                                    <TableCell numeric>{this.props.infoBeers.infoBeer.attenuation_level}</TableCell>
                                </TableRow>
                                <TableRow >
                                    <TableCell component="th" scope="row">Создатель</TableCell>
                                    <TableCell numeric>{this.props.infoBeers.infoBeer.contributed_by}</TableCell>
                                </TableRow>
                                <TableRow >
                                    <TableCell component="th" scope="row">Исходная гравитация</TableCell>
                                    <TableCell numeric>{this.props.infoBeers.infoBeer.target_og}</TableCell>
                                </TableRow>
                                <TableRow >
                                    <TableCell component="th" scope="row">Конечная гравитация</TableCell>
                                    <TableCell numeric>{this.props.infoBeers.infoBeer.target_fg}</TableCell>
                                </TableRow>
                                <TableRow >
                                    <TableCell component="th" scope="row">Объем кипения</TableCell>
                                    <TableCell numeric>{`${this.props.infoBeers.infoBeer.boil_volume.value} ${this.props.infoBeers.infoBeer.boil_volume.unit}`}</TableCell>
                                </TableRow>
                            </TableBody>                           
                        </Table>}
                        <h2>Рекомендуемые блюда</h2>
                        <Table>    
                            <TableBody>                            
                                {foodPairing}
                            </TableBody>                            
                        </Table>
                        <h2>Ингридиенты</h2>
                        {ingredients}
                        <h2>Метод приготовления</h2>
                        {method}
                        <h2>Cоветы пивоваров</h2>
                        {this.props.infoBeers.infoBeer ? this.props.infoBeers.infoBeer.brewers_tips : ''}
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.props.infoBeers.closeInfoBeerModal} color="primary">
                        Закрыть
                    </Button>
                </DialogActions>
            </Dialog>

        );
    }
}

export default BeerInfo;
