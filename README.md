
# Paradise Nursery V2

A React-based shopping cart application for a plant nursery. Built with Redux for state management and modular CSS for scoped styling.

## Features
- View and manage cart items
- Quantity controls (+/-) with minimum quantity of 1
- Delete individual items and clear the entire cart
- Responsive layout for mobile and desktop
- Alert popup for checkout ("Coming Soon")
- Modular CSS for scoped and maintainable styling

## Styling Approach
While global CSS or styled-components could have been used, I chose `module.css` to keep styles scoped to individual components. This improves maintainability and avoids style conflicts, making the codebase easier to scale and debug.

## Getting Started

### Prerequisites
- Node.js
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/Varhgar/paradise-nursery-v2.git

# Navigate into the project directory
cd paradise-nursery-v2

# Install dependencies
npm install

# Start the development server
npm start
```

## Folder Structure
```
src/
├── components/
│   └── Header/
├── pages/
│   └── CartPage/
├── store/
│   └── cartSlice.js
├── App.js
└── index.js
```

## Future Plans
- Integrate a real checkout flow
- Add backend API for cart persistence
- Implement user authentication and login
- Add product filtering and search features

## License
This project is open source and available under the MIT License.
