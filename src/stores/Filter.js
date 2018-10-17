import { observable, action } from 'mobx';

class Filter {
    @observable filterForm = {
        abv_gt: '',
        abv_lt: '',
        ibu_gt: '',
        ibu_lt: '',
        ebc_gt: '',
        ebc_lt: '',
        beer_name: '',
        yeast: '',
        brewed_before: '',
        brewed_after: '',
        hops: '',
        malt: '',
        food: '',
    };
    @observable filterFormModal = false;

    @action newValue = (name, value) => {
        this.filterForm[name] = value;
    }

    @action closeFilterFormModal = () => {
        this.filterFormModal = false;
    }  

    @action openFilterFormModal = () => {
        this.filterFormModal = true;
    }

    
}

export default Filter;