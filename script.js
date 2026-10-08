const products = [
  {
    id: 1,
    name: 'Cuscuz Nordestino',
    category: 'Cuscuz',
    description: 'Cuscuz recheado com ingredientes selecionados.',
    ingredients: ['Cuscuz', 'Queijo coalho', 'Cebola', 'Tomate', 'Azeitona'],
    price: 22.9,
    image: 'fotos/cuscuz.jpg',
    available: true,
  },
  {
    id: 2,
    name: 'Tapioca de Queijo',
    category: 'Tapiocas',
    description: 'Tapioca macia com queijo e toque de manteiga.',
    ingredients: ['Tapioca', 'Queijo', 'Manteiga'],
    price: 18.5,
    image: 'fotos/tapioca.jpeg',
    available: true,
  },
  {
    id: 3,
    name: 'Bolo de Fuba',
    category: 'Bolos',
    description: 'Bolo de fubá com aroma de coco e cobertura leve.',
    ingredients: ['Fubá', 'Leite', 'Ovo', 'Coco'],
    price: 15.0,
    image: 'fotos/bolo de fuba.jpeg',
    available: true,
  },
  {
    id: 4,
    name: 'Suco de Caju',
    category: 'Sucos',
    description: 'Suco natural de caju com leve toque de hortelã.',
    ingredients: ['Caju', 'Hortelã', 'Água'],
    price: 12.0,
    image: 'fotos/suco de caju.jpeg',
    available: true,
  },
  {
    id: 5,
    name: 'Café da Manhã Nordestino',
    category: 'Café da manhã',
    description: 'Café completo com pão, frutas e itens da casa.',
    ingredients: ['Café', 'Pão', 'Frutas', 'Queijo'],
    price: 29.0,
    image: 'fotos/cafe de manha.jpeg',
    available: true,
  },
  {
    id: 6,
    name: 'Pastel de Carne seca',
    category: 'Salgados',
    description: 'Pastel crocante com recheio de carne e temperos.',
    ingredients: ['Massa', 'Carne', 'Cebola', 'Pimenta'],
    price: 25.0,
    image: 'fotos/pastel de carne seca.jpg',
    available: true,
  },
  {
    id: 7,
    name: 'Bolo de Tapioca',
    category: 'Bolos',
    description: 'Bolo leve de tapioca com sabor de coco.',
    ingredients: ['Tapioca', 'Coco', 'Leite'],
    price: 15.0,
    image: 'fotos/bolo de tapioca.jpeg',
    available: true,
  },
  {
    id: 8,
    name: 'Pé de Moleque',
    category: 'Doces',
    description: 'Doce tradicional com sabor de amendoim e caramelo.',

    ingredients: ['Amendoim', 'Açúcar', 'Manteiga',],
    price:
     9.9,
    image: 'fotos/pe de moleque.jpg',
    available: true,
  },
  {
    id: 9,
    name: 'Combo Manhã',
    category: 'Combos',
    description: 'Café, com tapioca para aproveitar o melhor do dia.',
    ingredients: ['Tapioca', 'Café'],
    price: 34.9,
    image: 'fotos/cafe com tapioca.jpeg',
    available: true,
  },
  {
    id: 10,
    name: 'Combo Regional',
    category: 'Promoções',
    description: 'Especial com bolo,tapioca, suco e doce da casa.',
    ingredients: ['Bolo','tapioca', 'suco', 'Doce'],
    price: 39.9,
    image: 'fotos/Especial.jpg',
    available: true,
  },
];

const units = [
  {
    name: 'Raízes do Nordeste',
    city: 'Londrina',
    state: 'PR',
    hours: 'Seg–Dom • 07:00 às 20:00',
    status: 'Aberta',
    modalities: ['Retirada', 'Pick-up', 'Delivery'],
    selected: true,
  },
  {
    name: 'Raízes do Nordeste',
    city: 'Recife',
    state: 'PE',
    hours: 'Seg–Dom • 08:00 às 21:00',
    status: 'Aberta',
    modalities: ['Retirada', 'Pick-up'],
    selected: false,
  },
  {
    name: 'Raízes do Nordeste',
    city: 'Fortaleza',
    state: 'CE',
    hours: 'Seg–Dom • 07:30 às 19:30',
    status: 'Aberta',
    modalities: ['Retirada'],
    selected: false,
  },
];

