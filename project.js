 
var shoppingCart = [];
var totalPrice = 0;

function addToCart(product, price) {
  var item = {
    name: product,
    price: price,
  };
  
  shoppingCart.push(item);
  totalPrice += price;

  updateCartDisplay();
}

function updateCartDisplay() {
  var cartItemsElement = document.getElementById("cart-items");
  var totalPriceElement = document.getElementById("total-price");

  cartItemsElement.innerHTML = "";

  for (var i = 0; i < shoppingCart.length; i++) {
    var item = shoppingCart[i];
    var listItem = document.createElement("li");
    listItem.textContent = item.name + "  $" + item.price;
    cartItemsElement.appendChild(listItem);
  }

  totalPriceElement.textContent = "Total Price: $" + totalPrice;
}

function removeFromCart(product, price) {
  var item = {
    name: product,
    price: price,
  };

  var index = -1;

  for (var i = 0; i < shoppingCart.length; i++) {
    if (
      shoppingCart[i].name === item.name &&
      shoppingCart[i].price === item.price
    ) {
      index = i;
      break;
    }
  }

  if (index > -1) {
    shoppingCart.splice(index, 1);
    totalPrice -= price;
    updateCartDisplay();
  }
}

function removeAllItems() {
  // Set the cart array to an empty array
  shoppingCart = [];
  totalPrice = 0;
  updateCartDisplay();
}
