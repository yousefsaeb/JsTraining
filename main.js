document.addEventListener("DOMContentLoaded", function () {
  let btn = document.getElementById("btn");
  let title = document.querySelector(".title");
  let price = document.querySelector(".price");
  let cartElement = document.querySelector(".cart");

  let cartProducts = JSON.parse(localStorage.getItem("cartItem")) || [];

  function displayCartItems() {
    cartElement.innerHTML = ""; // Clear the cart

    // Iterate through the saved items and create HTML elements
    for (let item of cartProducts) {
      let liElement = document.createElement("li");
      liElement.innerHTML = `<h3>Title is: ${item.title}</h3>
      <span>Price is ${item.price}</span>`;
      cartElement.appendChild(liElement);
    }
  }

  btn.onclick = function () {
    let liElement = document.createElement("li");
    liElement.innerHTML = `<h3>Title is: ${title.textContent}</h3>
    <span>Price is ${price.textContent}`;

    cartElement.append(liElement);
    cartProducts.push({
      title: title.textContent,
      price: price.textContent,
    });
    localStorage.setItem("cartItem", JSON.stringify(cartProducts));
  };
  displayCartItems();
});
