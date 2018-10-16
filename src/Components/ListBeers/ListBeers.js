import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

//import newListBeers from '../../requests/newListBeers';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Beer from '../Beer/Beer';

@inject('listBeers')
@observer

class ListBeers extends Component {
    componentWillMount() {
        this.props.listBeers.newListBeers(1);
    }
    render() {
        console.log(this.props.listBeers)
        let list = this.props.listBeers.listBeers.map(beer => {
            return (
                <Beer beer={beer} key={beer.id} />
            )
        });
        if (list.length === 0 && !this.props.progress)
            list.push(
                <TableRow key = {'noBeer'}>
                    <TableCell>Пива нет</TableCell>
                </TableRow>
            )
        return (
            <Paper>
                <Table >
                    <TableHead>
                        <TableRow>
                            <TableCell>Название</TableCell>
                            <TableCell numeric>Крепость пива</TableCell>
                            <TableCell numeric>Цветность пива (Европейская)</TableCell>
                            <TableCell numeric>Цветность пива (Стандартная)</TableCell>
                            <TableCell numeric>Единица горечи</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {list}
                    </TableBody>
                </Table>
            </Paper>
        )
    }
}

export default ListBeers;