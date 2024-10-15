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

        <!-- BASIC LOGIN PASSWORD - full module have to do several times -->
# 51.1 - firebase, react-router project setup
# 51.2 - login, register
# 51.3 - createContext to provide an , create autProvider context - didn't clear
# 51.4 - 02:00(important), createUserWithEmailAndPassword(auth, email, password) - very important to watch again to clear
# 51.5 - login, register, useEffect - observing if any user login(observe auth state change) - very important to watch again to clear
# 51.6 - user show user in Navbar, sign out
# 51.7 - private route, routes, !user navigate to login page, after reload privateRoute goes to login page solved, loading
# 51.8 - form reset and redirect to specific page after loggin, !user can't see specific menu in NavBar, google login, 

# 52.1 - 






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