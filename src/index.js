import dotenv from "dotenv";
import {app} from "./app.js"
import { connectDB } from "./db/index.js";

dotenv.config({
  path: "./.env",
});

const PORT = process.env.PORT || 4300;

connectDB()
  .then((response) => {
    app.listen(PORT, () => console.log(`Server listening on PORT: ${PORT}`));
  })
  .catch((error) => console.log(`Error while conneting Server: ${error}`));
