import { observable, runInAction, action } from 'mobx';

class InfoBeers {
    @observable progress = false;
    @observable listBeers = [];
    @observable page = 1;
    @observable infoBeer = null;
    @observable infoBeerModal = false

    @action newListBeers = (page, filter = {}) => {
        this.page = page;
        this.progress = true;
        let request = `https://api.punkapi.com/v2/beers?page=${page}`;
        for(let key in filter){
            if(key !== 'open' && filter[key].trim() !== '')
                request += `&${key}=${filter[key].trim()}`
        }
        fetch(request)
        .then(response => response.json())
        .then(data => {
            runInAction(() => {
                this.listBeers = data;
                this.progress = false;
            });
        })
    }

    @action randomBeer = () => {
        this.progress = true;
        fetch('https://api.punkapi.com/v2/beers/random')
        .then(response => response.json())
        .then(data => {
            runInAction(() => {
                this.newBeerInfo(data[0])
                this.progress = false;
            });
    })
    }

    @action newBeerInfo = (info) => {
        this.infoBeer = info;
        this.infoBeerModal = true;
    }

    @action closeInfoBeerModal = () => {
        this.infoBeerModal = false;
    }
}

export default InfoBeers;