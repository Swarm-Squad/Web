<div align="center">
<img src="./public/favicon.ico" width=20% alt="logo">
<h1>Swarm Squad | Web</h1>
</div>

<div align="center">
<h2>⚙️ Prerequisites</h2>
</div>

- Node.js (v20 or higher recommended - check your project's specific requirement if needed)
- pnpm (Make sure pnpm is installed globally)

<div align="center">
<h2>🛠️ Project Setup</h2>
</div>

We recommend using Node Version Manager (NVM) to manage Node.js versions:

1.  Install NVM and pnpm (if you haven't already):

    ```bash
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.2/install.sh | bash

    curl -fsSL https://get.pnpm.io/install.sh | sh -
    ```

2.  Install and use a suitable Node.js version (e.g., v22):

    ```bash
    nvm install 22
    nvm use 22
    ```

3.  Verify installations:
`bash
    node --version
    pnpm --version
    `
<div align="center">
<h2>🚀 Getting Started</h2>
</div>

4.  **Clone the repository (if you haven't already):**

    ```bash
    git clone https://github.com/Swarm-Squad/Web.git
    cd Web
    ```

5.  **Install dependencies:**

    ```bash
    pnpm install
    ```

6.  **Run the development server:**

    ```bash
    pnpm run dev
    ```

7.  **Building for Production:**

    ```bash
    pnpm run build
    ```

8.  **Running Production Build:**
    ```bash
    pnpm run start
    ```
9.  **Linting & Formatting:**
    ```bash
    pnpm lint
    pnpm format
    ```
