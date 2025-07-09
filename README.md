# Albatross V1

This is a monorepo for the Albatross V1 project, managed with pnpm and Turborepo.

## Project Structure

- `apps`: Contains the individual applications.
  - `api`: The main API for the project.
- `packages`: Intended for shared libraries and components (currently empty).

## Environment Setup

To get started with this project, you'll need to have [Node.js](https://nodejs.org/) and [pnpm](https://pnpm.io/installation) installed.

1.  **Clone the repository:**

    ```bash
    git clone <repository-url>
    cd albatross-v1
    ```

2.  **Install dependencies:**

    ```bash
    pnpm install
    ```

## Available Scripts

This project uses Turborepo to manage tasks. Here are some common commands you might use:

-   **Build all apps and packages:**

    ```bash
    pnpm build
    ```

-   **Start the development server for the API:**

    ```bash
    pnpm dev --filter=api
    ```

-   **Run tests:**

    ```bash
    pnpm test
    ```

-   **Lint all code:**

    ```bash
    pnpm lint
    ```

## What's Set Up So Far

-   **Monorepo**: The project is structured as a monorepo using pnpm workspaces and Turborepo.
-   **API Application**: A basic API application exists in `apps/api`.
-   **TypeScript**: The project is set up to use TypeScript.
-   **Code Quality**: ESLint, Prettier, and commit linting are configured to ensure code quality and consistency.
-   **CI/CD**: A continuous integration pipeline is set up with GitHub Actions in `.github/workflows/ci.yml` to automatically run tests and linting on pushes and pull requests.
