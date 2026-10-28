/**
 * NovaStore — E-Commerce Web Application Logic
 */

// Product Dataset
const PRODUCTS = [
  {
    id: 1,
    name: "Wireless ANC Pro Headphones",
    category: "Electronics",
    price: 199.99,
    oldPrice: 249.99,
    rating: 4.9,
    reviews: 328,
    badge: "Sale",
    badgeType: "badge-sale",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=700&q=80",
    description: "Ultra-comfortable over-ear wireless headphones with active noise cancellation, 40-hour battery life, and crystal-clear acoustic fidelity."
  },
  {
    id: 2,
    name: "Minimalist Mechanical Watch",
    category: "Accessories",
    price: 145.00,
    oldPrice: 180.00,
    rating: 4.8,
    reviews: 142,
    badge: "Hot",
    badgeType: "badge-hot",
    image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=700&q=80",
    description: "Sleek sapphire crystal face with genuine calfskin leather strap, Japanese automatic movement, and 50m water resistance."
  },
  {
    id: 3,
    name: "Urban Everyday Commuter Backpack",
    category: "Accessories",
    price: 79.50,
    oldPrice: null,
    rating: 4.7,
    reviews: 95,
    badge: "New",
    badgeType: "badge-new",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=700&q=80",
    description: "Weatherproof 22L everyday backpack with dedicated 16-inch laptop compartment, ergonomic back airflow padding, and USB charge port."
  },
  {
    id: 4,
    name: "Classic Organic Cotton Hoodie",
    category: "Fashion",
    price: 59.00,
    oldPrice: 75.00,
    rating: 4.6,
    reviews: 210,
    badge: "Sale",
    badgeType: "badge-sale",
    image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=700&q=80",
    description: "450 GSM heavyweight organic French terry cotton fleece, tailored modern silhouette, preshrunk with reinforced flatlock stitching."
  },
  {
    id: 5,
    name: "True Wireless Earbuds with Wireless Case",
    category: "Electronics",
    price: 89.99,
    oldPrice: 119.99,
    rating: 4.8,
    reviews: 412,
    badge: "Hot",
    badgeType: "badge-hot",
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=700&q=80",
    description: "IPX7 waterproof earbuds with customizable EQ profiles, transparency mode, beamforming mics for HD calls, and Qi wireless charging."
  },
  {
    id: 6,
    name: "Retro Polarized Aviator Sunglasses",
    category: "Accessories",
    price: 49.00,
    oldPrice: null,
    rating: 4.7,
    reviews: 88,
    badge: "New",
    badgeType: "badge-new",
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=700&q=80",
    description: "Premium titanium alloy frame with UV400 polarized gradient lenses, spring hinges, and anti-glare scratch protection."
  },
  {
    id: 7,
    name: "Ceramic Minimalist Pour-Over Set",
    category: "Home",
    price: 42.00,
    oldPrice: 55.00,
    rating: 4.9,
    reviews: 175,
    badge: "Sale",
    badgeType: "badge-sale",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=700&q=80",
    description: "Artisanal matte ceramic coffee dripper with heat-resistant borosilicate glass carafe and stainless steel reusable mesh filter."
  },
  {
    id: 8,
    name: "Premium Linen Casual Button-Down Shirt",
    category: "Fashion",
    price: 68.00,
    oldPrice: null,
    rating: 4.5,
    reviews: 64,
    badge: null,
    badgeType: "",
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=700&q=80",
    description: "Breathable 100% Normandy flax linen shirt crafted with mother-of-pearl buttons and relaxed tailored fit for effortless summer styling."
  },
  {
    id: 9,
    name: "Smart Ambient LED Desk Lamp",
    category: "Home",
    price: 64.99,
    oldPrice: 79.99,
    rating: 4.7,
    reviews: 130,
    badge: "Hot",
    badgeType: "badge-hot",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=700&q=80",
    description: "Adjustable color temperature lamp with touch slide dimming, wireless phone charger base, and auto-off sleep timer."
  },
  {
    id: 10,
    name: "Performance Knit Running Sneakers",
    category: "Fashion",
    price: 119.00,
    oldPrice: 140.00,
    rating: 4.8,
    reviews: 290,
    badge: "Sale",
    badgeType: "badge-sale",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=700&q=80",
    description: "Breathable engineered mesh upper paired with responsive cloud-foam cushioning and high-abrasion rubber traction outsoles."
  },
  {
    id: 11,
    name: "Ergonomic Memory Foam Lumbar Cushion",
    category: "Home",
    price: 36.50,
    oldPrice: null,
    rating: 4.6,
    reviews: 82,
    badge: "New",
    badgeType: "badge-new",
    image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=700&q=80",
    description: "Orthopedic contoured memory foam pillow with breathable 3D mesh cover and dual adjustable straps for office and gaming chairs."
  },
  {
    id: 12,
    name: "High-Speed MagSafe Magnetic Power Bank",
    category: "Electronics",
    price: 49.99,
    oldPrice: 65.00,
    rating: 4.9,
    reviews: 310,
    badge: "Hot",
    badgeType: "badge-hot",
    image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?auto=format&fit=crop&w=700&q=80",
    description: "10,000mAh compact magnetic battery pack with 20W USB-C PD fast charging and smart LED battery level display."
  }
];

