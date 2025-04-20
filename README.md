<div align="center">
<img src="./public/favicon.ico" width=20% alt="logo">
<h1>Swarm Squad | Web</h1>
</div>

<div align="center">
<h2>🚀 Getting Started</h2>
</div>

This guide will help you set up and run the Swarm Squad web application locally.

### ⚙️ Prerequisites

- Node.js (v20 or higher recommended - check your project's specific requirement if needed)
- pnpm (Make sure pnpm is installed globally: `npm install -g pnpm`)

### 📥 Installing Node.js with NVM

We recommend using Node Version Manager (NVM) to manage Node.js versions:

1.  Install NVM (if you haven't already):
    ```bash
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.2/install.sh | bash
    # or
    wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.2/install.sh | bash
    ```
    *(Remember to follow the NVM post-installation instructions, like closing and reopening your terminal or running the source command)*

2.  Install and use a suitable Node.js version (e.g., v20):
    ```bash
    nvm install 20
    nvm use 20
    ```

3.  Verify installations:
    ```bash
    node --version
    pnpm --version
    ```

### 🛠️ Setting Up the Project

1.  **Clone the repository (if you haven't already):**
    ```bash
    # Replace with your actual repository URL
    git clone <your-repository-url>
    cd <your-project-directory>
    ```
    *(Skip this step if you are already in the project directory)*

2.  **Install dependencies:**
    Use pnpm to install the project dependencies based on `pnpm-lock.yaml`:
    ```bash
    pnpm install
    ```

3.  **Run the development server:**
    ```bash
    pnpm run dev
    ```
    This will start the Next.js development server, typically available at http://localhost:3000.

### 📦 Building for Production

To create an optimized production build:

```bash
pnpm run build
```

The built application will be located in the `.next` directory.

### ▶️ Running Production Build

To run the application using the production build (after running `pnpm run build`):

```bash
pnpm run start
```

This will start a production server, typically also available at http://localhost:3000. 