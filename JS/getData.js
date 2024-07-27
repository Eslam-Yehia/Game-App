import { DisplayGames } from "./game.module.js";
import { GameDetails } from "./details.module.js";

export class GetData {
  constructor() {
    this.displayGames = new DisplayGames();
    this.displayDetails = new GameDetails();
  }
  options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "4f4ca72e67mshc9a67d8414fb384p17b555jsn841af93c0f38",
      "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
    },
  };

  async getGames(term) {
    document.querySelector(".loading").classList.remove("d-none");
    let response = await fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${term}`,
      this.options
    );
    let gameData = await response.json();
    this.displayGames.displayGames(gameData);
    document.querySelector(".loading").classList.add("d-none");
  }
  async getDetails(term) {
    document.querySelector(".loading").classList.remove("d-none");
    let response = await fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${term}`,
      this.options
    );
    let gameDetails = await response.json();
    this.displayDetails.displayDetails(gameDetails);
    document.querySelector(".loading").classList.add("d-none");
  }
}
