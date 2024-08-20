# Frontend Documentation

## Folder Structure

```bash
project-root
├── frontend
    ├── public
    ├── src
    │   ├── assets/
    │   ├── components/
    │   ├── context
    │   │   └── AuthContext.jsx
    │   ├── hooks/
    │   ├── pages
    │   │   ├── About
    │   │   │   ├── About.jsx
    │   │   │   └── About.scss
    │   │   ├── Blogs
    │   │   │   ├── Blogs.jsx
    │   │   │   └── Blogs.scss
    │   │   ├── Contact
    │   │   │   ├── Contact.jsx
    │   │   │   └── Contact.scss
    │   │   ├── Home
    │   │   │   ├── Home.jsx
    │   │   │   └── Home.scss
    │   │   ├── Dashboard
    │   │   │   ├── Dashboard.jsx
    │   │   │   └── Dashboard.scss
    │   │   ├── Profile
    │   │   │   ├── Profile.jsx
    │   │   │   └── Profile.scss
    │   │   ├── Authentication
    │   │   │   ├── Login
    │   │   │   │   ├── Login.jsx
    │   │   │   │   └── Login.scss
    │   │   │   └── Register
    │   │   │       ├── Register.jsx
    │   │   │       └── Register.scss
    │   ├── routes
    │   │   ├── AppRoutes.jsx        # Main routing logic
    │   │   ├── InnerRoutes.jsx      # Authenticated routes
    │   │   ├── OuterRoutes.jsx      # Public routes
    │   │   ├── routes.jsx      # all routes
    │   ├── services/
    │   │   ├── authService.jsx
    │   ├── store
    │   │   ├── rootReducer.jsx
    │   │   └── store.jsx
    │   ├── App.jsx
    │   ├── main.js
    │   └── styles
    │       ├── _mixins.scss
    │       ├── _variables.scss
    │       └── globalStyles.scss
    ├── .env
    ├── vite.config.js
    ├── package.json
    └── README.md
```
