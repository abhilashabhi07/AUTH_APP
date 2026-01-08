# 🔐 Angular Authentication Frontend

A comprehensive Angular application featuring secure authentication, route protection, and modern UI with stunning animations. Built with Angular 21 and TypeScript.

## 📋 Table of Contents

- [Features](#-features)
- [Prerequisites](#-prerequisites)
- [Installation](#-installation)
- [Running the Application](#-running-the-application)
- [Project Structure](#-project-structure)
- [Authentication Flow](#-authentication-flow)
- [API Integration](#-api-integration)
- [Environment Configuration](#-environment-configuration)
- [Troubleshooting](#-troubleshooting)
- [Build Commands](#-build-commands)
- [Testing](#-testing)
- [Contributing](#-contributing)
- [License](#-license)

## ✨ Features

### 🔐 Authentication & Security
- **JWT Token Authentication** - Secure login with token storage
- **Route Protection** - AuthGuard prevents unauthorized access
- **Token Expiry Handling** - Automatic logout on expired tokens
- **HTTP Interceptors** - Automatic token injection and 401 handling

### 🎨 Modern UI & UX
- **Responsive Design** - Works on all screen sizes
- **Stunning Animations** - Smooth transitions and effects
- **Password Validation** - Real-time validation with visual feedback
- **Form Validation** - Comprehensive input validation
- **Loading States** - Professional loading indicators
- **Error Handling** - User-friendly error messages

### 🚀 Advanced Features
- **Environment Configuration** - Dev/Prod environment settings
- **Mock API Fallback** - Works without external API dependencies
- **Token Persistence** - Session management across browser refreshes
- **TypeScript** - Full type safety throughout the application

## 🛠️ Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**
- **Angular CLI** (v21 or higher) - Install globally:
  ```bash
  npm install -g @angular/cli
  ```

### Verify Installation
```bash
node --version
npm --version
ng version
```

## 📦 Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd auth-api
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Verify installation:**
   ```bash
   npm list
   ```

## 🚀 Running the Application

### Development Server
```bash
npm start
# or
ng serve
```

The application will be available at:
- **Local**: `http://localhost:4200/`
- **Network**: `http://localhost:4200/` (accessible from other devices on the network)

### Production Build
```bash
npm run build
# or
ng build --configuration production
```

### Serve Production Build
```bash
npm install -g serve
serve -s dist/auth-api -l 4200
```

## 📁 Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── login/
│   │   │   ├── login.ts
│   │   │   ├── login.html
│   │   │   └── login.css
│   │   └── dashboard/
│   │       ├── dashboard.ts
│   │       ├── dashboard.html
│   │       └── dashboard.css
│   ├── services/
│   │   └── auth.service.ts
│   ├── guards/
│   │   └── auth.guard.ts
│   ├── interceptors/
│   │   └── auth.interceptor.ts
│   ├── app.config.ts
│   ├── app.routes.ts
│   ├── app.ts
│   └── app.html
├── environments/
│   ├── environment.ts
│   └── environment.prod.ts
├── styles.css
├── main.ts
└── index.html
```

## 🔐 Authentication Flow

### Login Process
1. **User enters credentials** (username/password)
2. **Form validation** - Checks password requirements
3. **API call** - Authenticates with ReqRes API
4. **Token storage** - JWT stored in localStorage with expiry
5. **Route navigation** - Redirects to protected dashboard

### Password Requirements
- ✅ At least 6 characters long
- ✅ At least 1 uppercase letter (A-Z)
- ✅ At least 1 lowercase letter (a-z)
- ✅ At least 1 numeric character (0-9)

### Demo Credentials
```
Username: any text (e.g., admin)
Password: Admin123 (meets all requirements)
```

## 🌐 API Integration

### Authentication API
- **Endpoint**: `https://reqres.in/api/login`
- **Method**: POST
- **Payload**: `{ "email": "user-input", "password": "password" }`
- **Note**: Username field gets mapped to email for API compatibility
- **Response**: `{ "token": "jwt-token-here" }`

### Data API (Dashboard)
- **Endpoint**: `https://jsonplaceholder.typicode.com/users`
- **Method**: GET
- **Fallback**: Mock data if API unavailable

### HTTP Interceptors
- **AuthInterceptor**: Automatically adds Authorization header
- **Error Handling**: Handles 401 responses with auto-logout

## ⚙️ Environment Configuration

### Development (`environment.ts`)
```typescript
export const environment = {
  production: false,
  apiUrl: 'https://reqres.in/api',
  dataApiUrl: 'https://jsonplaceholder.typicode.com',
  tokenExpiryHours: 24
};
```

### Production (`environment.prod.ts`)
```typescript
export const environment = {
  production: true,
  apiUrl: 'https://reqres.in/api',
  dataApiUrl: 'https://jsonplaceholder.typicode.com',
  tokenExpiryHours: 24
};
```

## 🔧 Troubleshooting

### Common Issues & Solutions

#### 1. **Port 4200 Already in Use**
```bash
# Kill process using port 4200
npx kill-port 4200

# Or run on different port
ng serve --port 4201
```

#### 2. **Node Modules Issues**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
```

#### 3. **Angular CLI Not Found**
```bash
# Install Angular CLI globally
npm install -g @angular/cli

# Or use npx
npx ng serve
```

#### 4. **Build Errors**
```bash
# Clear Angular cache
rm -rf .angular

# Rebuild
ng build
```

#### 5. **API Connection Issues**
- The app includes automatic fallback to mock data
- Check browser console for network errors
- Ensure internet connection for API calls

#### 6. **Animation Performance Issues**
- Animations are optimized for 60fps
- Disable animations in browser dev tools if needed
- Check `prefers-reduced-motion` setting

#### 7. **Token Storage Issues**
- Clear localStorage: `localStorage.clear()`
- Check browser developer tools > Application > Local Storage
- Tokens expire after 24 hours automatically

### Debug Mode
```bash
# Enable verbose logging
ng serve --verbose

# Open dev tools in browser for console logs
```

## 📜 Build Commands

### Development
```bash
npm start              # Start dev server
ng serve              # Alternative dev server
ng serve --port 3000  # Custom port
```

### Production
```bash
npm run build         # Production build
ng build             # Alternative build
ng build --watch     # Watch mode build
```

### Testing
```bash
npm test              # Run unit tests
ng test              # Alternative test runner
npm run test:ci      # CI test mode
```

### Code Quality
```bash
ng lint               # Lint code
ng lint --fix        # Auto-fix linting issues
```

### Utilities
```bash
ng generate component my-component  # Generate component
ng generate service my-service      # Generate service
ng generate guard my-guard         # Generate guard
ng generate interceptor my-interceptor  # Generate interceptor
```

## 🧪 Testing

### Unit Tests
```bash
npm test
```
- Uses Vitest test runner
- Tests authentication service
- Tests route guards
- Tests form validation

### End-to-End Tests
```bash
npm run e2e
```
- Tests complete user workflows
- Tests authentication flow
- Tests route protection

### Test Coverage
```bash
npm run test:coverage
```
- Generates coverage reports
- View reports in `coverage/` directory

## 🤝 Contributing

1. **Fork the repository**
2. **Create a feature branch:**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes:**
   ```bash
   git commit -m 'Add amazing feature'
   ```
4. **Push to the branch:**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### Code Style
- Follow Angular style guide
- Use TypeScript strict mode
- Run linting before commits
- Add tests for new features


## 🙏 Acknowledgments

- **Angular Team** - For the amazing framework
- **ReqRes** - For the authentication API
- **JSONPlaceholder** - For the mock data API
- **Open Source Community** - For inspiration and tools


Built with ❤️ using Angular 21
