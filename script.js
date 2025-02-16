const openShopping = document.querySelector('.shopping');
const closeShopping = document.querySelector('.closeShopping');
const list = document.querySelector('.list');
const listCard = document.querySelector('.listCard');
const total = document.querySelector('.total');
const body = document.querySelector('body');
const quantity = document.querySelector('.quantity');

openShopping.addEventListener("click", () => {
    body.classList.add("active")
})
closeShopping.addEventListener("click", () => {
    body.classList.remove("active")
})

let listCards = [];
let promoCode;

document.getElementById("submit").onclick = function(){
    promoCode = document.getElementById("text").nodeValue;
}

const initApp = () => {
    products.forEach((value, key) => {
        let newDiv = document.createElement("div");
        newDiv.classList.add("item");
        newDiv.innerHTML = `
        <img src = "${value.img}">
        <div class = "title">${value.name}</div>
        <div class = "price">$${value.price.toLocaleString()}</div>
        <div class = "docs">${value.desc}</div>
        <button onclick = "addToCard(${key})">Add To Card</button>
        `
        list.appendChild(newDiv)
    })
}
initApp()

const addToCard = (key) => {
    if(listCards[key] == null) {
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        alert
        listCards[key].quantity = 1;
    }
        renderCard();
}
const renderCard = () => {
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key) => {
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null) {
            let newDiv = document.createElement("li");
            newDiv.innerHTML = `
            <div><img src = "${value.img}"></div>
            <div class = "cardTitle">${value.name}</div>
            <div class = "cardPrice">$${value.price.toLocaleString()}</div>
            <div>
            <button style="background-color: #560bad;" onclick = "changeQuantity(${key}, ${value.quantity - 1})">-</button>
            <div class = "count">${value.quantity}</div>
            <button style="background-color: #560bad;" onclick = "changeQuantity(${key}, ${value.quantity + 1})">+</button>
            </div>
                
            `
            listCard.appendChild(newDiv)
            
        }
        
        
        total.innerText =`$ ${totalPrice.toLocaleString()}`
        quantity.innerText = count;
    })
}  

const changeQuantity = (key, quantity) => {
    if(quantity == 0) {
        delete listCards[key];
    } else {
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    renderCard();   
}  
