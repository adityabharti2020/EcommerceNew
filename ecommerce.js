const selectContainer = document.getElementById("service-container");
var searchbox = document.querySelector("#input-search-box");
// console.log(searchbox);
let container = [
    {
        title: "Himalaya Sampoo",
        price: 500,
        image: "himalaya.jpg",
        description: "Lorem ipsum, dolor sit amet.",
        actionBtn: "cart.html",
    },
    
    {
        title: "Poco X3 Pro",
        price: 500,
        image: "specs-01.png",
        description: "Lorem ipsum, dolor sit amet",
        actionBtn: "cart.html",
    },
    
    {
        title: "T-shirt",
        price: 500,
        image: "t-shirt.jpg",
        description: "Lorem ipsum, dolor sit amet.",
        actionBtn: "cart.html",
    },
    
    {
        title: "Sparx Shoe",
        price: 500,
        image: "sparkx.jpg",
        description: "Lorem ipsum, dolor sit amet.",
        actionBtn: "cart.html",
    },
    
    {
        title: "Head Phone",
        price: 500,
        image: "headphones.jpg",
        description: "Lorem ipsum, dolor sit amet.",
        actionBtn: "cart.html",
    },
    
    {
        title: "Cartoon Book",
        price: 500,
        image: "cartoon.jpg",
        description: "Lorem ipsum, dolor sit amet.",
        actionBtn: "cart.html",
    },
];
// console.log(container[0].title);
window.localStorage.setItem("item-detail",JSON.stringify(container));
// var localstorage = JSON.parse(window.localStorage.getItem("item-detail"));
// console.log(item_container);

searchbox.addEventListener("input", (e) => {
    let containe;
    if (e.target.value === "") {
        containe = container;
    } else {
        containe = container.filter((item) => {
            return item.title.toLowerCase().includes(e.target.value.toLowerCase());
        });
    }
    // console.log(containe);
    const div = document.createElement("div");
    for (let i = 0; i <= containe.length - 1; i++) {
        var serviceBox = document.createElement("div");
        serviceBox.id = "service-box";
        serviceBox.classList.add("service-box");
        serviceBox.innerHTML = `<div class="sevice-image" id="sevice-image">
        <img src="${containe[i].image}" id="image">
        </div>
        <div class="service-title" id="service-title">
        <h3 id="service-heading">${containe[i].title}</h3>
        </div>
        <div class="price-title" id="price-title">
        <h3 id="price-heading">${container[i].price}</h3>
        </div>
        <div class="service-description" id="service-description">
        <p id="description-para">${containe[i].description}</p>
        </div>
        <div class="call-to-action" id="call-to-action">
        <a href="${containe[i].actionBtn}" id="action-btn">Add to cart</a>
        </div>
        `;
        div.appendChild(serviceBox);
    }
    selectContainer.innerHTML = "";
    selectContainer.appendChild(div);
    console.log(selectContainer);
});

const div = document.createElement("div");
for (let i = 0; i <= container.length - 1; i++) {
    
    var serviceBox = document.createElement("div");
    serviceBox.id = "service-box";
    serviceBox.classList.add("service-box");
    serviceBox.innerHTML = `<div class="sevice-image" id="sevice-image">
    <img src="${container[i].image}" id="image">
    </div>
    <div class="service-title" id="service-title">
    <h3 id="service-heading">${container[i].title}</h3>
    </div>
    <div class="price-title" id="price-title">
    <h3 id="price-heading">Price:${container[i].price}</h3>
    </div>
    <div class="service-description" id="service-description">
    <p id="description-para">${container[i].description}</p>
    </div>
    <div class="call-to-action" id="call-to-action">
    <a href="${container[i].actionBtn}" id="action-btn" onclick = cart()>Add to cart</a>
    </div>
    `;
    div.appendChild(serviceBox);
}
selectContainer.innerHTML = "";
selectContainer.appendChild(div);


   let cartbtn = document.getElementById("action-btn").addEventListener('click', cart);
    function cart(){
       console.log(localstorage);  
    }
