// // Array to store cart items
// let cartItems = [];

// // Function to add item to cart
// function addToCart(product) {
//   const existingItem = cartItems.find((item) => item.id === product.id);

//   if (existingItem) {
//     existingItem.quantity++;
//   } else {
//     cartItems.push({ ...product, quantity: 1 });
//   }

//   updateCartDisplay();
// }

// // Function to remove item from cart
// function removeFromCart(id) {
//   cartItems = cartItems.filter((item) => item.id !== id);

//   updateCartDisplay();
// }

// // Function to update quantity of item in cart
// function updateQuantity(id, newQuantity) {
//   const item = cartItems.find((item) => item.id === id);

//   if (item) {
//     item.quantity = Math.max(1, newQuantity);
//   }

//   updateCartDisplay();
// }

// // Function to update the cart display
// function updateCartDisplay() {
//   const cartItemsContainer = document.getElementById("cart-items");
//   cartItemsContainer.innerHTML = "";

//   let totalPrice = 0;

//   for (const item of cartItems) {
//     const row = document.createElement("tr");

//     const productCell = document.createElement("td");
//     productCell.textContent = item.name;
//     row.appendChild(productCell);

//     const priceCell = document.createElement("td");
//     priceCell.textContent = `$<span class="math-inline">\{item\.price\}\`;
// row\.appendChild\(priceCell\);
// const quantityCell \= document\.createElement\('td'\);
// quantityCell\.innerHTML \= \`<input type\="number" value\="</span>{item.quantity}" onchange="updateQuantity(<span class="math-inline">\{item\.id\}, this\.value\)"\>\`;
// row\.appendChild\(quantityCell\);
// const subtotalCell \= document\.createElement\('td'\);
// const subtotal \= item\.price \* item\.quantity;
// subtotalCell\.textContent \= \`</span><span class="math-inline">\{subtotal\}\`;
// row\.appendChild\(subtotalCell\);
// const removeCell \= document\.createElement\('td'\);
// const removeButton \= <3\>document\.createElement\('button'\);
// <4\>    removeButton\.textContent \= 'Remove';
// removeButton\.addEventListener\('click', \(\) \=\> removeFromCart\(item\.id\)\);</3\>
// removeCell\.appendChild\(removeButton\);</4\>
// row\.appendChild\(removeCell\);
// totalPrice \+\= subtotal;
// cartItemsContainer\.appendChild\(row\);
// \}
// const totalElement \= document\.getElementById\('total\-price'\);
// totalElement\.textContent \= \`</span>${totalPrice}`;
//   }
// }

let cartItems = [
  { product: "ROG 15    ", price: 15000, quantity: 1 },
  { product: "Air Puds  ", price: 600, quantity: 2 },
  { product: "Case      ", price: 30, quantity: 3 },
  { product: "Product 4 ", price: 10, quantity: 2 },
  { product: "Product 5 ", price: 20, quantity: 5 },
];

let totalPrice = 0;

function displayCartItems() {
  let tbody = document.getElementById("cart-items");
  tbody.innerHTML = "";

  cartItems.forEach((item, index) => {
    let tr = document.createElement("tr");
    let tdProduct = document.createElement("td");
    let tdPrice = document.createElement("td");
    let tdQuantity = document.createElement("td");
    let tdSubtotal = document.createElement("td");
    let tdRemove = document.createElement("td");

    tdProduct.textContent = item.product;
    tdPrice.textContent = "$" + item.price;
    tdQuantity.textContent = item.quantity;
    tdSubtotal.textContent = "$" + item.price * item.quantity;

    let removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", () => {
      cartItems.splice(index, 1);
      displayCartItems();
    });

    tdRemove.appendChild(removeButton);

    tr.appendChild(tdProduct);
    tr.appendChild(tdPrice);
    tr.appendChild(tdQuantity);
    tr.appendChild(tdSubtotal);
    tr.appendChild(tdRemove);

    tbody.appendChild(tr);
  });

  calculateTotalPrice();
}

function calculateTotalPrice() {
  totalPrice = cartItems.reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0);

  document.getElementById("total-price").textContent = totalPrice;
}

displayCartItems();
// Handle the radio button selection
const paymentMethodInput = document.querySelectorAll("[name='payment-method']");

paymentMethodInput.forEach((input) => {
  input.addEventListener("change", () => {
    // Update UI or submit form based on selected payment method
    const selectedMethod = input.value;
  });
  // });
  // const cashRadio = document.getElementById('payment-cash');
  // const visaRadio = document.getElementById('payment-visa');
  // const checkoutButton = document.getElementById('checkout-button');
  // function handlePaymentMethodClick(radio) {
  //    const selectedMethod = radio.value;
  //    if (selectedMethod === "cash") {
  //      window.location.href = "checkout_cash.html";
  //    } else if (selectedMethod === "visa") {
  //      window.location.href = "checkout.html"; // Update to your specific checkout page URL
  //    }
  // }
});
