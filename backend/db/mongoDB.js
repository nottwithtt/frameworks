const mongoose = require("mongoose");

mongoose.connection.on("open", () => console.log("db connected"));
//quitar conexion en duro
async function connectDb({ host, port, dbName }) {
  const uri = `mongodb+srv://${host}:${port}/${dbName}`;
  await mongoose.connect(uri, { useNewUrlParser: true });
}

module.exports = connectDb;
