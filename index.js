import express from "express";
import bodyParser from "body-parser";
import env from "dotenv";
import bookRoutes from "./routes/bookRoutes.js";
import quoteRoutes from "./routes/quoteRoutes.js";
import miscRoutes from "./routes/miscRoutes.js";
import staticRoutes from "./routes/staticRoutes.js";

env.config();
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/",bookRoutes);
app.use("/",quoteRoutes);
app.use("/",miscRoutes);
app.use("/",staticRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
