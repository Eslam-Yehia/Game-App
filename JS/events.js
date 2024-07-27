import { GetData } from "./getData.js";

export class events {
  constructor() {
    this.steps();
  }

  async steps() {
    this.getData = new GetData();
    await this.getData.getGames("mmorpg");

    this.navEvent();
    this.detailEvent();
  }
  detailEvent() {
    let card = document.querySelectorAll(".card-container");
    card.forEach((item) => {
      item.addEventListener("click", () => {
        const id = item.dataset.id;
        this.showDetails(id);
      });
    });
  }
  navEvent() {
    let navLink = document.querySelectorAll(".nav-link");
    navLink.forEach((link) => {
      link.addEventListener("click", (e) => {
        document.querySelector(".nav-item .active").classList.remove("active");
        e.target.classList.add("active");
        this.getData.getGames(e.target.dataset.category);
      });
    });
  }

  showDetails(idGame) {
    this.getData.getDetails(idGame);
  }
}
