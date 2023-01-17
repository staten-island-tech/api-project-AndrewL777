const URL = "https://valorant-api.com/v1/weapons/skins";

// displayIcon is img
// displayName weapon name|

function Allskins() {
  data.forEach((skin) =>
    Dom.men.insertAdjacentHTML(
      "beforeend",
      `
        <div class="card">
        <h1 class="all">${data.displayName}</h1>
  <img class src="${data.displayicon}" /><img>
 
  </div>
  `
    )
  );
}
