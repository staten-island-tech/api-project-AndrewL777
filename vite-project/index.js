const APIURL = "https://valorant-api.com/v1/weapons/skins";

async function getInfo() {
    const response = await fetch(APIURL);
    const Info = await response.json();
    console.log(Info);
    Info.data.forEach((skin)=> document.getElementById("display").insertAdjacentHTML(
        "beforeend",
        `
        <div class="card">
        <h1 class="all">${skin.displayName}</h1>
  <img class src="${skin.displayIcon}" /><img>
 
  </div>
  `));
       
}

getInfo();

// function Rifles() {
// Info.data.filter((skin)=>skin.displayName.includes(Phantom, Vandal).document.getElementById("display").insertAdjacentHTML(
//     "beforeend",
//     `
//     <div class="card">
//     <h1 class="all">${skin.displayName}</h1>
// <img class src="${skin.displayIcon}" /><img>

// </div>
// `));
   
// }

async function Rifles() {
    const response = await fetch(APIURL);
    const Info = await response.json();
    Info.data.filter((skin)=>Info.data.displayName.includes("Phantom","Vandal")).forEach((skin)=> console.log(displayName))
       
    }


Rifles();