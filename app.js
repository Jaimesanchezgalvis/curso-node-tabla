const { crearArchivo } = require("./helpers/multiplication");
const argv = require("./config/yargs");

console.clear();

crearArchivo(argv.b, argv.l, argv.h)
  .then((fileName) => console.log(fileName, "created"))
  .catch((err) => console.log(err));
