"use strict";

const showCategories = () => {
  const parent = document.querySelector(".categories");
  if (!parent) return;

  const categoriesList = document.createElement("ul");
  categoriesList.addEventListener("click", (event) => {
    if (event.target && event.target.tagName === "LI") {
      const categoryId = event.target.getAttribute("data-category");
      const category = categories[categoryId];
      if (!category) return;
      showProductsByCategory(category);
    }
  });

  Object.values(categories).forEach((category) => {
    const element = document.createElement("li");
    element.textContent = category.name;
    element.setAttribute("data-category", category.id);
    categoriesList.appendChild(element);
  });

  parent.appendChild(categoriesList);
};

const showProductsByCategory = (category) => {
  const products = category.products;
  const parent = document.querySelector(".products");
  if (!parent) return;

  parent.innerHTML = "";
  const productsList = document.createElement("ul");

  productsList.addEventListener("click", (event) => {
    if (event.target && event.target.tagName === "LI") {
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
    productsList.appendChild(element);
  });

  parent.appendChild(productsList);
};

// Show product info
const showProductInfo = (product) => {
  const infoBlock = document.querySelector(".info");
  if (!infoBlock) return;

  infoBlock.innerHTML = `
    <h2>${product.name}</h2>
    <p>${product.description}</p>
    <p><strong>Price:</strong> $${product.price}</p>
  `;

  const buyBtn = document.createElement("button");
  buyBtn.textContent = "Buy";
  buyBtn.addEventListener("click", () => {
    showOrderForm(product);
  });

  infoBlock.appendChild(buyBtn);
};

// Order form
const showOrderForm = (product) => {
  const orderDetails = document.querySelector(".order-details");
  if (!orderDetails) return;

  orderDetails.innerHTML = `
    <h3>Order</h3>
    <form id="orderForm">
      <label>Full Name: <input type="text" name="fullname" required></label><br>
      <label>City:
        <select name="city" required>
          <option value="">Select city</option>
          <option value="Kyiv">Kyiv</option>
          <option value="Lviv">Lviv</option>
          <option value="Odesa">Odesa</option>
          <option value="Dnipro">Dnipro</option>
          <option value="Kharkiv">Kharkiv</option>
        </select>
      </label><br>
      <label>Nova Poshta Warehouse: <input type="number" name="warehouse" min="1" max="200" required></label><br>
      <label>Payment:
        <select name="payment" required>
          <option value="">Select payment method</option>
          <option value="Cash on delivery">Cash on delivery</option>
          <option value="Bank transfer">Bank transfer</option>
        </select>
      </label><br>
      <label>Quantity: <input type="number" name="quantity" min="1" value="1" required></label><br>
      <label>Comment: <textarea name="comment"></textarea></label><br>
      <button type="submit">Confirm Order</button>
    </form>
    <div class="error-message" style="color:red;"></div>
  `;

  const form = document.getElementById("orderForm");
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = new FormData(form);
    const fullname = data.get("fullname").trim();
    const city = data.get("city");
    const warehouse = parseInt(data.get("warehouse"));
    const payment = data.get("payment");
    const quantity = parseInt(data.get("quantity"));
    const comment = data.get("comment").trim();

    const errorDiv = orderDetails.querySelector(".error-message");
    errorDiv.textContent = "";

    if (!fullname || !city || !warehouse || !payment || quantity < 1) {
      errorDiv.textContent = "Please fill in all fields correctly.";
      return;
    }

    const newOrder = {
      id: Date.now(),
      date: new Date().toLocaleDateString(),
      name: product.name,
      price: product.price,
      quantity: quantity,
      total: product.price * quantity,
    };

    const orders = JSON.parse(localStorage.getItem("orders")) || [];
    orders.push(newOrder);
    localStorage.setItem("orders", JSON.stringify(orders));

    // Confirmation
    orderDetails.innerHTML = `
      <h3>Order Confirmed!</h3>
      <p><strong>Date:</strong> ${newOrder.date}</p>
      <p><strong>Product:</strong> ${newOrder.name}</p>
      <p><strong>Price:</strong> $${newOrder.price}</p>
      <p><strong>Quantity:</strong> ${newOrder.quantity}</p>
      <p><strong>Total:</strong> $${newOrder.total}</p>
    `;
  });
};

showCategories();

// Show orders
document.querySelector(".my-orders").addEventListener("click", () => {
  const wrapper = document.querySelector(".wrapper");
  const ordersSection = document.getElementById("ordersSection");

  wrapper.style.display = "none";
  ordersSection.style.display = "block";
  ordersSection.innerHTML = "";

  const orders = JSON.parse(localStorage.getItem("orders")) || [];

  if (orders.length === 0) {
    ordersSection.innerHTML = "<p>No orders yet</p>";
  } else {
    orders.forEach((order) => {
      const element = document.createElement("div");
      element.innerHTML = `
        <p>
          <strong>${order.date}</strong> - ${order.name} - $${order.price} x ${order.quantity} = $${order.total}
        </p>
        <button class="delete-btn">Delete</button>
      `;

      element.querySelector(".delete-btn").addEventListener("click", () => {
        let updatedOrders = JSON.parse(localStorage.getItem("orders")) || [];
        updatedOrders = updatedOrders.filter((o) => o.id !== order.id);
        localStorage.setItem("orders", JSON.stringify(updatedOrders));
        element.remove();

        if (updatedOrders.length === 0) {
          ordersSection.innerHTML = "<p>No orders yet</p>";
        }
      });

      ordersSection.appendChild(element);
    });
  }

  // Back button
  const backBtn = document.createElement("button");
  backBtn.textContent = "Back";
  backBtn.addEventListener("click", () => {
    ordersSection.style.display = "none";
    wrapper.style.display = "block";
    wrapper.innerHTML = `
      <div class="categories"></div>
      <div class="products"></div>
      <div class="info"></div>
      <div class="order-details"></div>
    `;
    showCategories();
  });
  ordersSection.appendChild(backBtn);
});
