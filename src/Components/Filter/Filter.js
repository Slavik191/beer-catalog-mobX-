import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import List from '@material-ui/core/List';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import TextField from '@material-ui/core/TextField';
import './Filter.sass';

const styles = {
    appBar: {
        position: 'relative',
    },
    flex: {
        flex: 1,
    },
};

function Transition(props) {
    return <Slide direction="up" {...props} />;
}

@inject('filter', 'infoBeers')
@observer

class Filter extends Component {

    handleChange = name => event => {
        this.props.filter.newValue(name, event.target.value);
    };

    applyFilter = () => {
        this.props.infoBeers.newListBeers(1, this.props.filter.filterForm);
        this.props.filter.closeFilterFormModal();
    }

    render() {
        const { classes } = this.props;
        return (
            <Dialog
                fullScreen
                open={this.props.filter.filterFormModal}
                TransitionComponent={Transition}
            >
                <AppBar >
                    <Toolbar>
                        <IconButton color="inherit" onClick={this.props.filter.closeFilterFormModal} aria-label="Close">
                            <CloseIcon />
                        </IconButton>
                        <Typography variant="h6" color="inherit" className={classes.flex}>
                            Фильтр
                    </Typography>
                        <Button color="inherit" onClick={this.applyFilter}>
                            Применить
                    </Button>
                    </Toolbar>
                </AppBar>
                <List>
                    <div className='filterText'>
                        <TextField
                            id="abv_gt"
                            label="abv_gt"
                            value={this.props.filter.filterForm.abv_gt}
                            onChange={this.handleChange('abv_gt')}
                            margin="normal"
                        />
                        <TextField
                            id="abv_lt"
                            label="abv_lt"
                            value={this.props.filter.filterForm.abv_lt}
                            onChange={this.handleChange('abv_lt')}
                            margin="normal"
                        />
                        <TextField
                            id="ibu_gt"
                            label="ibu_gt"
                            value={this.props.filter.filterForm.ibu_gt}
                            onChange={this.handleChange('ibu_gt')}
                            margin="normal"
                        />
                        <TextField
                            id="ibu_lt"
                            label="ibu_lt"
                            value={this.props.filter.filterForm.ibu_lt}
                            onChange={this.handleChange('ibu_lt')}
                            margin="normal"
                        />
                        <TextField
                            id="ebc_gt"
                            label="ebc_gt"
                            value={this.props.filter.filterForm.ebc_gt}
                            onChange={this.handleChange('ebc_gt')}
                            margin="normal"
                        />
                        <TextField
                            id="ebc_lt"
                            label="ebc_lt"
                            value={this.props.filter.filterForm.ebc_lt}
                            onChange={this.handleChange('ebc_lt')}
                            margin="normal"
                        />
                        <TextField
                            id="beer_name"
                            label="beer_name"
                            value={this.props.filter.filterForm.beer_name}
                            onChange={this.handleChange('beer_name')}
                            margin="normal"
                        />
                        <TextField
                            id="yeast"
                            label="yeast"
                            value={this.props.filter.filterForm.yeast}
                            onChange={this.handleChange('yeast')}
                            margin="normal"
                        />
                        <TextField
                            id="brewed_before"
                            label="brewed_before"
                            value={this.props.filter.filterForm.brewed_before}
                            onChange={this.handleChange('brewed_before')}
                            margin="normal"
                        />
                        <TextField
                            id="brewed_after"
                            label="brewed_after"
                            value={this.props.filter.filterForm.brewed_after}
                            onChange={this.handleChange('brewed_after')}
                            margin="normal"
                        />
                        <TextField
                            id="hops"
                            label="hops"
                            value={this.props.filter.filterForm.hops}
                            onChange={this.handleChange('hops')}
                            margin="normal"
                        />
                        <TextField
                            id="malt"
                            label="malt"
                            value={this.props.filter.filterForm.malt}
                            onChange={this.handleChange('malt')}
                            margin="normal"
                        />
                        <TextField
                            id="food"
                            label="food"
                            value={this.props.filter.filterForm.food}
                            onChange={this.handleChange('food')}
                            margin="normal"
                        />
                    </div>
                </List>
            </Dialog>
        )
    }
}

Filter.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Filter);