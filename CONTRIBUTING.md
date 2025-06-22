# Contributing to Tennerama Franchise Website

Thank you for your interest in contributing to the Tennerama Franchise Website! This document provides guidelines and information for contributors.

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- pnpm (recommended) or npm
- Git

### Development Setup

1. **Fork the repository**
2. **Clone your fork:**
   ```bash
   git clone https://github.com/YOUR_USERNAME/tennerama-franchise-website.git
   cd tennerama-franchise-website
   ```

3. **Install dependencies:**
   ```bash
   pnpm install
   ```

4. **Start the development server:**
   ```bash
   pnpm dev
   ```

5. **Create a feature branch:**
   ```bash
   git checkout -b feature/your-feature-name
   ```

## 📝 Development Guidelines

### Code Style

- Follow the existing code style and formatting
- Use meaningful variable and function names
- Add comments for complex logic
- Keep functions small and focused

### Component Guidelines

- Use functional components with hooks
- Follow the existing component structure
- Use Tailwind CSS for styling
- Implement responsive design
- Add proper accessibility attributes

### File Naming

- Use PascalCase for component files: `MyComponent.jsx`
- Use camelCase for utility files: `myUtility.js`
- Use kebab-case for CSS files: `my-component.css`

## 🔧 Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server |
| `pnpm build` | Build for production |
| `pnpm preview` | Preview production build |
| `pnpm lint` | Run ESLint |
| `pnpm lint:fix` | Fix ESLint issues |

## 📋 Pull Request Process

1. **Ensure your code follows the guidelines**
2. **Test your changes thoroughly**
3. **Update documentation if needed**
4. **Commit your changes with conventional commits:**
   ```bash
   git commit -m 'feat: add new feature'
   git commit -m 'fix: resolve navigation issue'
   git commit -m 'docs: update README'
   ```

5. **Push to your feature branch:**
   ```bash
   git push origin feature/your-feature-name
   ```

6. **Create a Pull Request**
   - Provide a clear description of your changes
   - Include screenshots if UI changes are made
   - Reference any related issues

## 🏷️ Commit Message Convention

We follow [Conventional Commits](https://www.conventionalcommits.org/):

### Types

- `feat:` New features
- `fix:` Bug fixes
- `docs:` Documentation changes
- `style:` Code style changes (formatting, missing semicolons, etc.)
- `refactor:` Code refactoring
- `test:` Test additions/changes
- `chore:` Build process or auxiliary tool changes

### Examples

```bash
feat: add language switching functionality
fix: resolve navigation button width issue
docs: update installation instructions
style: format code with prettier
refactor: simplify component logic
test: add unit tests for language hook
chore: update dependencies
```

## 🐛 Reporting Issues

When reporting issues, please include:

- **Description:** Clear description of the problem
- **Steps to reproduce:** Step-by-step instructions
- **Expected behavior:** What you expected to happen
- **Actual behavior:** What actually happened
- **Environment:** Browser, OS, device information
- **Screenshots:** If applicable

## 📞 Getting Help

If you need help or have questions:

- Check the existing issues and discussions
- Create a new issue for bugs or feature requests
- Contact the maintainers

## 🙏 Thank You

Thank you for contributing to the Tennerama Franchise Website! Your contributions help make this project better for everyone. 