# React + Vite

* FROM REACT+VITE: [
    This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.
    Currently, two official plugins are available:
    - [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
    - [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
]

* Installs:
    - peel
        - npm install axios react-router-dom react-bootstrap
    - banana
        - npm install bcrypt jsonwebtoken


Chase Poulton
BananaBooBoo.com          
             /\
            V  \
             \  \
             \,'.`-.
             |\ `. `.                                  _
              (\  `. `-.                           _,.-: )
                \ \   `. `-._              __..--' ,-';  /
                 \ `.   `-.   `-..___..---'   _.--'  ,  /
                  `. `.    `-._        __..--'     ,'  /
                    `. `-_     ``--..''       _.-'   ,'
                      `-_ `-.___        __,--'     ,'
                         `-.__  `----"""     __.-'
                               `--..____..--'                         
__________    _____    _______      _____    _______      _____   
\______   \  /  _  \   \      \    /  _  \   \      \    /  _  \  
 |    |  _/ /  /_\  \  /   |   \  /  /_\  \  /   |   \  /  /_\  \ 
 |    |   \/    |    \/    |    \/    |    \/    |    \/    |    \
 |______  /\____|__  /\____|__  /\____|__  /\____|__  /\____|__  /
        \/         \/         \/         \/         \/         \/ 
__________ ________   ________ __________ ________   ________     
\______   \\_____  \  \_____  \\______   \\_____  \  \_____  \    
 |    |  _/ /   |   \  /   |   \|    |  _/ /   |   \  /   |   \   
 |    |   \/    |    \/    |    \    |   \/    |    \/    |    \  
 |______  /\_______  /\_______  /______  /\_______  /\_______  /  
        \/         \/         \/       \/         \/         \/   

* Description: A banana forum with a banana convertor for weight, 
    distance, etc; talk about banana recipes, conversions, fun facts, 
    and books!

* Instructions/Installation:
    - In Terminal @ peel(client/frontend):
        - npm install react react-bootstrap axios react-router-dom
    - In Terminal @ banana(server/backend):
        - npm init -y
        - npm install bcrypt jsonwebtoken express ejs mysql2 cors dotenv

* Additional Information:

* Tech Used: HTML, CSS, JS, React, Vite, React Router, Bootstrap, Axios

* Ideas for future improvements:
    1. Improvement 1: Change layout to a typical form instead of tables.
    2. Improvement 2: Update page navigation/location so posting, editing, and deleteting questions and answers takes user back to their previous page before selecting a specific action (it currently always routes user back to the home page).
    3. Improvement 3

* User stories:
    1. As Ricky, I want to ask questions about recipes, so I can get suggestions from other users.
    2. As Timmy, I want to convert distances and weights to bananas, so I can share funny conversions with other users.
    3. As Samantha, I want to look through other users questions, so I can provide answers to questions on things I know.

* Categories:
    - Banana Convertor - Nanerverter
    - Banana Recipes
    - Banana Fun Facts
    - Banana Books



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