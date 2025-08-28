// Renders an array of strings as styled cards on the page
function showCards(strings) {
  // Remove previous cards if any
  let container = document.querySelector('.cards-container');
  if (!container) {
    container = document.createElement('div');
    container.classList.add('cards-container');
    document.body.appendChild(container);
  } else {
    container.innerHTML = '';
  }

  strings.forEach(str => {
    const card = document.createElement('div');
    card.textContent = str;

    card.onmouseover = () => card.style.transform = 'scale(1.04)';
    card.onmouseout = () => card.style.transform = 'scale(1)';
    container.appendChild(card);
  });
}
