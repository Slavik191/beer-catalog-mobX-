import { observable, runInAction, action } from 'mobx';

class ListBeers {
    @observable progress = false;
    @observable listBeers = [];

    @action newListBeers = (page, filter = {}) => {
        this.progress = true;
        let request = `https://api.punkapi.com/v2/beers?page=${page}`;
        for(let key in filter){
            if(key !== 'open' && filter[key].trim() !== '')
                request += `&${key}=${filter[key].trim()}`
        }
        fetch(request)
        .then(response => response.json())
        .then(data => {
            this.listBeers = data;
            this.progress = false;
        })
    }
}

export default ListBeers;