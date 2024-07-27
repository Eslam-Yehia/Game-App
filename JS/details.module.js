export class GameDetails {
  displayDetails(detailsData) {
    let detailsContainer = document.getElementById("detailsContainer");
    let homeContainer = document.querySelector(".home");
    let closeBtn = document.getElementById("closeBtn");
    let gameImg = document.getElementById("gameImg");
    let gameTitle = document.getElementById("gameTitle");
    let GameCategory = document.getElementById("GameCategory");
    let GamePlatform = document.getElementById("GamePlatform");
    let GameStatus = document.getElementById("GameStatus");
    let gameDesc = document.getElementById("gameDesc");
    let gameBtn = document.getElementById("gameBtn");
    detailsContainer.classList.remove("d-none");
    homeContainer.classList.add("d-none");
    closeBtn.addEventListener("click", function () {
      detailsContainer.classList.add("d-none");
      homeContainer.classList.remove("d-none");
    });
    gameImg.setAttribute("src", `${detailsData.thumbnail}`);
    gameTitle.innerHTML = detailsData.title;
    GameCategory.innerHTML = detailsData.genre;
    GamePlatform.innerHTML = detailsData.platform;
    GameStatus.innerHTML = detailsData.status;
    gameDesc.innerHTML = detailsData.description;
    gameBtn.setAttribute("href", detailsData.game_url);
  }
}