// App State
const state = {
  cart: JSON.parse(localStorage.getItem('novastore_cart') || '[]'),
  wishlist: new Set(JSON.parse(localStorage.getItem('novastore_wishlist') || '[]')),
  selectedCategory: 'all',
  searchQuery: '',
  sortOption: 'featured',
  discountPercent: 0,
  couponCodeApplied: '',
  theme: localStorage.getItem('novastore_theme') || 'light'
};

// Valid Discount Coupons
const VALID_COUPONS = {
  'SAVE20': 0.20,
  'NOVA10': 0.10,
  'WELCOME': 0.15
};

// DOM Elements
const productGrid = document.getElementById('productGrid');
const emptyState = document.getElementById('emptyState');
const catalogResultsCount = document.getElementById('catalogResultsCount');
const categoryPills = document.getElementById('categoryPills');
const sortSelect = document.getElementById('sortSelect');
const searchInput = document.getElementById('searchInput');
const clearSearchBtn = document.getElementById('clearSearchBtn');
const searchFilterNotice = document.getElementById('searchFilterNotice');
const searchKeyword = document.getElementById('searchKeyword');
const resetSearchFilterBtn = document.getElementById('resetSearchFilterBtn');
const resetAllFiltersBtn = document.getElementById('resetAllFiltersBtn');

const themeToggleBtn = document.getElementById('themeToggleBtn');
const cartToggleBtn = document.getElementById('cartToggleBtn');
const closeCartBtn = document.getElementById('closeCartBtn');
const cartDrawer = document.getElementById('cartDrawer');
const cartDrawerOverlay = document.getElementById('cartDrawerOverlay');
const cartItemsList = document.getElementById('cartItemsList');
const emptyCartView = document.getElementById('emptyCartView');
const cartFooter = document.getElementById('cartFooter');
const cartBadge = document.getElementById('cartBadge');
const drawerCountBadge = document.getElementById('drawerCountBadge');

const shippingProgressText = document.getElementById('shippingProgressText');
const shippingProgressBar = document.getElementById('shippingProgressBar');
const couponInput = document.getElementById('couponInput');
const applyCouponBtn = document.getElementById('applyCouponBtn');
const couponMessage = document.getElementById('couponMessage');
const summarySubtotal = document.getElementById('summarySubtotal');
const summaryDiscount = document.getElementById('summaryDiscount');
const discountRow = document.getElementById('discountRow');
const discountPercent = document.getElementById('discountPercent');
const summaryShipping = document.getElementById('summaryShipping');
const summaryTotal = document.getElementById('summaryTotal');
const checkoutBtn = document.getElementById('checkoutBtn');
const clearCartBtn = document.getElementById('clearCartBtn');
const startShoppingBtn = document.getElementById('startShoppingBtn');

const quickViewModal = document.getElementById('quickViewModal');
const closeQuickViewBtn = document.getElementById('closeQuickViewBtn');
const quickViewContent = document.getElementById('quickViewContent');

