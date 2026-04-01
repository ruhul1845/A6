

# 🛒 DigiTools

### *Your All-in-One Premium Digital Marketplace*

A sleek, fully responsive e-commerce web app for discovering and purchasing premium digital tools — AI software, design assets, templates, and productivity products — all in one place.



---

## ✨ Features

### 🛍️ Smart Shopping Cart
Add and remove digital products with real-time cart updates, live item counts on the cart icon, duplicate prevention, and a smooth checkout flow — all powered by React state.

### 📱 Fully Responsive Design
Built mobile-first with Tailwind CSS. The layout gracefully adapts across all screen sizes — a hamburger menu on mobile, a 2-column grid on tablets, and a 3-column product/pricing/steps grid on desktop.

### ⚡ Instant Feedback with Toast Notifications
Every user action — adding to cart, removing items, or checking out — triggers a colour-coded toast notification (react-toastify), giving users clear, non-blocking confirmation in real time.

---

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| **React 19** | UI framework with `use()` hook for data fetching |
| **Vite** | Lightning-fast dev server & bundler |
| **Tailwind CSS v4** | Utility-first responsive styling |
| **react-toastify** | Toast notification system |
| **Lucide React** | Icon library (ShoppingCart, Menu, X, etc.) |
| **JSON (Public Assets)** | Tool & pricing data via `/tools.json` & `/pricing.json` |

---

## 📁 Project Structure

```
src/
├── assets/              # Images & icons (banner, social, step icons)
├── App.jsx              # Root layout — navbar, hero, cart, footer
├── Toolcard.jsx         # Fetches & renders product grid (Suspense)
├── Singlecard.jsx       # Individual product card with Buy Now button
├── Card.jsx             # Cart item row with Remove button
├── Pricing.jsx          # Fetches & renders pricing grid
├── Pricingcard.jsx      # Individual pricing tier card
├── UserCard.jsx         # "Get Started in 3 Steps" section
└── App.css              # Global styles
public/
├── tools.json           # Product data
└── pricing.json         # Pricing plan data
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js `v18+`
- npm or yarn

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-username/digitools.git

# 2. Move into the project folder
cd digitools

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---



## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">

Made with ❤️ using React & Tailwind CSS

</div>