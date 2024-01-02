const app = require("./app");
require("dotenv").config();
const { mongoConnect } = require("./services/mongo");
const PORT = process.env.PORT || 8000;
async function startServer() {
  await mongoConnect();
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
}
startServer();
