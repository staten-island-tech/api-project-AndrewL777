let url = "https://valorant-api.com/v1/weapons/skins";

async function getData(URL) {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    document.getElementById("api-response").textContent = data.data;
  } catch (error) {
    console.log(error);
  }
}
console.log(data);

// let response = await fetch(url);
// if (response.ok) {
//   let json = await response.json();
// } else {
//   alert("HTTP-Error: " + response.status);
// }

console.log(data.displayName);

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
