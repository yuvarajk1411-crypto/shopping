# NovaStore — Modern E-Commerce Web Application

A responsive shopping website built with semantic HTML5, modern CSS3, and vanilla JavaScript. Features a real-time product catalog, category filtering, live search, wishlist management, an interactive slide-out cart drawer with dynamic free shipping progress, discount coupon handling, and a secure mock checkout flow.

---

## ✨ Features

- **🛍️ Dynamic Product Catalog**: Browse products across Electronics, Fashion, Accessories, and Home & Living with realistic imagery, badges, ratings, and pricing.
- **⚡ Real-Time Search & Sorting**: Instant keyword search and multi-criteria sorting (Price: Low/High, Rating, Alphabetical).
- **🛒 Slide-Out Shopping Cart**:
  - Live quantity adjustment (+/-) and removal.
  - Interactive **Free Shipping Progress Bar** ($50 threshold).
  - Discount promo code engine (`SAVE20` for 20% off, `NOVA10` for 10% off).
  - Subtotal, shipping calculation, and grand total.
- **❤️ Wishlist System**: Save favorite items with persistent storage using `localStorage`.
- **🔍 Quick View Modal**: Inspect product specifications, high-res images, and adjust quantities prior to adding to cart.
- **💳 Multi-Step Checkout**: Shipping details, payment method selection (Credit Card, PayPal, COD), and instant order confirmation receipt.
- **🌓 Light / Dark Mode**: Seamless toggle between sleek light and dark themes with persistent preference.
- **📱 Fully Responsive**: Fluid, mobile-first design with smooth micro-animations.

---

## 🚀 Getting Started

No build tools or installations are required!

### Run Locally
Simply open `index.html` in any modern web browser:
- **Windows**: Double-click `index.html` or run:
  ```powershell
  Start-Process index.html
  ```
- Or serve using any static server:
  ```bash
  # Using Python
  python -m http.server 3000

  # Using Node (npx)
  npx serve
  ```

---

## 🗂️ Project Structure

```
hackton/
│
├── index.html        # Main semantic markup and modal dialogs
├── style.css         # Modern styling, CSS variables, dark mode & responsiveness
├── app.js            # State management, cart calculations, filter logic, UI events
├── .gitignore        # Standard ignore patterns
└── README.md         # Project documentation and guide
```

---

## 🏷️ Test Coupons
Try these discount codes in the cart drawer:
- `SAVE20` — 20% off your entire order
- `NOVA10` — 10% off your entire order
- `WELCOME` — 15% off your entire order

---

## 📄 License
This project is open source and available under the [MIT License](LICENSE).
