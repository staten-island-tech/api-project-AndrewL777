const APIURL = "https://valorant-api.com/v1/weapons/skins";

async function getData() {
    const response = await fetch(APIURL);
    const data = await response.json();
 data.forEach(skin => console.log(data))
  
}

// getData();


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




// fetch("https://valorant-api.com/v1/weapons/skins")
//   .then(res => {return res.json();})
//   .then(data => {console.log(data);})
//   .catch(error => console.log(error));

