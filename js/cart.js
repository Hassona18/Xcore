// Array to store cart items
let cartItems = [];

// Function to add item to cart
function addToCart(product) {
  const existingItem = cartItems.find((item) => item.id === product.id);

  if (existingItem) {
    existingItem.quantity++;
  } else {
    cartItems.push({ ...product, quantity: 1 });
  }

  updateCartDisplay();
}

// Function to remove item from cart
function removeFromCart(id) {
  cartItems = cartItems.filter((item) => item.id !== id);

  updateCartDisplay();
}

// Function to update quantity of item in cart
function updateQuantity(id, newQuantity) {
  const item = cartItems.find((item) => item.id === id);

  if (item) {
    item.quantity = Math.max(1, newQuantity);
  }

  updateCartDisplay();
}

// Function to update the cart display
function updateCartDisplay() {
  const cartItemsContainer = document.getElementById("cart-items");
  cartItemsContainer.innerHTML = "";

  let totalPrice = 0;

  for (const item of cartItems) {
    const row = document.createElement("tr");

    const productCell = document.createElement("td");
    productCell.textContent = item.name;
    row.appendChild(productCell);

    const priceCell = document.createElement("td");
    priceCell.textContent = `$<span class="math-inline">\{item\.price\}\`;
row\.appendChild\(priceCell\);
const quantityCell \= document\.createElement\('td'\);
quantityCell\.innerHTML \= \`<input type\="number" value\="</span>{item.quantity}" onchange="updateQuantity(<span class="math-inline">\{item\.id\}, this\.value\)"\>\`;
row\.appendChild\(quantityCell\);
const subtotalCell \= document\.createElement\('td'\);
const subtotal \= item\.price \* item\.quantity;
subtotalCell\.textContent \= \`</span><span class="math-inline">\{subtotal\}\`;
row\.appendChild\(subtotalCell\);
const removeCell \= document\.createElement\('td'\);
const removeButton \= <3\>document\.createElement\('button'\);
<4\>    removeButton\.textContent \= 'Remove';
removeButton\.addEventListener\('click', \(\) \=\> removeFromCart\(item\.id\)\);</3\>
removeCell\.appendChild\(removeButton\);</4\>
row\.appendChild\(removeCell\);
totalPrice \+\= subtotal;
cartItemsContainer\.appendChild\(row\);
\}
const totalElement \= document\.getElementById\('total\-price'\);
totalElement\.textContent \= \`</span>${totalPrice}`;
  }
}
