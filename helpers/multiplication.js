const fs = require("fs");
const colors = require("colors");

const crearArchivo = async (base = 5, listar = false, hasta) => {
  try {
    let salida = "";
    let consola = "";

    for (let i = 1; i <= hasta; i++) {
      salida += `${i} X ${base} = ${i * base}\n`;
      consola += `${i} ${"X".red} ${colors.yellow(
        base
      )} = ${colors.green.italic(i * base)}\n`;
    }
    if (listar) {
      console.log("=====================".green);
      console.log("Table of:".bgGreen, base);
      console.log("=====================".green);
      console.log(consola);
    }

    fs.writeFileSync(`./salida/table-${base}.txt`, salida);

    return `table-${base}.txt`;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  crearArchivo,
};
