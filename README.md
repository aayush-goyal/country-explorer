# README
## Setup and Run Instructions

1. **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/aion-country-app.git
    cd aion-country-app
    ```

2. **Install dependencies:**
    ```bash
    yarn install
    ```

3. **Run the development server:**
    ```bash
    yarn dev
    ```
    The app will be available at `http://localhost:3000`.

---

## Credentials for Mock Login

- **Username:** `testuser`
- **Password:** `password123`

---

## Design Choices, Assumptions, and SSG/SSR Explanation

- **Design Choices:**  
  The app uses a clean, responsive UI with accessible components. Country data is displayed in a list layout for easy browsing.
- **Assumptions:**  
  - All country data is available via the public API.
  - Authentication is only required for certain routes.

---

## State Management Solution

The app uses local storage to save user data across browser sessions.

---

## Link to Deployed Application

[Country Explorer App](https://country-explorer-82265698841.asia-south1.run.app/)
