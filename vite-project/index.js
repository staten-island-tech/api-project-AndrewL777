const Dom = {
  men: document.getElementById("men"),
  Rifle: document.getElementById("rifle"),
  Side: document.getElementById("side"),
  Machine: document.getElementById("machine"),
  Sub: document.getElementById("sub"),
  Sniper: document.getElementById("sniper"),
  Knives: document.getElementById("knife"),
  all: document.getElementById("all"),
};

const APIURL = "https://valorant-api.com/v1/weapons/skins";

const mendiv = document.querySelector("#men");

document.getElementById("rifle").addEventListener("click", function () {
  mendiv.innerHTML = ``;
  rifleGuns();
});



async function rifleGuns() {
  const response = await fetch(APIURL);
  const Info = await response.json();
  console.log(Info);
  Info.data
    .filter(
      (skin) =>
        skin.assetPath.includes("/Rifles/") &&
        !skin.displayName.includes("Standard") &&
        !skin.displayName.includes("Random")
    )
    .forEach((skin) =>
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

document.getElementById("side").addEventListener("click", function () {
  mendiv.innerHTML = ``;
  sideGuns();
});



async function sideGuns() {
  const response = await fetch(APIURL);
  const Info = await response.json();
  console.log(Info);
  Info.data
    .filter(
      (skin) =>
        skin.assetPath.includes("/Sidearms/") &&
        !skin.displayName.includes("Standard") &&
        !skin.displayName.includes("Random")
    )
    .forEach((skin) =>
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

document.querySelector("#all").addEventListener("click", function () {
  mendiv.innerHTML = "";
  allGuns();
});



async function allGuns() {
  const response = await fetch(APIURL);
  const Info = await response.json();
  console.log(Info);
  Info.data
    .filter(
      (skin) =>
        skin.assetPath.includes("/Content/") &&
        !skin.displayName.includes("Standard") &&
        !skin.displayName.includes("Random")
    )
    .forEach((skin) =>
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

document.querySelector("#sub").addEventListener("click", function () {
  mendiv.innerHTML = "";
  subGuns();
});



async function subGuns() {
  const response = await fetch(APIURL);
  const Info = await response.json();
  console.log(Info);
  Info.data
    .filter(
      (skin) =>
        skin.assetPath.includes("/SubMachineGuns/") &&
        !skin.displayName.includes("Standard") &&
        !skin.displayName.includes("Random")
    )
    .forEach((skin) =>
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

document.querySelector("#sniper").addEventListener("click", function () {
  mendiv.innerHTML = "";

  sniperGuns();
});

async function sniperGuns() {
  const response = await fetch(APIURL);
  const Info = await response.json();
  console.log(Info);
  Info.data
    .filter(
      (skin) =>
        skin.assetPath.includes("/SniperRifles/") &&
        !skin.displayName.includes("Standard") &&
        !skin.displayName.includes("Random")
    )
    .forEach((skin) =>
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

document.querySelector("#machine").addEventListener("click", function () {
  mendiv.innerHTML = "";
  machineGuns();
});



async function machineGuns() {
  const response = await fetch(APIURL);
  const Info = await response.json();
  console.log(Info);
  Info.data
    .filter(
      (skin) =>
        skin.assetPath.includes("/HvyMachineGuns/") &&
        !skin.displayName.includes("Standard") &&
        !skin.displayName.includes("Random")
    )
    .forEach((skin) =>
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

document.querySelector("#knife").addEventListener("click", function () {
  mendiv.innerHTML = "";
  meeleKnives();
});



async function meeleKnives() {
  const response = await fetch(APIURL);
  const Info = await response.json();
  console.log(Info);
  Info.data
    .filter(
      (skin) =>
        skin.assetPath.includes("/Melee/") &&
        !skin.displayName.includes("Standard") &&
        !skin.displayName.includes("Random")
    )
    .forEach((skin) =>
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


async function getInfo() {
  const response = await fetch(APIURL);
  const Info = await response.json();
  console.log(Info);
  Info.data
    .filter(
      (skin) =>
        skin.assetPath.includes("/Content/") &&
        !skin.displayName.includes("Standard") &&
        !skin.displayName.includes("Random")
    )
    .forEach((skin) =>
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
