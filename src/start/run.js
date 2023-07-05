const { connect } = require("mongoose");
const config = require("../../config/config");
require("dotenv").config();

const run = async (app) => {
  await connect(config.ConnectionString);
  const PORT = config.PORT;

  app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
  });
};
module.exports = run;