const promotions = [
  {
    name: 'Promo Café+Tapioca',
    description: 'Café especial com tapioca recheada por R$ 24,90.',
    price: 'R$ 24,90',
    validity: 'Válido até 30/10',
    image: 'fotos/cafe com tapioca.jpeg',
  },
  {
    name: 'Combo Regional',
    description: 'Uma fatia Bolo de fubá, doce do dia, suco e tapioca com desconto.',
    price: 'R$ 35,90',
    validity: 'Válido até 30/10',
    image: 'fotos/Especial.jpg',
  },
  {
    name: 'Suco + Tapioca',
    description: 'Aproveite suco de caju com tapioca por um preço especial.',
    price: 'R$ 19,90',
    validity: 'Válido até 30/10',
    image: 'fotos/suco de caju.jpeg',
  },
];

const cart = [];
const orderHistory = [
  { id: '#000001', date: '15/09/2026', unit: 'Londrina – PR', value: 'R$ 49,90', status: 'Em preparação' },
  { id: '#000002', date: '11/09/2026', unit: 'Londrina – PR', value: 'R$ 36,50', status: 'Pedido retirado' },
  { id: '#000003', date: '10/09/2026', unit: 'Recife – PE', value: 'R$ 54,20', status: 'Pedido retirado' },
];

const state = {
  selectedUnit: 'Londrina – PR',
  currentCategory: 'Todos',
  search: '',
  modalProduct: null,
  modalQty: 1,
};

function getSelectedUnit() {
  return units.find((unit) => unit.selected) || units[0];
}

function getSelectedUnitLabel() {
  const selected = getSelectedUnit();
  return selected ? `${selected.city} – ${selected.state}` : 'Londrina – PR';
}

function getSelectedUnitBannerLabel() {
  const selected = getSelectedUnit();
  return selected ? `Raízes do Nordeste – ${selected.city}/${selected.state}` : 'Raízes do Nordeste – Londrina/PR';
}

function updatePaymentSummary() {
  const paymentOptions = document.querySelectorAll('input[name="paymentMethod"]');
  const selectedOption = [...paymentOptions].find((option) => option.checked);
  const paymentNames = {
    pix: 'Pix',
    cartao: 'Cartão',
    dinheiro: 'Dinheiro',
    mock: 'Mock',
  };

  const value = paymentNames[selectedOption?.value] || 'Pix';
  document.querySelectorAll('[data-payment-label]').forEach((element) => {
    element.textContent = value;
  });
}

const screens = document.querySelectorAll('.screen');
const navButtons = document.querySelectorAll('[data-screen]');
const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
const cartCount = document.getElementById('cartCount');
const productGrid = document.getElementById('productGrid');
const categoryFilters = document.getElementById('categoryFilters');
const searchInput = document.getElementById('searchInput');
const cartItems = document.getElementById('cartItems');
const subtotalValue = document.getElementById('subtotalValue');
const taxValue = document.getElementById('taxValue');
const totalValue = document.getElementById('totalValue');
const unitGrid = document.getElementById('unitGrid');
const orderList = document.getElementById('orderList');
const promoGrid = document.getElementById('promoGrid');
const modal = document.getElementById('productModal');
const modalImage = document.getElementById('modalImage');
const productModalTitle = document.getElementById('productModalTitle');
const modalDescription = document.getElementById('modalDescription');
const modalIngredients = document.getElementById('modalIngredients');
const modalPrice = document.getElementById('modalPrice');
const modalQty = document.getElementById('modalQty');
const modalObservation = document.getElementById('modalObservation');
const cashField = document.getElementById('cashField');
const confirmationTotal = document.getElementById('confirmationTotal');
const toast = document.getElementById('toast');

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(showToast.timeoutId);
  showToast.timeoutId = setTimeout(() => {
    toast.classList.remove('show');
  }, 1800);
}

