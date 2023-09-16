var item_container = document.getElementById("cart-container");
let localstorage = JSON.parse(window.localStorage.getItem("item-detail"));
// console.log(item_container);
for (var j = 0; j < localstorage.length; j++) {
  //   console.log(localstorage[j].title);
  const div = document.createElement("div");
  div.classList.add("cart-items");
  div.innerHTML = `
  

  <div class="image-box" id="image-box${j}">
      <img src="${localstorage[j].image}">
  </div>
  <div class="About" id="about${j}">
      <h1 class="title" id="item-title${j}">${localstorage[j].title}</h1>
      <h3 class="subtitle">250ml</h3>
      <img src="veg-removebg-preview.png">
  </div>
  <div class="counter">
      <button class="btn" type="button" id="btn+${j}" onclick="add(event)">+</button>
      <div class="count" id ="count${j}">1</div>
      <button class="btn" type="button" id="btn-${j}" onclick="less(event)">-</button>
  </div>
  <div class="prices">
      <div class="amount" id="price${j}">${localstorage[j].price}</div>
      <div class="save" id="save${j}">Save for leter</div>
      <div class="remove" id="remove${j}">remove</div>
  </div>
`;

  item_container.append(div);
}

function add(e) {
  const idNum = e.target.id.charAt(e.target.id.length - 1);
  console.log(idNum)
  // var price = document.getElementById(`count${idNum}`).innerText;
  
  document.getElementById(`count${idNum}`).innerText =
    parseInt(document.getElementById(`count${idNum}`).innerText) + 1;
  document.getElementById(`price${idNum}`).innerText =
    parseInt(document.getElementById(`count${idNum}`).innerText) *
    localstorage[idNum].price;
   
}

function less(e) {
  const idNum = e.target.id.charAt(e.target.id.length - 1);
      // console.log(idNum);
  
  document.getElementById(`count${idNum}`).innerText =
    parseInt(document.getElementById(`count${idNum}`).innerText) - 1;
  document.getElementById(`price${idNum}`).innerText =
    document.getElementById(`price${idNum}`).innerText -
    localstorage[idNum].price;
    if(document.getElementById(`count${idNum}`).innerText = 0){
      document.getElementById(`btn-${idNum}`).disabled = true;
    }
    else if( document.getElementById(`price${idNum}`).innerText = 0){
      document.getElementById(`price${idNum}`).disabled = true;
      
     // const title = document.getElementById(`item-title${idNum}`).innerHTML;
      
      
    }
}

