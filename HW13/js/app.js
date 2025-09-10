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

// Форма замовлення
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

    // Якщо все ок → показати підтвердження
    orderDetails.innerHTML = `
      <h3>✅ Замовлення підтверджено!</h3>
      <p><strong>Товар:</strong> ${product.name}</p>
      <p><strong>Ціна:</strong> $${product.price}</p>
      <p><strong>ПІБ:</strong> ${fullname}</p>
      <p><strong>Місто:</strong> ${city}</p>
      <p><strong>Склад Нової пошти:</strong> ${warehouse}</p>
      <p><strong>Оплата:</strong> ${payment}</p>
      <p><strong>Кількість:</strong> ${quantity}</p>
      <p><strong>Коментар:</strong> ${comment || '—'}</p>
      <p><strong>Сума до оплати:</strong> $${product.price * quantity}</p>
    `;
  });
};

showCategories();
