"use strict";
const showCategories = () => {
  const parent = document.querySelector(".categories");
  if (!parent) {
    return;
  }

  const categoriesList = document.createElement("ul");
  categoriesList.addEventListener("click", (event) => {
    if (event.target && event.target.tagName === "LI") {
      const categoryId = event.target.getAttribute("data-category");
      // const category = getCategoryById(categoryId);
      const category = categories[categoryId];
      if (!category) {
        return;
      }
      // console.log(category);
      showProductsByCategory(category);
    }
  });

  Object.values(categories).forEach((category) => {
    const element = document.createElement("li");
    element.textContent = category.name;
    element.setAttribute("data-category", category.id);

    // element.addEventListener('click', () => {
    //   console.log(category);
    // });

    categoriesList.appendChild(element);
  });

  parent.appendChild(categoriesList);
};

// const getCategoryById = id => categories.find(category => category.id == id);

const showProductsByCategory = (category) => {
  // const { products } = category; те саме, що і нижче
  const products = category.products;
  const parent = document.querySelector(".products");
  if (!parent) {
    return;
  }

  parent.innerHTML = "";

  const productsList = document.createElement("ul");

  productsList.addEventListener("click", (event) => {
    if (event.target && event.target.tagName === "LI") {
      // console.log(event.target);
      // const categoryId = category.id
      const productId = event.target.getAttribute("data-product");
      const product = category.products.find((p) => p.id == productId);
      if (!product) return;
      showProductInfo(product);
    }
  });

  products.forEach((product) => {
    const element = document.createElement("li");
    element.textContent = `${product.name} - $${product.price}`;
    element.setAttribute("data-product", product.id);
    element.setAttribute("data-category", category.id);
    // element.addEventListener('click', () => {
    //   console.log(product);
    // })
    productsList.appendChild(element);
  });

  parent.appendChild(productsList);
};


const showProductInfo = (product) => {
  const infoBlock = document.querySelector(".info");
  if (!infoBlock) return;

  infoBlock.innerHTML = `
    <h2>${product.name}</h2>
    <p>${product.description}</p>
    <p><strong>Price:</strong> $${product.price}</p>
  `;

  const buyBtn = document.createElement("button");
  buyBtn.textContent = "Придбати";
  buyBtn.addEventListener("click", () => {
    showOrderDetails(product);
  });

  infoBlock.appendChild(buyBtn);
};


const showOrderDetails = (product) => {
  const orderDetails = document.querySelector(".order-details");
  if (!orderDetails) return;

  orderDetails.innerHTML = `
    <p>✅ Ви успішно придбали: <strong>${product.name}</strong> за $${product.price}</p>
  `;
};
showCategories();
