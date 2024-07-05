# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

* Installs:
    - peel
        - npm install axios react-router-dom react-bootstrap
    - banana
        - npm install bcrypt jsonwebtoken






* Database Layout:

    bananabooboo {
        answers {
            answer_id,
            answer,
            question_id,
            user_id,
            answer_created
        },
        categories {
            category_id {
                1,
                2,
                3,
                4
            },
            category_name {
                conversion,
                recipes
                funfacts,
                books,
            },
        },
        questions {
            question_id,
            question_title
            question,
            category_id,
            user_id,
            question_created
        },
        users {
            user_id,
            user_name,
            user_email,
            password,
            user_created
        },
    }