function formatMoney(value) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
}

function showScreen(screenName) {
  screens.forEach((screen) => {
    screen.classList.toggle('active', screen.id === `screen-${screenName}`);
  });

  document.querySelectorAll('.nav-link').forEach((button) => {
    const isActive = button.dataset.screen === screenName;
    button.classList.toggle('active', isActive);
  });

  if (screenName !== 'home') {
    mobileMenu.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  }
}

function updateUnitLabels() {
  state.selectedUnit = getSelectedUnitLabel();

  document.querySelectorAll('[data-unit-label]').forEach((el) => {
    el.textContent = getSelectedUnitBannerLabel();
  });

  const menuTitle = document.querySelector('[data-menu-title]');
  if (menuTitle) {
    menuTitle.textContent = `Cardápio – ${getSelectedUnitBannerLabel()}`;
  }

  const cityInput = document.getElementById('cityInput');
  if (cityInput) {
    cityInput.value = getSelectedUnit()?.city || 'Londrina';
  }

  const locationText = document.querySelector('[data-location]');
  if (locationText) {
    locationText.textContent = `${getSelectedUnit()?.city || 'Londrina'} – ${getSelectedUnit()?.state === 'PR' ? 'Paraná' : getSelectedUnit()?.state || 'PR'}`;
  }

  document.querySelectorAll('[data-unit-location]').forEach((el) => {
    el.textContent = getSelectedUnitBannerLabel();
  });

  const selectedUnit = getSelectedUnit();
  document.querySelectorAll('[data-confirm-unit]').forEach((el) => {
    el.textContent = selectedUnit ? `${selectedUnit.city} – ${selectedUnit.state}` : 'Londrina – PR';
  });

  document.querySelectorAll('[data-tracking-unit]').forEach((el) => {
    el.textContent = selectedUnit ? `${selectedUnit.city} – ${selectedUnit.state}` : 'Londrina – PR';
  });
}

function renderUnitCards() {
  const selectedUnit = getSelectedUnit();

  unitGrid.innerHTML = units
    .map((unit, index) => {
      const isSelected = selectedUnit && unit.city === selectedUnit.city && unit.state === selectedUnit.state;
      return `
        <article class="unit-card ${isSelected ? 'selected' : ''}">
          <div>
            <p class="section-label">Unidade ${index + 1}</p>
            <h3>${unit.name}</h3>
          </div>
          <div class="meta">
            <span>${unit.city} – ${unit.state}</span>
            <span>${unit.hours}</span>
          </div>
          <div class="meta">
            <span>${unit.modalities.join(' • ')}</span>
          </div>
          <span class="status-badge ${unit.status === 'Aberta' ? 'open' : 'closed'}">${unit.status}</span>
          <div class="card-actions">
            <button class="primary-btn select-unit" data-city="${unit.city}" data-state="${unit.state}">Selecionar unidade</button>
            <button class="secondary-btn">Ver cardápio</button>
            <button class="secondary-btn">Ver detalhes</button>
          </div>
        </article>
      `;
    })
    .join('');

  document.querySelectorAll('.select-unit').forEach((button) => {
    button.addEventListener('click', () => {
      const city = button.dataset.city;
      const stateCode = button.dataset.state;
      const nextUnit = units.find((unit) => unit.city === city && unit.state === stateCode);
      if (!nextUnit) return;

      units.forEach((unit) => {
        unit.selected = unit.city === city && unit.state === stateCode;
      });

      state.selectedUnit = `${city} – ${stateCode}`;
      updateUnitLabels();
      renderUnitCards();
      showToast(`Unidade selecionada: ${city} – ${stateCode}`);
      showScreen('menu');
    });
  });
}

function getFilteredProducts() {
  return products.filter((product) => {
    const categoryMatches = state.currentCategory === 'Todos' || product.category === state.currentCategory;
    const searchText = state.search.trim().toLowerCase();
    const searchMatches = !searchText || product.name.toLowerCase().includes(searchText) || product.description.toLowerCase().includes(searchText);
    return categoryMatches && searchMatches;
  });
}

