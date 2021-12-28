import { Sequelize } from "Sequelize";

const db = new Sequelize("mern", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
