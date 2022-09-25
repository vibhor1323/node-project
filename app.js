import express from "express";
import sequelize from "sequelize";
import cookieParser from "cookie-parser";
// import db from "./server/models";
import userRoutes from "./server/routes/userRoutes";
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// db.sequelize.sync({ force: true }).then(() => {
//   console.log("db has been re sync");
// });

app.use("/api/users", userRoutes);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
export default app;