function renderCategories() {
  const categories = ['Todos', ...new Set(products.map((product) => product.category))];
  categoryFilters.innerHTML = categories
    .map(
      (category) => `
        <button class="filter-chip ${state.currentCategory === category ? 'active' : ''}" data-category="${category}">
          ${category}
        </button>
      `
    )
    .join('');

  document.querySelectorAll('[data-category]').forEach((button) => {
    button.addEventListener('click', () => {
      state.currentCategory = button.dataset.category;
      renderCategories();
      renderProducts();
    });
  });
}

function renderProducts() {
  const filteredProducts = getFilteredProducts();
  productGrid.innerHTML = filteredProducts
    .map(
      (product) => `
        <article class="product-card">
          <img src="${product.image}" alt="${product.name}" />
          <div>
            <h3>${product.name}</h3>
            <p>${product.description}</p>
          </div>
          <div class="meta">
            <span>${product.category}</span>
            <span class="availability ${product.available ? 'available' : 'unavailable'}">${product.available ? 'Disponível' : 'Indisponível'}</span>
          </div>
          <div class="price-row">
            <span class="price-tag">${formatMoney(product.price)}</span>
            <div class="quantity-control">
              <button class="qty-btn" data-action="decrease" data-product-id="${product.id}">−</button>
              <span>${getCartQuantity(product.id)}</span>
              <button class="qty-btn" data-action="increase" data-product-id="${product.id}">+</button>
            </div>
          </div>
          <div class="card-actions">
            <button class="primary-btn add-product" data-product-id="${product.id}">Adicionar</button>
            <button class="secondary-btn view-details" data-product-id="${product.id}">Detalhes</button>
          </div>
        </article>
      `
    )
    .join('');

  attachProductCardEvents();
}

function getCartQuantity(productId) {
  const item = cart.find((entry) => entry.id === productId);
  return item ? item.quantity : 0;
}

function addProductToCart(productId, quantity = 1) {
  const existing = cart.find((entry) => entry.id === productId);
  if (existing) {
    existing.quantity += quantity;
  } else {
    cart.push({ id: productId, quantity, note: '' });
  }
  renderProducts();
  renderCart();
  updateCartCount();
}

function updateCartCount() {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartCount.textContent = totalItems;
}

function renderCart() {
  if (!cart.length) {
    cartItems.innerHTML = `
      <div class="info-box">
        <p>Seu carrinho está vazio. Adicione alguns itens para continuar.</p>
      </div>
    `;
    subtotalValue.textContent = 'R$ 0,00';
    taxValue.textContent = 'R$ 0,00';
    totalValue.textContent = 'R$ 0,00';
    confirmationTotal.textContent = 'R$ 0,00';
    return;
  }

  const subtotal = cart.reduce((sum, cartItem) => {
    const product = products.find((entry) => entry.id === cartItem.id);
    return sum + (product ? product.price * cartItem.quantity : 0);
  }, 0);

  const fee = subtotal > 0 ? 4.5 : 0;
  const total = subtotal + fee;

  cartItems.innerHTML = cart
    .map((cartItem) => {
      const product = products.find((entry) => entry.id === cartItem.id);
      if (!product) return '';
      return `
        <div class="cart-item">
          <div>
            <h4>${product.name}</h4>
            <p>${formatMoney(product.price)} cada</p>
          </div>
          <div class="quantity-control">
            <button class="qty-btn" data-action="decrease-cart" data-product-id="${product.id}">−</button>
            <span>${cartItem.quantity}</span>
            <button class="qty-btn" data-action="increase-cart" data-product-id="${product.id}">+</button>
          </div>
          <button class="secondary-btn remove-item" data-product-id="${product.id}">Remover</button>
        </div>
      `;
    })
    .join('');

  subtotalValue.textContent = formatMoney(subtotal);
  taxValue.textContent = formatMoney(fee);
  totalValue.textContent = formatMoney(total);
  confirmationTotal.textContent = formatMoney(total);

  document.querySelectorAll('.remove-item').forEach((button) => {
    button.addEventListener('click', () => {
      const productId = Number(button.dataset.productId);
      const index = cart.findIndex((item) => item.id === productId);
      if (index >= 0) {
        cart.splice(index, 1);
      }
      renderProducts();
      renderCart();
      updateCartCount();
      showToast('Produto removido do carrinho');
    });
  });

  document.querySelectorAll('[data-action="increase-cart"]').forEach((button) => {
    button.addEventListener('click', () => addProductToCart(Number(button.dataset.productId), 1));
  });

  document.querySelectorAll('[data-action="decrease-cart"]').forEach((button) => {
    button.addEventListener('click', () => {
      const productId = Number(button.dataset.productId);
      const item = cart.find((entry) => entry.id === productId);
      if (!item) return;
      item.quantity -= 1;
      if (item.quantity <= 0) {
        const index = cart.findIndex((entry) => entry.id === productId);
        cart.splice(index, 1);
      }
      renderProducts();
      renderCart();
      updateCartCount();
    });
  });
}

