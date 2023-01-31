const Dom = {
  display: document.getElementById("display"),
  Rifle: document.getElementById("Rifle"),
  Side: document.getElementById("Side"),
  Machine: document.getElementById("Machine"),
  Sub: document.getElementById("Sub"),
  all: document.getElementById("all"),
};

const APIURL = "https://valorant-api.com/v1/weapons/skins";

async function getInfo() {
  const response = await fetch(APIURL);
  const Info = await response.json();
  console.log(Info);
  Info.data.forEach((skin) =>
    document.getElementById("display").insertAdjacentHTML(
      "beforeend",
      `
        <div class="card">
        <h1 class="all">${skin.displayName}</h1>
  <img class src="${skin.displayIcon}" /><img>
 
  </div>
  `
    )
  );
}

getInfo();

const displaydiv = document.querySelector("#display");

document.querySelector("#Side").addEventListener("click", function () {
  mendiv.innerHTML = "";
});

document.querySelector("#all").addEventListener("click", function () {
  mendiv.innerHTML = "";
});

document.querySelector("#Rifle").addEventListener("click", function () {
  mendiv.innerHTML = "";
});

document.querySelector("#Sub").addEventListener("click", function () {
  mendiv.innerHTML = "";
});

document.querySelector("#Sniper").addEventListener("click", function () {
  mendiv.innerHTML = "";
});
document.querySelector("#Machine").addEventListener("click", function () {
  mendiv.innerHTML = "";
});

Dom.Machine.addEventListener("click", function () {
  machineGuns();
});

Dom.Sniper.addEventListener("click", function () {
  sniperGuns();
});

Dom.all.addEventListener("click", function () {
  allGuns();
});

Dom.Sub.addEventListener("click", function () {
  subGuns();
});

Dom.Rifle.addEventListener("click", function () {
  rifleGuns();
});

Dom.Side.addEventListener("click", function () {
  sideGuns();
});

async function Rifles() {
  const response = await fetch(APIURL);
  const Info = await response.json();
  console.log(Info.data);
  Info.data
    .filter((skin) => skin.assetPath.includes("/Rifles/"))
    .forEach((skin) => console.log(skin.displayName));
}

Rifles();
