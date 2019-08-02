import {observable, computed, decorate, action} from 'mobx'
import data from './data'

export class Bayans {
    allBayans = data
    sunday = this.allBayans.filter(item => item.category === 'sunday')
    afterJuma = this.allBayans.filter(item => item.category === 'after juma')
    beforeJuma = this.allBayans.filter(item => item.category === 'before juma')
    misc = this.allBayans.filter(item => item.category === 'miscellaneous')
    oldBayans = this.allBayans.filter(item => item.category === 'old bayans')
    currentPage = 1
    itemsPerPage = 15
    searchTerm = ""

    // get recentBayans() {
    //     let recentSunday = this.sunday.slice(0, 1)
    //     let recentAfterfriday = this.afterJuma.slice(0, 1)
    //     let recentBeforefriday = this.beforeJuma.slice(0, 1)
    //     let recentOldBayan = this.oldBayans.slice(0, 1)
    //     let recent = recentSunday.concat(recentAfterfriday, recentBeforefriday, recentOldBayan)
    //     return recent
    // }

    get recentSunday() {
        let recent = this.sunday.slice(0, 4)
        return recent
    }

    get recentJuma() {
        let recent = this.beforeJuma.slice(0, 4)
        return recent
    }

    get recentAfterJuma() {
        let recent = this.afterJuma.slice(0, 4)
        return recent
    }

    fetchBayans = (page) => {
        let indexOfLastBayan = this.currentPage * this.itemsPerPage;
        let indexOfFirstBayan = indexOfLastBayan - this.itemsPerPage;
        return page.slice(indexOfFirstBayan, indexOfLastBayan);
    }

    filterBayans = (bayan) => {
        return bayan.slice().filter(item => (
            item.name.toLowerCase().indexOf(this.searchTerm.toLowerCase()) !== -1 || !this.searchTerm
        ))
    }

    handleSearch = (e) => {
        this.searchTerm = e.target.value
    }
}

decorate(Bayans, {
    allBayans: observable,
    sunday: observable,
    afterJuma: observable,
    beforeJuma: observable,
    misc: observable,
    oldBayans: observable,
    // recentBayans: computed,
    currentPage: observable,
    itemsPerPage: observable,
    fetchBayans: action,
    filterBayans: action,
    handleSearch: action,
    searchTerm: observable,
    recentSunday: computed,
    recentJuma: computed,
    recentAfterJuma: computed
})

export default new Bayans()