function attachProductCardEvents() {
  document.querySelectorAll('.add-product').forEach((button) => {
    button.addEventListener('click', () => {
      addProductToCart(Number(button.dataset.productId), 1);
      showToast('Produto adicionado ao pedido');
    });
  });

  document.querySelectorAll('.view-details').forEach((button) => {
    button.addEventListener('click', () => {
      const product = products.find((entry) => entry.id === Number(button.dataset.productId));
      if (!product) return;
      openProductModal(product);
    });
  });

  document.querySelectorAll('[data-action="increase"]').forEach((button) => {
    button.addEventListener('click', () => addProductToCart(Number(button.dataset.productId), 1));
  });

  document.querySelectorAll('[data-action="decrease"]').forEach((button) => {
    button.addEventListener('click', () => {
      const productId = Number(button.dataset.productId);
      const item = cart.find((entry) => entry.id === productId);
      if (!item) return;
      item.quantity -= 1;
      if (item.quantity <= 0) {
        const index = cart.findIndex((entry) => entry.id === productId);
        cart.splice(index, 1);
      }
      renderProducts();
      renderCart();
      updateCartCount();
    });
  });
}

function openProductModal(product) {
  state.modalProduct = product;
  state.modalQty = 1;
  modalImage.src = product.image;
  productModalTitle.textContent = product.name;
  modalDescription.textContent = product.description;
  modalIngredients.textContent = product.ingredients.join(', ');
  modalPrice.textContent = formatMoney(product.price);
  modalQty.textContent = state.modalQty;
  modalObservation.value = '';
  modal.classList.remove('hidden');
  modal.setAttribute('aria-hidden', 'false');
}

function closeProductModal() {
  modal.classList.add('hidden');
  modal.setAttribute('aria-hidden', 'true');
}

function getNextOrderId() {
  const numericIds = orderHistory
    .map((order) => Number(String(order.id).replace(/\D/g, '')))
    .filter((value) => Number.isFinite(value));

  const maxId = numericIds.length ? Math.max(...numericIds) : 0;
  return `#${String(maxId + 1).padStart(6, '0')}`;
}

function placeOrder() {
  if (!cart.length) {
    showToast('Adicione pelo menos um produto antes de confirmar');
    return false;
  }

  const subtotal = cart.reduce((sum, cartItem) => {
    const product = products.find((entry) => entry.id === cartItem.id);
    return sum + (product ? product.price * cartItem.quantity : 0);
  }, 0);

  const fee = subtotal > 0 ? 4.5 : 0;
  const total = subtotal + fee;

  const newOrder = {
    id: getNextOrderId(),
    date: new Date().toLocaleDateString('pt-BR'),
    unit: getSelectedUnitLabel(),
    value: formatMoney(total),
    status: 'Em preparação',
  };

  orderHistory.unshift(newOrder);
  renderOrderHistory();

  const successOrderId = document.querySelector('#screen-success strong');
  if (successOrderId) {
    successOrderId.textContent = newOrder.id;
  }

  cart.length = 0;
  renderProducts();
  renderCart();
  updateCartCount();
  return true;
}

