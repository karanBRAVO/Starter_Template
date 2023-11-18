# Starter Template

- Through this code, you will get a basic starter template for your backend.
- If you want are using `node js`, `express js`, `mongodb` then this is the right place to use.
- `NOTE:` add the `.env` to `.gitignore` before you share your api code with anyone.

## Setup

- Make sure git in installed in your system
- Just open up your terminal and run

        git clone https://github.com/karanBRAVO/Starter_Template.git

- Move to the folder cloned

        cd ./Starter_Template

- Run the command to install node_modules

        npm install

## Run command

- Install the `nodemon` as dev-dependency

        npm install -dev nodemon

- Run the command to start the server and connect to the database

        npm run dev

## Testing

- test it on postman
- open up new request and make a GET request to <http://localhost>:[PORT]/api/test
- replace the port with the port number shown on terminal

## Folder Structure

- You can see that below folder are generated

        |- node_modules/
        |- src/
                |- routes/*.js
                |- controllers/*.js
                |- models/*.js
                |- connection/*.js
        index.js
        .env
        .gitignore
        package-lock.json
        package.json
        README.md

- You can change the structure as you like

## License

- MIT License