const wishlistToggleBtn = document.getElementById('wishlistToggleBtn');
const wishlistBadge = document.getElementById('wishlistBadge');
const wishlistModal = document.getElementById('wishlistModal');
const closeWishlistBtn = document.getElementById('closeWishlistBtn');
const wishlistItemsContainer = document.getElementById('wishlistItemsContainer');

const checkoutModal = document.getElementById('checkoutModal');
const closeCheckoutBtn = document.getElementById('closeCheckoutBtn');
const orderForm = document.getElementById('orderForm');
const checkoutFormView = document.getElementById('checkoutFormView');
const orderSuccessView = document.getElementById('orderSuccessView');
const checkoutSubtotal = document.getElementById('checkoutSubtotal');
const checkoutGrandTotal = document.getElementById('checkoutGrandTotal');
const receiptOrderId = document.getElementById('receiptOrderId');
const receiptCustomerName = document.getElementById('receiptCustomerName');
const receiptAddress = document.getElementById('receiptAddress');
const receiptTotalPaid = document.getElementById('receiptTotalPaid');
const successDoneBtn = document.getElementById('successDoneBtn');

const toastContainer = document.getElementById('toastContainer');
const heroPromoBtn = document.getElementById('heroPromoBtn');
const newsletterForm = document.getElementById('newsletterForm');

// Initialize Application
function init() {
  applyTheme(state.theme);
  renderProducts();
  updateCartUI();
  updateWishlistUI();
  setupEventListeners();
}

// Apply Theme
function applyTheme(theme) {
  state.theme = theme;
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('novastore_theme', theme);
  themeToggleBtn.innerHTML = theme === 'dark' 
    ? '<i class="fa-solid fa-sun"></i>' 
    : '<i class="fa-solid fa-moon"></i>';
}