function renderOrderHistory() {
  const groupedOrders = orderHistory.reduce((groups, order) => {
    const unit = order.unit || 'Sem unidade';
    if (!groups[unit]) {
      groups[unit] = [];
    }
    groups[unit].push(order);
    return groups;
  }, {});

  orderList.innerHTML = Object.entries(groupedOrders)
    .map(
      ([unit, orders]) => `
        <div class="order-group">
          <h3>${unit}</h3>
          ${orders
            .map(
              (order) => `
                <article class="order-card">
                  <div>
                    <div class="meta">
                      <strong>${order.id}</strong>
                      <span>${order.date}</span>
                    </div>
                    <p>Unidade: ${order.unit}</p>
                    <p>Valor: ${order.value}</p>
                    <p>Status: ${order.status}</p>
                  </div>
                  <div class="card-actions">
                    <button class="secondary-btn">Ver pedido</button>
                    <button class="primary-btn">Pedir novamente</button>
                  </div>
                </article>
              `
            )
            .join('')}
        </div>
      `
    )
    .join('');
}

function renderPromotions() {
  promoGrid.innerHTML = promotions
    .map(
      (promo) => `
        <article class="promo-card">
          <img src="${promo.image}" alt="${promo.name}" />
          <div>
            <h3>${promo.name}</h3>
            <p>${promo.description}</p>
          </div>
          <div class="price-row">
            <span class="price-tag">${promo.price}</span>
            <span>${promo.validity}</span>
          </div>
          <button class="primary-btn">Adicionar ao pedido</button>
        </article>
      `
    )
    .join('');
}

function bindNavigation() {
  navButtons.forEach((button) => {
    const target = button.dataset.screen;
    if (!target) return;
    button.addEventListener('click', () => {
      if (target === 'success') {
        const didPlaceOrder = placeOrder();
        if (!didPlaceOrder) return;
      }
      showScreen(target);
    });
  });

  menuToggle.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

function bindPaymentOption() {
  const paymentOptions = document.querySelectorAll('input[name="paymentMethod"]');
  paymentOptions.forEach((option) => {
    option.addEventListener('change', () => {
      cashField.classList.toggle('hidden', option.value !== 'dinheiro');
      updatePaymentSummary();
    });
  });
}

function bindModalHandlers() {
  document.querySelector('[data-close-modal="true"]').addEventListener('click', closeProductModal);
  document.querySelector('.modal-close').addEventListener('click', closeProductModal);

  document.querySelector('[data-action="increase-modal"]').addEventListener('click', () => {
    state.modalQty += 1;
    modalQty.textContent = state.modalQty;
  });

  document.querySelector('[data-action="decrease-modal"]').addEventListener('click', () => {
    state.modalQty = Math.max(1, state.modalQty - 1);
    modalQty.textContent = state.modalQty;
  });

  document.getElementById('addToCartModal').addEventListener('click', () => {
    if (!state.modalProduct) return;
    addProductToCart(state.modalProduct.id, state.modalQty);
    showToast(`${state.modalProduct.name} adicionado ao pedido`);
    closeProductModal();
  });

  modal.addEventListener('click', (event) => {
    if (event.target.dataset.closeModal === 'true') {
      closeProductModal();
    }
  });
}

function bindSearch() {
  searchInput.addEventListener('input', (event) => {
    state.search = event.target.value;
    renderProducts();
  });
}

function initialize() {
  bindNavigation();
  bindSearch();
  bindPaymentOption();
  bindModalHandlers();
  updateUnitLabels();
  updatePaymentSummary();
  renderUnitCards();
  renderCategories();
  renderProducts();
  renderCart();
  updateCartCount();
  renderOrderHistory();
  renderPromotions();
  showScreen('home');
}

initialize();
