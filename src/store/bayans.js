import {
  observable,
  decorate,
  action
} from "mobx";
import data from "./data";

export class Bayans {
  allBayans = data;
  sunday = this.allBayans.filter(item => item.category === "sunday");
  afterJuma = this.allBayans.filter(item => item.category === "after juma");
  beforeJuma = this.allBayans.filter(item => item.category === "before juma");
  misc = this.allBayans.filter(item => item.category === "miscellaneous");
  currentPage = 1;
  itemsPerPage = 15;
  searchTerm = "";
  lang = "eng";

  fetchBayans = page => {
    let indexOfLastBayan = this.currentPage * this.itemsPerPage;
    let indexOfFirstBayan = indexOfLastBayan - this.itemsPerPage;
    return page.slice(indexOfFirstBayan, indexOfLastBayan);
  };

  filterBayans = bayan => {
    return bayan
      .slice()
      .filter(
        item =>
        item.name.toLowerCase().indexOf(this.searchTerm.toLowerCase()) !==
        -1 || !this.searchTerm
      );
  };

  handleSearch = e => {
    this.searchTerm = e.target.value;
  };
}

decorate(
  Bayans, {
    allBayans: observable,
    sunday: observable,
    afterJuma: observable,
    beforeJuma: observable,
    misc: observable,
    oldBayans: observable,
    currentPage: observable,
    itemsPerPage: observable,
    lang: observable,
    searchTerm: observable,
    fetchBayans: action,
    filterBayans: action,
    handleSearch: action,
  });

export default new Bayans();