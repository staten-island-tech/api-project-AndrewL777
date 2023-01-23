// let URL = "https://valorant-api.com/v1/weapons/skins";

// async function getData(URL) {
//   try {
//     const response = await fetch(URL);
//     const data = await response.json();
//     document.getElementById("api-response").textContent = data.data;
//   } catch (error) {
//     console.log(error);
//   }
// }
// console.log(data);

// displayIcon is img
// displayName weapon name|

// function Allskins() {
//   data.forEach((skin) =>
//     Dom.men.insertAdjacentHTML(
//       "beforeend",
//       `
//         <div class="card">
//         <h1 class="all">${data.displayName}</h1>
//   <img class src="${data.displayicon}" /><img>

//   </div>
//   `
//     )
//   );
// }

fetch("https://valorant-api.com/v1/weapons/skins")
  .then((response) => response.json())
  .then((data) => console.log(data));

let foods = fetch("https://valorant-api.com/v1/weapons/skins")
  .then((response) => response.json())
  .then((data) => console.log(data));

function sort() {
  foods.foreach((skin) => console.log(data.uuid));
}