// Render Products Grid
function renderProducts() {
  let list = [...PRODUCTS];

  // Category filter
  if (state.selectedCategory !== 'all') {
    list = list.filter(item => item.category.toLowerCase() === state.selectedCategory.toLowerCase());
  }

  // Search filter
  if (state.searchQuery.trim() !== '') {
    const q = state.searchQuery.toLowerCase();
    list = list.filter(item => 
      item.name.toLowerCase().includes(q) || 
      item.category.toLowerCase().includes(q) || 
      item.description.toLowerCase().includes(q)
    );
  }

  // Sorting
  switch (state.sortOption) {
    case 'price-low':
      list.sort((a, b) => a.price - b.price);
      break;
    case 'price-high':
      list.sort((a, b) => b.price - a.price);
      break;
    case 'rating':
      list.sort((a, b) => b.rating - a.rating);
      break;
    case 'name':
      list.sort((a, b) => a.name.localeCompare(b.name));
      break;
    default:
      // Featured: default order
      break;
  }

  // Update counter text
  catalogResultsCount.textContent = `Showing ${list.length} of ${PRODUCTS.length} products`;

  if (list.length === 0) {
    productGrid.innerHTML = '';
    emptyState.style.display = 'block';
    return;
  }

  emptyState.style.display = 'none';
  productGrid.innerHTML = list.map(product => {
    const isWishlisted = state.wishlist.has(product.id);
    const badgeMarkup = product.badge 
      ? `<span class="product-badge ${product.badgeType}">${product.badge}</span>` 
      : '';
    const oldPriceMarkup = product.oldPrice 
      ? `<span class="price-old">$${product.oldPrice.toFixed(2)}</span>` 
      : '';

    return `
      <article class="product-card" data-id="${product.id}">
        <div class="product-image-wrap">
          ${badgeMarkup}
          <button class="wishlist-btn ${isWishlisted ? 'active' : ''}" data-id="${product.id}" title="${isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}" aria-label="Wishlist">
            <i class="${isWishlisted ? 'fa-solid fa-heart' : 'fa-regular fa-heart'}"></i>
          </button>
          <img src="${product.image}" alt="${product.name}" loading="lazy">
          <button class="quick-view-overlay-btn" data-id="${product.id}">
            <i class="fa-solid fa-eye"></i> Quick View
          </button>
        </div>
        <div class="product-info">
          <span class="product-category">${product.category}</span>
          <h3 class="product-title" title="${product.name}">${product.name}</h3>
          <div class="product-rating">
            <span>${renderStars(product.rating)}</span>
            <span class="rating-count">(${product.reviews})</span>
          </div>
          <div class="product-bottom-row">
            <div class="price-box">
              <span class="price-current">$${product.price.toFixed(2)}</span>
              ${oldPriceMarkup}
            </div>
            <button class="add-cart-btn" data-id="${product.id}">
              <i class="fa-solid fa-plus"></i> Add
            </button>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

// Generate Star Rating HTML
function renderStars(rating) {
  let stars = '';
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  for (let i = 0; i < fullStars; i++) {
    stars += '<i class="fa-solid fa-star"></i>';
  }
  if (hasHalfStar) {
    stars += '<i class="fa-solid fa-star-half-stroke"></i>';
  }
  const remaining = 5 - fullStars - (hasHalfStar ? 1 : 0);
  for (let i = 0; i < remaining; i++) {
    stars += '<i class="fa-regular fa-star"></i>';
  }
  return stars;
}

// Cart Operations
function addToCart(productId, qty = 1) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const existingItem = state.cart.find(item => item.id === productId);
  if (existingItem) {
    existingItem.quantity += qty;
  } else {
    state.cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category,
      quantity: qty
    });
  }

  saveCart();
  updateCartUI();
  showToast(`Added "${product.name}" to your cart!`, 'success');
}

function updateCartQuantity(productId, delta) {
  const item = state.cart.find(i => i.id === productId);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    removeFromCart(productId);
    return;
  }

  saveCart();
  updateCartUI();
}

function removeFromCart(productId) {
  const item = state.cart.find(i => i.id === productId);
  state.cart = state.cart.filter(i => i.id !== productId);
  saveCart();
  updateCartUI();
  if (item) {
    showToast(`Removed "${item.name}" from cart`, 'info');
  }
}

function clearCart() {
  if (state.cart.length === 0) return;
  state.cart = [];
  saveCart();
  updateCartUI();
  showToast('Cart cleared', 'info');
}

function saveCart() {
  localStorage.setItem('novastore_cart', JSON.stringify(state.cart));
}

// Update Cart Drawer & Badges
function updateCartUI() {
  const totalCount = state.cart.reduce((acc, item) => acc + item.quantity, 0);
  cartBadge.textContent = totalCount;
  drawerCountBadge.textContent = `${totalCount} item${totalCount === 1 ? '' : 's'}`;

  if (state.cart.length === 0) {
    cartItemsList.innerHTML = '';
    emptyCartView.style.display = 'flex';
    cartFooter.style.display = 'none';
    shippingProgressText.innerHTML = `Add <strong>$50.00</strong> more for <strong>FREE Shipping!</strong>`;
    shippingProgressBar.style.width = '0%';
    return;
  }

  emptyCartView.style.display = 'none';
  cartFooter.style.display = 'block';

  // Render items
  cartItemsList.innerHTML = state.cart.map(item => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.name}" class="cart-item-img">
      <div class="cart-item-details">
        <h4 class="cart-item-title" title="${item.name}">${item.name}</h4>
        <div class="cart-item-price">$${(item.price * item.quantity).toFixed(2)}</div>
        <div class="quantity-stepper">
          <button class="qty-btn-minus" data-id="${item.id}" aria-label="Decrease">&minus;</button>
          <span>${item.quantity}</span>
          <button class="qty-btn-plus" data-id="${item.id}" aria-label="Increase">&plus;</button>
        </div>
      </div>
      <button class="remove-item-btn" data-id="${item.id}" title="Remove item" aria-label="Remove">
        <i class="fa-regular fa-trash-can"></i>
      </button>
    </div>
  `).join('');

  // Calculations
  const subtotal = state.cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const freeShippingThreshold = 50.00;
  let shippingCost = subtotal >= freeShippingThreshold ? 0 : 9.99;
  
  // Shipping bar
  if (subtotal >= freeShippingThreshold) {
    shippingProgressText.innerHTML = `🎉 Congratulations! You unlocked <strong>FREE Shipping!</strong>`;
    shippingProgressBar.style.width = '100%';
    summaryShipping.textContent = 'Free';
    summaryShipping.classList.add('text-success');
  } else {
    const diff = (freeShippingThreshold - subtotal).toFixed(2);
    const pct = Math.min(100, Math.round((subtotal / freeShippingThreshold) * 100));
    shippingProgressText.innerHTML = `Add <strong>$${diff}</strong> more for <strong>FREE Shipping!</strong>`;
    shippingProgressBar.style.width = `${pct}%`;
    summaryShipping.textContent = `$${shippingCost.toFixed(2)}`;
    summaryShipping.classList.remove('text-success');
  }

  summarySubtotal.textContent = `$${subtotal.toFixed(2)}`;

  // Discount
  let discountAmount = 0;
  if (state.discountPercent > 0) {
    discountAmount = subtotal * state.discountPercent;
    discountRow.style.display = 'flex';
    discountPercent.textContent = `${Math.round(state.discountPercent * 100)}%`;
    summaryDiscount.textContent = `-$${discountAmount.toFixed(2)}`;
  } else {
    discountRow.style.display = 'none';
  }

  const finalTotal = Math.max(0, subtotal - discountAmount + shippingCost);
  summaryTotal.textContent = `$${finalTotal.toFixed(2)}`;
}

// Wishlist Operations
function toggleWishlist(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  if (state.wishlist.has(productId)) {
    state.wishlist.delete(productId);
    showToast(`Removed "${product.name}" from wishlist`, 'info');
  } else {
    state.wishlist.add(productId);
    showToast(`Added "${product.name}" to wishlist!`, 'success');
  }

  localStorage.setItem('novastore_wishlist', JSON.stringify([...state.wishlist]));
  updateWishlistUI();
  renderProducts(); // Refresh heart states
}

function updateWishlistUI() {
  wishlistBadge.textContent = state.wishlist.size;

  if (state.wishlist.size === 0) {
    wishlistItemsContainer.innerHTML = `
      <div style="text-align: center; padding: 2rem; color: var(--text-muted);">
        <i class="fa-regular fa-heart" style="font-size: 2.5rem; margin-bottom: 0.5rem; display: block;"></i>
        Your wishlist is currently empty.
      </div>
    `;
    return;
  }

  const wishlistedProducts = PRODUCTS.filter(p => state.wishlist.has(p.id));
  wishlistItemsContainer.innerHTML = wishlistedProducts.map(item => `
    <div class="wishlist-item">
      <img src="${item.image}" alt="${item.name}">
      <div style="flex: 1;">
        <h4 style="font-size: 0.95rem; font-weight: 700;">${item.name}</h4>
        <div style="font-weight: 700; color: var(--accent-color); font-size: 0.9rem;">$${item.price.toFixed(2)}</div>
      </div>
      <button class="btn btn-primary add-from-wishlist-btn" data-id="${item.id}" style="padding: 0.4rem 0.8rem; font-size: 0.8rem;">
        Add to Cart
      </button>
      <button class="remove-wishlist-item-btn" data-id="${item.id}" style="color: var(--text-muted); padding: 0.5rem;" title="Remove">
        <i class="fa-solid fa-xmark"></i>
      </button>
    </div>
  `).join('');
}

// Quick View Modal
function openQuickView(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const isWishlisted = state.wishlist.has(product.id);
  const oldPriceMarkup = product.oldPrice ? `<span class="price-old" style="font-size: 1.1rem;">$${product.oldPrice.toFixed(2)}</span>` : '';

  quickViewContent.innerHTML = `
    <div class="quick-view-grid">
      <img src="${product.image}" alt="${product.name}" class="quick-view-img">
      <div class="quick-view-details">
        <span class="product-category">${product.category}</span>
        <h2 class="quick-view-title">${product.name}</h2>
        <div class="product-rating" style="margin-bottom: 0.5rem;">
          <span>${renderStars(product.rating)}</span>
          <span class="rating-count">${product.rating} (${product.reviews} customer reviews)</span>
        </div>
        <div class="price-box" style="margin-bottom: 1rem;">
          <span class="price-current" style="font-size: 1.75rem;">$${product.price.toFixed(2)}</span>
          ${oldPriceMarkup}
        </div>
        <p class="quick-view-desc">${product.description}</p>
        
        <div style="display: flex; gap: 1rem; align-items: center; margin-top: 1.25rem;">
          <div class="quantity-stepper" style="padding: 0.2rem;">
            <button id="modalQtyMinus" style="width: 32px; height: 32px;">&minus;</button>
            <span id="modalQtyValue" style="width: 36px; font-size: 1rem;">1</span>
            <button id="modalQtyPlus" style="width: 32px; height: 32px;">&plus;</button>
          </div>
          <button id="modalAddCartBtn" class="btn btn-primary" style="flex: 1;">
            <i class="fa-solid fa-cart-shopping"></i> Add to Cart
          </button>
          <button id="modalWishlistBtn" class="action-btn" title="Save to wishlist" style="color: ${isWishlisted ? 'var(--color-danger)' : 'var(--text-secondary)'};">
            <i class="${isWishlisted ? 'fa-solid fa-heart' : 'fa-regular fa-heart'}"></i>
          </button>
        </div>
      </div>
    </div>
  `;

  let currentQty = 1;
  const modalQtyValue = document.getElementById('modalQtyValue');
  
  document.getElementById('modalQtyMinus').addEventListener('click', () => {
    if (currentQty > 1) {
      currentQty--;
      modalQtyValue.textContent = currentQty;
    }
  });

  document.getElementById('modalQtyPlus').addEventListener('click', () => {
    currentQty++;
    modalQtyValue.textContent = currentQty;
  });

  document.getElementById('modalAddCartBtn').addEventListener('click', () => {
    addToCart(product.id, currentQty);
    closeQuickView();
  });

  document.getElementById('modalWishlistBtn').addEventListener('click', () => {
    toggleWishlist(product.id);
    openQuickView(product.id); // re-render modal with updated heart
  });

  quickViewModal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeQuickView() {
  quickViewModal.classList.remove('active');
  document.body.style.overflow = '';
}

// Checkout Modal
function openCheckout() {
  if (state.cart.length === 0) {
    showToast('Your cart is empty!', 'danger');
    return;
  }

  // Close cart drawer
  closeCart();

  // Populate checkout figures
  const subtotal = state.cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const discount = subtotal * state.discountPercent;
  const shipping = subtotal >= 50 ? 0 : 9.99;
  const grandTotal = Math.max(0, subtotal - discount + shipping);

  checkoutSubtotal.textContent = `$${subtotal.toFixed(2)}`;
  checkoutGrandTotal.textContent = `$${grandTotal.toFixed(2)}`;

  checkoutFormView.style.display = 'block';
  orderSuccessView.style.display = 'none';
  checkoutModal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeCheckout() {
  checkoutModal.classList.remove('active');
  document.body.style.overflow = '';
}

// Cart Drawer open/close
function openCart() {
  cartDrawer.classList.add('active');
  cartDrawerOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  cartDrawer.classList.remove('active');
  cartDrawerOverlay.classList.remove('active');
  document.body.style.overflow = '';
}

// Toast Notifications
function showToast(message, type = 'info') {
  const toast = document.createElement('div');
  toast.className = 'toast';

  let iconHtml = '<i class="fa-solid fa-circle-info toast-icon info"></i>';
  if (type === 'success') {
    iconHtml = '<i class="fa-solid fa-circle-check toast-icon success"></i>';
  } else if (type === 'danger') {
    iconHtml = '<i class="fa-solid fa-circle-exclamation toast-icon danger"></i>';
  }

  toast.innerHTML = `${iconHtml}<span>${message}</span>`;
  toastContainer.appendChild(toast);

  // Trigger animation
  setTimeout(() => toast.classList.add('show'), 10);

  // Auto remove
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// Event Listeners
function setupEventListeners() {
  // Theme Toggle
  themeToggleBtn.addEventListener('click', () => {
    const nextTheme = state.theme === 'light' ? 'dark' : 'light';
    applyTheme(nextTheme);
  });

  // Cart Drawer
  cartToggleBtn.addEventListener('click', openCart);
  closeCartBtn.addEventListener('click', closeCart);
  cartDrawerOverlay.addEventListener('click', closeCart);
  startShoppingBtn.addEventListener('click', () => {
    closeCart();
    document.getElementById('catalog').scrollIntoView({ behavior: 'smooth' });
  });

  // Wishlist Modal
  wishlistToggleBtn.addEventListener('click', () => {
    wishlistModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  });
  closeWishlistBtn.addEventListener('click', () => {
    wishlistModal.classList.remove('active');
    document.body.style.overflow = '';
  });

  // Category Filtering
  categoryPills.addEventListener('click', (e) => {
    const pill = e.target.closest('.pill');
    if (!pill) return;

    categoryPills.querySelectorAll('.pill').forEach(p => p.classList.remove('active'));
    pill.classList.add('active');
    state.selectedCategory = pill.getAttribute('data-category');
    renderProducts();
  });

  // Sorting
  sortSelect.addEventListener('change', (e) => {
    state.sortOption = e.target.value;
    renderProducts();
  });

  // Search
  searchInput.addEventListener('input', (e) => {
    state.searchQuery = e.target.value;
    if (state.searchQuery.trim() !== '') {
      clearSearchBtn.style.display = 'block';
      searchFilterNotice.style.display = 'flex';
      searchKeyword.textContent = state.searchQuery;
    } else {
      clearSearchBtn.style.display = 'none';
      searchFilterNotice.style.display = 'none';
    }
    renderProducts();
  });

  clearSearchBtn.addEventListener('click', () => {
    searchInput.value = '';
    state.searchQuery = '';
    clearSearchBtn.style.display = 'none';
    searchFilterNotice.style.display = 'none';
    renderProducts();
  });

  resetSearchFilterBtn.addEventListener('click', () => {
    searchInput.value = '';
    state.searchQuery = '';
    clearSearchBtn.style.display = 'none';
    searchFilterNotice.style.display = 'none';
    renderProducts();
  });

  resetAllFiltersBtn.addEventListener('click', () => {
    searchInput.value = '';
    state.searchQuery = '';
    state.selectedCategory = 'all';
    clearSearchBtn.style.display = 'none';
    searchFilterNotice.style.display = 'none';
    categoryPills.querySelectorAll('.pill').forEach(p => {
      p.classList.toggle('active', p.getAttribute('data-category') === 'all');
    });
    renderProducts();
  });

  // Product Grid Delegated Events
  productGrid.addEventListener('click', (e) => {
    const addBtn = e.target.closest('.add-cart-btn');
    if (addBtn) {
      const id = parseInt(addBtn.getAttribute('data-id'), 10);
      addToCart(id);
      return;
    }

    const wishBtn = e.target.closest('.wishlist-btn');
    if (wishBtn) {
      const id = parseInt(wishBtn.getAttribute('data-id'), 10);
      toggleWishlist(id);
      return;
    }

    const quickBtn = e.target.closest('.quick-view-overlay-btn');
    if (quickBtn) {
      const id = parseInt(quickBtn.getAttribute('data-id'), 10);
      openQuickView(id);
      return;
    }
  });

  // Cart Drawer Delegated Events
  cartItemsList.addEventListener('click', (e) => {
    const plusBtn = e.target.closest('.qty-btn-plus');
    if (plusBtn) {
      const id = parseInt(plusBtn.getAttribute('data-id'), 10);
      updateCartQuantity(id, 1);
      return;
    }

    const minusBtn = e.target.closest('.qty-btn-minus');
    if (minusBtn) {
      const id = parseInt(minusBtn.getAttribute('data-id'), 10);
      updateCartQuantity(id, -1);
      return;
    }

    const removeBtn = e.target.closest('.remove-item-btn');
    if (removeBtn) {
      const id = parseInt(removeBtn.getAttribute('data-id'), 10);
      removeFromCart(id);
      return;
    }
  });

  // Clear Cart
  clearCartBtn.addEventListener('click', clearCart);

  // Apply Coupon
  applyCouponBtn.addEventListener('click', () => {
    const code = couponInput.value.trim().toUpperCase();
    if (VALID_COUPONS[code]) {
      state.discountPercent = VALID_COUPONS[code];
      state.couponCodeApplied = code;
      couponMessage.textContent = `Applied! You saved ${state.discountPercent * 100}% off!`;
      couponMessage.style.color = 'var(--color-success)';
      updateCartUI();
      showToast(`Coupon "${code}" applied successfully!`, 'success');
    } else {
      couponMessage.textContent = 'Invalid coupon code. Try "SAVE20"';
      couponMessage.style.color = 'var(--color-danger)';
    }
  });

  // Hero Coupon copy button
  heroPromoBtn.addEventListener('click', () => {
    navigator.clipboard.writeText('SAVE20').then(() => {
      showToast('Coupon "SAVE20" copied to clipboard!', 'success');
    }).catch(() => {
      showToast('Use coupon code "SAVE20" at checkout!', 'info');
    });
  });

  // Wishlist Modal Delegated Events
  wishlistItemsContainer.addEventListener('click', (e) => {
    const addBtn = e.target.closest('.add-from-wishlist-btn');
    if (addBtn) {
      const id = parseInt(addBtn.getAttribute('data-id'), 10);
      addToCart(id);
      return;
    }

    const removeBtn = e.target.closest('.remove-wishlist-item-btn');
    if (removeBtn) {
      const id = parseInt(removeBtn.getAttribute('data-id'), 10);
      toggleWishlist(id);
      return;
    }
  });

  // Quick View Close
  closeQuickViewBtn.addEventListener('click', closeQuickView);
  quickViewModal.addEventListener('click', (e) => {
    if (e.target === quickViewModal) closeQuickView();
  });

  // Wishlist Modal Close on background click
  wishlistModal.addEventListener('click', (e) => {
    if (e.target === wishlistModal) {
      wishlistModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  });

  // Checkout Modal Events
  checkoutBtn.addEventListener('click', openCheckout);
  closeCheckoutBtn.addEventListener('click', closeCheckout);
  checkoutModal.addEventListener('click', (e) => {
    if (e.target === checkoutModal) closeCheckout();
  });

  // Payment method toggle card details display
  const paymentMethodRadios = document.querySelectorAll('input[name="paymentMethod"]');
  const cardDetailsGroup = document.getElementById('cardDetailsGroup');
  paymentMethodRadios.forEach(radio => {
    radio.addEventListener('change', (e) => {
      cardDetailsGroup.style.display = e.target.value === 'card' ? 'block' : 'none';
    });
  });

  // Order Submit Form
  orderForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('custName').value.trim();
    const address = document.getElementById('custAddress').value.trim();
    const city = document.getElementById('custCity').value.trim();
    const zip = document.getElementById('custZip').value.trim();
    const grandTotal = checkoutGrandTotal.textContent;

    // Fill order confirmation
    const randomNum = Math.floor(100000 + Math.random() * 900000);
    receiptOrderId.textContent = `#NV-${randomNum}`;
    receiptCustomerName.textContent = name;
    receiptAddress.textContent = `${address}, ${city} ${zip}`;
    receiptTotalPaid.textContent = grandTotal;

    // Switch view
    checkoutFormView.style.display = 'none';
    orderSuccessView.style.display = 'block';

    // Clear cart
    state.cart = [];
    state.discountPercent = 0;
    state.couponCodeApplied = '';
    saveCart();
    updateCartUI();
  });

  // Success screen Done button
  successDoneBtn.addEventListener('click', () => {
    closeCheckout();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Newsletter Form
  newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    newsletterForm.reset();
    showToast('Thank you for subscribing to our newsletter!', 'success');
  });

  // Keyboard Accessibility
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeCart();
      closeQuickView();
      closeCheckout();
      wishlistModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
}

// Start
document.addEventListener('DOMContentLoaded', init);
