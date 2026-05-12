require("dotenv").config(); // load .env variables

const app = require("./src/app");
const PORT = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV || "development";

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Running in ${NODE_ENV} mode`);
});
