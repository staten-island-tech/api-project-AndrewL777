const Dom = {
  men: document.getElementById("men"),
  veg: document.getElementById("veg"),


  // Rifle: document.getElementById("rifle"),
  // Side: document.getElementById("side"),
  // Machine: document.getElementById("machine"),
  // Sub: document.getElementById("sub"),
  // all: document.getElementById("all"),
};

const APIURL = "https://valorant-api.com/v1/weapons/skins";



const mendiv = document.querySelector("#men");


document.getElementById("veg").addEventListener("click", function () {
  mendiv.innerHTML = ``;
});


Dom.veg.addEventListener("click", function () {
  Vegans();
});

async function Vegans() {
  const response = await fetch(APIURL);
  const Info = await response.json();
  console.log(Info);
  Info.data
    .filter((skin) => skin.assetPath.includes("/Rifles/") && !skin.displayName.includes("Standard") && !skin.displayName.includes("Random") ).forEach((skin)=>
    document.getElementById("men").insertAdjacentHTML(
      "beforeend",
      `
        <div class="card">
        <h2 class="all">${skin.displayName}</h2>
  <img class = "images" src="${skin.displayIcon}"  alt = "Image of ${skin.displayName}"  >
 
  </div>
  `
    )
  );
}



// document.querySelector("#rifle").addEventListener("click", function () {
//   displaydiv.innerHTML = "";
//   rifleGuns();
// });

// document.getElementById("side").addEventListener("click", function () {
//   displaydiv.innerHTML = "";
// });

// document.querySelector("#all").addEventListener("click", function () {
//   displaydiv.innerHTML = "";
// });



// document.querySelector("#sub").addEventListener("click", function () {
//   displaydiv.innerHTML = "";
// });

// document.querySelector("#sniper").addEventListener("click", function () {
//   displaydiv.innerHTML = "";
// });
// document.querySelector("#machine").addEventListener("click", function () {
//   displaydiv.innerHTML = "";
// });

// Dom.Machine.addEventListener("click", function () {
//   machineGuns();
// });

// Dom.Sniper.addEventListener("click", function () {
//   sniperGuns();
// });

// Dom.all.addEventListener("click", function () {
//   allGuns();
// });

// Dom.Sub.addEventListener("click", function () {
//   subGuns();
// });

// Dom.Rifle.addEventListener("click", function () {
//   rifleGuns();
// });

// Dom.Side.addEventListener("click", function () {
//   sideGuns();
// });



// Rifles();

// Info.data
//     .filter((skin) => skin.assetPath.includes("/Content/") && !skin.displayName.includes("Standard") && !skin.displayName.includes("Random") )

// async function Vegans() {
//   const response = await fetch(APIURL);
//   const Info = await response.json();
//   console.log(Info);
//   Info.data
//     .filter((skin) => skin.assetPath.includes("/Rifles/") && !skin.displayName.includes("Standard") && !skin.displayName.includes("Random") ).forEach((skin)=>
//     document.getElementById("display").insertAdjacentHTML(
//       "beforeend",
//       `
//         <div class="card">
//         <h2 class="all">${skin.displayName}</h2>
//   <img class = "images" src="${skin.displayIcon}"  alt = "Image of ${skin.displayName}"  >
 
//   </div>
//   `
//     )
//   );
// }




async function getInfo() {
  const response = await fetch(APIURL);
  const Info = await response.json();
  console.log(Info);
  Info.data
    .filter((skin) => skin.assetPath.includes("/Content/") && !skin.displayName.includes("Standard") && !skin.displayName.includes("Random") ).forEach((skin)=>
    document.getElementById("men").insertAdjacentHTML(
      "beforeend",
      `
        <div class="card">
        <h2 class="all">${skin.displayName}</h2>
  <img class = "images" src="${skin.displayIcon}"  alt = "Image of ${skin.displayName}"  >
 
  </div>
  `
    )
  );
}

getInfo();