const products = [
  { name: "Laptop", price: 55000 },
  { name: "Mobile", price: 20000 },
  { name: "Headphones", price: 3000 },
  { name: "Keyboard", price: 1500 }
];

const productList = document.getElementById("productList");
const sortDropdown = document.getElementById("sortDropdown");

function displayProducts(items) {
  productList.innerHTML = "";
  items.forEach(product => {
    productList.innerHTML += `
      <div class="product">
        <strong>${product.name}</strong><br>
        Price: ₹${product.price}
      </div>
    `;
  });
}

sortDropdown.addEventListener("change", () => {
  let sortedProducts = [...products];

  switch (sortDropdown.value) {
    case "priceLow":
      sortedProducts.sort((a, b) => a.price - b.price);
      break;

    case "priceHigh":
      sortedProducts.sort((a, b) => b.price - a.price);
      break;

    case "nameAZ":
      sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
      break;

    case "nameZA":
      sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
      break;
  }

  displayProducts(sortedProducts);
});

displayProducts(products);
