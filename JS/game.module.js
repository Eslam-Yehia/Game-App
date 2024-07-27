export class DisplayGames {
  displayGames(gameData) {
    let cardsContainer = document.querySelector(".cards-container");
    cardsContainer.innerHTML = ``;
    let container = ``;
    for (let i = 0; i < gameData.length; i++) {
      cardsContainer.innerHTML += container;
      container = `<div class="col-md-6 col-lg-4">
            <div class="card-container d-flex flex-column cursor-pointer" data-id="${
              gameData[i].id
            }">
              <div
                class="card-inner p-3 border-1 border border-dark rounded-2 rounded-bottom-0 overflow-hidden"
              >
                <img
                  class="w-100 rounded-top-2"
                  src=${gameData[i].thumbnail}
                  alt=""
                />
                <div class="card-content">
                  <div
                    class="py-2 d-flex justify-content-between align-items-center"
                  >
                    <h4 class="mb-0 h5">${gameData[i].title}</h4>
                    <span class="badge text-bg-primary p-2 small">free</span>
                  </div>
                  <p class="text-center gray-color fw-semibold">
                  ${gameData[i].short_description.split(" ", 8).join(" ")}
                  </p>
                </div>
              </div>
              <div
                class="d-flex justify-content-between align-items-center border-dark border-top-0 border border-1 rounded-2 rounded-top-0 px-3 py-1"
              >
                <span class="badge dark-bg-color p-1" >${
                  gameData[i].genre
                }</span>
                <span class="badge dark-bg-color p-1" >${
                  gameData[i].platform
                }</span>
              </div>
            </div>
          </div>`;
    }
  }
}
