const fs = require("fs");

const ARCHIVO_CITAS = "citas.json";

function registrar(nuevaCita) {
  let arrayCitas = [];

  // Validar que los argumentos sean correctos
  if (
    !Array.isArray(nuevaCita) ||
    nuevaCita.length !== 5 ||
    nuevaCita.some((e) => !e) //busca un falsy
  ) {
    console.log(
      "❌ Error: Debes ingresar los 5 datos requeridos y ninguno puede estar vacío."
    );
    return;
  }

  // Leer citas existentes
  try {
    if (fs.existsSync(ARCHIVO_CITAS)) {
      const contenidoCitas = fs.readFileSync(ARCHIVO_CITAS, "utf-8");
      arrayCitas = JSON.parse(contenidoCitas);
    }
  } catch (error) {
    console.log(
      "⚠️  Error al leer el archivo de citas. Se creará uno nuevo."
    );
    // Si hay un error, archivo no existe o json sin el formato esperado, se empieza con un array vacío.
    arrayCitas = [];
  }

  const claves = ["nombre", "edad", "animal", "color", "enfermedad"];
  const citaARegistrar = {};
  claves.forEach((clave, i) => {
    citaARegistrar[clave] = nuevaCita[i];
  });

  arrayCitas.push(citaARegistrar);

  try {
    fs.writeFileSync(ARCHIVO_CITAS, JSON.stringify(arrayCitas, null, 2));
    console.log("✅ Cita Registrada");
  } catch (error) {
    console.log("❌ Error al guardar la cita:", error.message);
  }
}

/********leer**********/
function leer() {
  try {
    const contenidoCitas = fs.readFileSync(ARCHIVO_CITAS, "utf-8");
    const arrayCitas = JSON.parse(contenidoCitas);

    if (arrayCitas.length === 0) {
      console.log("ℹ️ No hay citas registradas.");
      return;
    }

    console.log("📖 Citas registradas:");
    arrayCitas.forEach((cita) => console.log(cita));
  } catch (error) {
    /* error.code === "ENOENT" */
      console.log("❌ Error al leer el archivo de citas:", error.message);
    }
  }


module.exports = { registrar, leer };

