import app from "./app";
import "@babel/polyfill";
import { sequelize } from "./database/database";

async function main() {
    await sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });
    await app.listen(4000);
    console.log('Server on port 4000');
}

main();