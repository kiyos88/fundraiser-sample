import {action, observable} from 'mobx';

export default class Store {

    @observable medaId = 0;

    @action setMedaID(medaId) {
        this.medaId = medaId
    }
}