"use strict";

const showCategories = () => {
  const parent = document.querySelector('.categories');
  if (!parent) return;

  const categoriesList = document.createElement('ul');
  categoriesList.addEventListener('click', event => {
    if (event.target && event.target.tagName === 'LI') {
      const categoryId = event.target.getAttribute('data-category');
      const category = categories[categoryId];
      if (!category) return;
      showProductsByCategory(category);
    }
  });

  Object.values(categories).forEach(category => {
    const element = document.createElement('li');
    element.textContent = category.name;
    element.setAttribute('data-category', category.id);
    categoriesList.appendChild(element);
  });

  parent.appendChild(categoriesList);
};

const showProductsByCategory = category => {
  const products = category.products;
  const parent = document.querySelector('.products');
  if (!parent) return;

  parent.innerHTML = '';
  const productsList = document.createElement('ul');

  productsList.addEventListener('click', event => {
    if (event.target && event.target.tagName === 'LI') {
      const productId = event.target.getAttribute('data-product');
      const product = category.products.find(p => p.id == productId);
      if (!product) return;
      showProductInfo(product);
    }
  });

  products.forEach(product => {
    const element = document.createElement('li');
    element.textContent = `${product.name} - $${product.price}`;
    element.setAttribute('data-product', product.id);
    element.setAttribute('data-category', category.id);
    productsList.appendChild(element);
  });

  parent.appendChild(productsList);
};

// Показ інфо про товар
const showProductInfo = product => {
  const infoBlock = document.querySelector('.info');
  if (!infoBlock) return;

  infoBlock.innerHTML = `
    <h2>${product.name}</h2>
    <p>${product.description}</p>
    <p><strong>Price:</strong> $${product.price}</p>
  `;

  const buyBtn = document.createElement('button');
  buyBtn.textContent = 'Придбати';
  buyBtn.addEventListener('click', () => {
    showOrderForm(product);
  });

  infoBlock.appendChild(buyBtn);
};

// ⚡ Форма замовлення
const showOrderForm = product => {
  const orderDetails = document.querySelector('.order-details');
  if (!orderDetails) return;

  orderDetails.innerHTML = `
    <h3>Оформлення замовлення</h3>
    <form id="orderForm">
      <label>ПІБ: <input type="text" name="fullname" required></label><br>
      <label>Місто:
        <select name="city" required>
          <option value="">Оберіть місто</option>
          <option value="Київ">Київ</option>
          <option value="Львів">Львів</option>
          <option value="Одеса">Одеса</option>
          <option value="Дніпро">Дніпро</option>
          <option value="Харків">Харків</option>
        </select>
      </label><br>
      <label>Склад Нової пошти: <input type="text" name="warehouse" required></label><br>
      <label>Оплата:
        <select name="payment" required>
          <option value="">Оберіть спосіб</option>
          <option value="Накладений платіж">Накладений платіж</option>
          <option value="Оплата на рахунок">Оплата на рахунок</option>
        </select>
      </label><br>
      <label>Кількість: <input type="number" name="quantity" min="1" value="1" required></label><br>
      <label>Коментар: <textarea name="comment"></textarea></label><br>
      <button type="submit">Підтвердити замовлення</button>
    </form>
    <div class="error-message" style="color:red;"></div>
  `;

  const form = document.getElementById('orderForm');
  form.addEventListener('submit', e => {
    e.preventDefault();

    const data = new FormData(form);
    const fullname = data.get('fullname').trim();
    const city = data.get('city');
    const warehouse = data.get('warehouse').trim();
    const payment = data.get('payment');
    const quantity = parseInt(data.get('quantity'));
    const comment = data.get('comment').trim();

    const errorDiv = orderDetails.querySelector('.error-message');
    errorDiv.textContent = '';

    if (!fullname || !city || !warehouse || !payment || quantity < 1) {
      errorDiv.textContent = '❌ Будь ласка, заповніть усі поля коректно.';
      return;
    }

    // ⚡ Зберігаємо замовлення в localStorage
    const newOrder = {
      id: Date.now(),
      date: new Date().toLocaleString(),
      name: product.name,
      price: product.price,
      quantity: quantity,
      total: product.price * quantity
    };

    const orders = JSON.parse(localStorage.getItem("orders")) || [];
    orders.push(newOrder);
    localStorage.setItem("orders", JSON.stringify(orders));

    // Підтвердження
    orderDetails.innerHTML = `
      <h3>✅ Замовлення підтверджено!</h3>
      <p><strong>Товар:</strong> ${product.name}</p>
      <p><strong>Ціна:</strong> $${product.price}</p>
      <p><strong>Кількість:</strong> ${quantity}</p>
      <p><strong>Сума до оплати:</strong> $${product.price * quantity}</p>
    `;
  });
};

showCategories();


// ⚡ Показ замовлень
document.querySelector('.my-orders').addEventListener('click', () => {
  const wrapper = document.querySelector('.wrapper');
  const ordersSection = document.getElementById('ordersSection');

  wrapper.style.display = "none";
  ordersSection.style.display = "block";
  ordersSection.innerHTML = "";

  const orders = JSON.parse(localStorage.getItem('orders')) || [];

  if (orders.length === 0) {
    ordersSection.innerHTML = '<p>Замовлень немає</p>';
  } else {
    orders.forEach((order, index) => {
      const element = document.createElement('div');
      element.innerHTML = `
        <p>${order.date} - ${order.name} - $${order.price} × ${order.quantity} = $${order.total}</p>
        <button class="delete-btn">Видалити</button>
      `;

      // видалення
      element.querySelector('.delete-btn').addEventListener('click', () => {
        orders.splice(index, 1);
        localStorage.setItem('orders', JSON.stringify(orders));
        element.remove();
      });

      ordersSection.appendChild(element);
    });
  }

  // кнопка назад
  const backBtn = document.createElement('button');
  backBtn.textContent = "Назад";
  backBtn.addEventListener('click', () => {
    ordersSection.style.display = "none";
    wrapper.style.display = "block";
    wrapper.innerHTML = `
      <div class="categories"></div>
      <div class="products"></div>
      <div class="info"></div>
    `;
    showCategories();
  });
  ordersSection.appendChild(backBtn);
});
