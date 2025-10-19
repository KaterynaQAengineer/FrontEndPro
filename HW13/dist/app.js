"use strict";

var showCategories = function showCategories() {
  var parent = document.querySelector(".categories");
  if (!parent) return;
  var categoriesList = document.createElement("ul");
  categoriesList.addEventListener("click", function (event) {
    if (event.target && event.target.tagName === "LI") {
      var categoryId = event.target.getAttribute("data-category");
      var category = categories[categoryId];
      if (!category) return;
      showProductsByCategory(category);
    }
  });
  Object.values(categories).forEach(function (category) {
    var element = document.createElement("li");
    element.textContent = category.name;
    element.setAttribute("data-category", category.id);
    categoriesList.appendChild(element);
  });
  parent.appendChild(categoriesList);
};
var showProductsByCategory = function showProductsByCategory(category) {
  var products = category.products;
  var parent = document.querySelector(".products");
  if (!parent) return;
  parent.innerHTML = "";
  var productsList = document.createElement("ul");
  productsList.addEventListener("click", function (event) {
    if (event.target && event.target.tagName === "LI") {
      var productId = event.target.getAttribute("data-product");
      var product = category.products.find(function (p) {
        return p.id == productId;
      });
      if (!product) return;
      showProductInfo(product);
    }
  });
  products.forEach(function (product) {
    var element = document.createElement("li");
    element.textContent = "".concat(product.name, " - $").concat(product.price);
    element.setAttribute("data-product", product.id);
    element.setAttribute("data-category", category.id);
    productsList.appendChild(element);
  });
  parent.appendChild(productsList);
};

// Show product info
var showProductInfo = function showProductInfo(product) {
  var infoBlock = document.querySelector(".info");
  if (!infoBlock) return;
  infoBlock.innerHTML = "\n    <h2>".concat(product.name, "</h2>\n    <p>").concat(product.description, "</p>\n    <p><strong>Price:</strong> $").concat(product.price, "</p>\n  ");
  var buyBtn = document.createElement("button");
  buyBtn.textContent = "Buy";
  buyBtn.addEventListener("click", function () {
    showOrderForm(product);
  });
  infoBlock.appendChild(buyBtn);
};

// Order form
var showOrderForm = function showOrderForm(product) {
  var orderDetails = document.querySelector(".order-details");
  if (!orderDetails) return;
  orderDetails.innerHTML = "\n    <h3>Order</h3>\n    <form id=\"orderForm\">\n      <label>Full Name: <input type=\"text\" name=\"fullname\" required></label><br>\n      <label>City:\n        <select name=\"city\" required>\n          <option value=\"\">Select city</option>\n          <option value=\"Kyiv\">Kyiv</option>\n          <option value=\"Lviv\">Lviv</option>\n          <option value=\"Odesa\">Odesa</option>\n          <option value=\"Dnipro\">Dnipro</option>\n          <option value=\"Kharkiv\">Kharkiv</option>\n        </select>\n      </label><br>\n      <label>Nova Poshta Warehouse: <input type=\"number\" name=\"warehouse\" min=\"1\" max=\"200\" required></label><br>\n      <label>Payment:\n        <select name=\"payment\" required>\n          <option value=\"\">Select payment method</option>\n          <option value=\"Cash on delivery\">Cash on delivery</option>\n          <option value=\"Bank transfer\">Bank transfer</option>\n        </select>\n      </label><br>\n      <label>Quantity: <input type=\"number\" name=\"quantity\" min=\"1\" value=\"1\" required></label><br>\n      <label>Comment: <textarea name=\"comment\"></textarea></label><br>\n      <button type=\"submit\">Confirm Order</button>\n    </form>\n    <div class=\"error-message\" style=\"color:red;\"></div>\n  ";
  var form = document.getElementById("orderForm");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var data = new FormData(form);
    var fullname = data.get("fullname").trim();
    var city = data.get("city");
    var warehouse = parseInt(data.get("warehouse"));
    var payment = data.get("payment");
    var quantity = parseInt(data.get("quantity"));
    var comment = data.get("comment").trim();
    var errorDiv = orderDetails.querySelector(".error-message");
    errorDiv.textContent = "";
    if (!fullname || !city || !warehouse || !payment || quantity < 1) {
      errorDiv.textContent = "Please fill in all fields correctly.";
      return;
    }
    var newOrder = {
      id: Date.now(),
      date: new Date().toLocaleDateString(),
      name: product.name,
      price: product.price,
      quantity: quantity,
      total: product.price * quantity
    };
    var orders = JSON.parse(localStorage.getItem("orders")) || [];
    orders.push(newOrder);
    localStorage.setItem("orders", JSON.stringify(orders));

    // Confirmation
    orderDetails.innerHTML = "\n      <h3>Order Confirmed!</h3>\n      <p><strong>Date:</strong> ".concat(newOrder.date, "</p>\n      <p><strong>Product:</strong> ").concat(newOrder.name, "</p>\n      <p><strong>Price:</strong> $").concat(newOrder.price, "</p>\n      <p><strong>Quantity:</strong> ").concat(newOrder.quantity, "</p>\n      <p><strong>Total:</strong> $").concat(newOrder.total, "</p>\n    ");
  });
};
showCategories();

// Show orders
document.querySelector(".my-orders").addEventListener("click", function () {
  var wrapper = document.querySelector(".wrapper");
  var ordersSection = document.getElementById("ordersSection");
  wrapper.style.display = "none";
  ordersSection.style.display = "block";
  ordersSection.innerHTML = "";
  var orders = JSON.parse(localStorage.getItem("orders")) || [];
  if (orders.length === 0) {
    ordersSection.innerHTML = "<p>No orders yet</p>";
  } else {
    orders.forEach(function (order) {
      var element = document.createElement("div");
      element.innerHTML = "\n        <p>\n          <strong>".concat(order.date, "</strong> - ").concat(order.name, " - $").concat(order.price, " x ").concat(order.quantity, " = $").concat(order.total, "\n        </p>\n        <button class=\"delete-btn\">Delete</button>\n      ");
      element.querySelector(".delete-btn").addEventListener("click", function () {
        var updatedOrders = JSON.parse(localStorage.getItem("orders")) || [];
        updatedOrders = updatedOrders.filter(function (o) {
          return o.id !== order.id;
        });
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
  var backBtn = document.createElement("button");
  backBtn.textContent = "Back";
  backBtn.addEventListener("click", function () {
    ordersSection.style.display = "none";
    wrapper.style.display = "block";
    wrapper.innerHTML = "\n      <div class=\"categories\"></div>\n      <div class=\"products\"></div>\n      <div class=\"info\"></div>\n      <div class=\"order-details\"></div>\n    ";
    showCategories();
  });
  ordersSection.appendChild(backBtn);
});