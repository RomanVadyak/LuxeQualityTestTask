# 🧪 Swag Labs Luxe Quality Test Task

This project contains automated end-to-end tests for [Swag Labs](https://www.saucedemo.com/) — a demo e-commerce site used for practicing UI testing.  
The tests are implemented using WebdriverIO, Mocha, and Chai.

## 📦 Technologies

- [Node.js](https://nodejs.org/)
- [WebdriverIO](https://webdriver.io/)
- [Mocha](https://mochajs.org/)
- [Chai](https://www.chaijs.com/)

## 🚀 How to Run the Tests

1. Clone the repository:
   ```bash
   git clone https://github.com/RomanVadyak/LuxeQualityTestTask.git
   cd LuxeQualityTestTask
2.Install dependencies:
  ```bash
  npm install
```
3.Run the tests:
  ```bash
  npx wdio run wdio.conf.js
```
   **Test Scenarios**
✅ **Valid Login Test**
   Verifies login with correct credentials:

   standard_user

   secret_sauce

❌ **Invalid Login Test**
   Checks for error message when logging in with incorrect credentials:

   Expected message: "Epic sadface: Username and password do not match any user in this service"

🛒 **Luxe Quality Checkout Flow**
   Full purchase flow:

   Adding items to the cart

   Verifying cart badge

   Filling out user information

   Verifying item prices, tax, and total

   Completing the order

   Confirming the message "Thank you for your order!"


📁 **Project Structure**
```
├── test/
├── pages/
│   ├── addToCart.page.js
│   ├── checkout.page.js
│   ├── finish.page.js
│   ├── itemPrices.page.js
│   ├── login.page.js
│   └── titleNames.page.js
├── specs/
│   ├── test1.e2e.js
├── .gitignore
├── package-lock.json
├── package.json
├── README.md
└── wdio.conf.js
```
👨‍💻 Author: Roman Vadyak
