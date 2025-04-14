# Fruit Shop Frontend

A modern React frontend for the Fruit Shop application, built with React, Bootstrap, and Vite.

## Features

- User authentication with JWT tokens
- Responsive design that works on desktop and mobile
- Fruit catalog display with grid layout
- Shopping cart functionality
- Real-time cart updates
- Clean, modern UI with Bootstrap styling

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Backend API running at http://localhost:8000

## Installation

1. Clone the repository:
```bash
git clone https://github.com/BenDowswell/fruitshop-frontend.git
cd fruitshop-frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to http://localhost:5173

## Project Structure

```
fruitshop-frontend/
├── public/              # Static assets
├── src/                 # Source code
│   ├── assets/          # Images and other assets
│   │   ├── Cart.jsx     # Shopping cart component
│   │   ├── FruitList.jsx # Fruit catalog component
│   │   ├── Login.jsx    # Authentication component
│   │   └── Navbar.jsx   # Navigation bar component
│   ├── App.jsx          # Main application component
│   ├── App.css          # Application styles
│   ├── index.css        # Global styles
│   └── main.jsx         # Application entry point
├── index.html           # HTML template
├── package.json         # Project dependencies
└── vite.config.js       # Vite configuration
```

## Authentication

The application uses JWT tokens for authentication. The login process:

1. User enters credentials
2. Frontend sends credentials to `/auth/login` endpoint
3. Backend returns a JWT token
4. Token is stored in localStorage
5. Token is included in subsequent API requests

## API Endpoints

- Login: `http://localhost:8000/auth/login`
- Fruits: `http://localhost:8000/fruits/`

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Technologies Used

- React - UI library
- Bootstrap - CSS framework
- Vite - Build tool
- Fetch API - HTTP requests

## License

MIT
