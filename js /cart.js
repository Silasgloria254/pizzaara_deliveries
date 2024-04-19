let cartItems = [];

const cartIcon = document.getElementById("cart");
console.log(cartIcon);
const cartSection = document.getElementById("section");
console.log(cartSection);

const cartButton = document.querySelectorAll(".btn-black");
console.log(cartButton);
const counter = document.getElementById("counter");
console.log(counter);

cartIcon.addEventListener("click", function () {
  // alert("yeeey")
  console.log(cartSection);
  cartSection.classList.toggle("show__cart");
});

function updateCartItems() {
  const cartProduct = document.createElement("div");
  cartProduct.classList.add("cart__product");
  cartItems.map((pizzaItem) => {
    // console.log(item)
    cartProduct.innerHTML = `
  <img src=${pizzaItem.image} width="100"> 
  <h4>${pizzaItem.name}</h4>
  <p>${pizzaItem.price}</p>
  <button class="btn_decrement">-</button>
  <p>1</p>
  <button class="btn_increment">+</button>
  
  <p class="new__price">${pizzaItem.price}</p>
  
  
  
  
  `;
  cartSection.append(cartProduct);
});

const subtotalContainer = document.createElement("div");
subtotalContainer.innerHTML = `
<div class=subtotals-container>
<p>Total Amount</p>
<p class="subtotals"></p>
</div>`;
cartSection.append(subtotalContainer);
getSubTotals();
updatePrices();
}




for (let i = 0; i < cartButton.length; i++) {
  cartButton[i].addEventListener("click", function (e) {
    // alert ('hello')
    const pizzaname =
      e.target.parentElement.parentElement.children[1].textContent;
    const pizzaprice =
      e.target.parentElement.parentElement.children[3].textContent.replace(
        "ksh.",
        " "
      );
    const pizzaimage =
      e.target.parentElement.parentElement.children[0].children[0].src;
    if (e.target.textContent.toLowerCase() === "add to cart") {
      console.log(e);
      // counter.textContent=Number(counter.textContent)+1;
      let pizzaItem = {
        name: pizzaname,
        price: pizzaprice,
        image: pizzaimage,
      };
      // console.log(pizzaItem.name)
      // console.log(pizzaItem.price)
      // console.log(pizzaItemimage)
      console.log(pizzaItem);
      e.target.textContent = "Remove from cart";
      e.target.style.background = "orange";

      cartItems.push(pizzaItem);
      console.log(cartItems);
      counter.textContent = cartItems.length;
      e.target.textContent = "added to cart";
      updateCartItems();
    } else {
      // counter.textContent=Number(counter.textContent)-1;

      const indexToremove = cartItems.findIndex(
        (item) => item.name === pizzaname
      );
      console.log(indexToremove);
      cartItems.splice(indexToremove, 1);
      counter.textContent = cartItems.length;
      cartSection.innerHTML = "";

      updateCartItems();
      console.log(cartItems);

      e.target.textContent = "add to cart";
      e.target.style.background = "black";
    }
  });
}
cartSection.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn_increment")) {
    console.log("adding items");

    const currentQuantity = e.target.previousElementSibling;
    currentQuantity.textContent++;
    updatePrices();
    getSubTotals();
  } else if (e.target.classList.contains("btn_decrement")) {
    console.log("removing items");
    const currentQuantity = e.target.nextElementSibling;
    // currentQuantity.textContent--;
    if (currentQuantity.textContent > 1) {
      currentQuantity.textContent--;
      updatePrices();
      getSubTotals();
    }
  }
});

function updatePrices() {
  const cartItemProduct = document.querySelectorAll(".cart__product");
  console.log(cartItemProduct);

  for (let i = 0; i < cartItemProduct.length; i++) {
    console.log(cartItemProduct[i]);
    const cartProduct = cartItemProduct[i];
    const itemName = cartProduct.querySelector("h4");
    const itemPrice = parseInt(itemName.nextElementSibling.textContent);
    const itemQuantity = parseInt(
      itemName.nextElementSibling.nextElementSibling.nextElementSibling
        .textContent
    );

    const itemTotal = itemPrice * itemQuantity;

    const totals =
      itemName.nextElementSibling.nextElementSibling.nextElementSibling
        .nextElementSibling.nextElementSibling;
    totals.textContent = itemTotal;
    console.log(itemTotal);


    
  }
}

function getSubTotals() {
  const cartItemPrices = document.querySelectorAll(".new__price");
  const subtotalPrice = document.querySelector(".subtotals")
  let subTotals = 0;
  for (let i = 0; i < cartItemPrices.length; i++) {
    subTotals += parseInt(cartItemPrices[i].textContent);
  }
  subtotalPrice.textContent = subTotals
  console.log(subTotals);
}

 
