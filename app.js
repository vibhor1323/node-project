import express from "express";
import sequelize from "sequelize";
import cookieParser from "cookie-parser";
import db from "./server/models/index.js";
import userRoutes from "./server/routes/userRoutes.js";
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

db.sequelize.sync({ force: true }).then(() => {
  console.log("db has been re sync");
});

app.use("/api/users", userRoutes);

app.listen(port, () => console.log(`App listening on port ${port}!`));
export default app;
