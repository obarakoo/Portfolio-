# 🎭 Playwright Automation Project

![Playwright](https://img.shields.io/badge/-Playwright-45ba4b?style=for-the-badge&logo=Playwright&logoColor=white)
![Node.js](https://img.shields.io/badge/-Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## 📋 Overview
A robust **Test Automation Framework** built with [Playwright](https://playwright.dev/) to validate web applications. This project demonstrates modern E2E testing practices, including data-driven testing, POM (Page Object Model), and visual regression testing.

## 🚀 Features
- **Page Object Model (POM)**: Modular, reusable, and maintainable code structure.
- **Cross-Browser Testing**: Runs on Chromium, Firefox, and WebKit.
- **CI/CD Integration**: Ready for GitHub Actions / Jenkins pipelines.
- **HTML Reporting**: Detailed reports with screenshots and videos of failures.
- **Data-Driven Tests**: Efficient test coverage using external data sets.

## 📂 Project Structure
```bash
├── 📁 tests/              # Test specifications
│   ├── e2e/              # End-to-end user flows
│   └── api/              # API application tests
├── 📁 pages/              # Page Object Models (POM) - Locators & Methods
│   ├── LoginPage.js
│   └── DashboardPage.js
├── 📁 utils/              # Helper functions & test data
├── 📁 playwright-report/  # Test results output
├── playwright.config.js   # Framework configuration
└── package.json           # Dependencies & scripts
```

## 🛠️ Setup & Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
   
3. **Install Playwright browsers**
   ```bash
   npx playwright install
   ```

## 🏃 Running Tests

### Run all tests
```bash
npx playwright test
```

### Run specific test file
```bash
npx playwright test tests/login.spec.js
```

### Run in UI Mode (Interactive)
```bash
npx playwright test --ui
```

### View Report
```bash
npx playwright show-report
```

## 📝 Test Scenarios Covered
| ID | Feature | Description | Status |
|----|---------|-------------|--------|
| 01 | Login | Validate successful login with valid credentials | ✅ Pass |
| 02 | Login | Verify error message for invalid login | ✅ Pass |
| 03 | Cart | Add item to cart and verify count | ✅ Pass |
| 04 | Checkout | Complete checkout flow end-to-end | ✅ Pass |

## 🤝 Contributing
1. Fork the project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---
*Created by [Your Name] - Quality Assurance Specialist*
