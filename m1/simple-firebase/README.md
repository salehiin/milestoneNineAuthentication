# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


const Main = () => {
    return(
        <div>
            
        </div>
    );
};
export default Main;

# 49.7 - Recap of firebase Google authentication

# 50.1 - project setup
# 50.2 - form ready, register page, find form data
# 50.3 - how to use firebase, create user
# 50.4 - registration error handle, email - password field validation
# 50.5 - /[A-Z]/.test('asdfasf') - Reguler Expression, password show/hide, useState - to clear check frequently, react icon
# 50.6 - show-hide button position, checkbox - accept terms and conditions, login functionallity
# 50.7 - login success - error, login/register toggle, forgot password - watch again to clear
# 50.8 - verify email when create account, account create with name






# 1. npm create vite@latest name-of-your-project -- --template react
# 2. npm install react-router-dom # always need this!
# 3. npm install localforage match-sorter sort-by

# 4. tailwind css - https://tailwindcss.com/docs/guides/vite
   - npm install -D tailwindcss postcss autoprefixer
   - npx tailwindcss init -p
   - content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  - 
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

# 5. daisyUI - https://daisyui.com/docs/install/
    - npm i -D daisyui@latest
    - plugins: [require('daisyui')]

# 6. clean App.jsx
# 7. setup route in main.jsx
    - import {
      createBrowserRouter,
      RouterProvider,
      } from "react-router-dom";
    - const router = createBrowserRouter([
        {
            path: "/",
            element: <div>Hello world!</div>,
        },
        ]);

    - <RouterProvider router={router} />

# 8.         