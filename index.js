const { registrar, leer } = require('./operaciones');

const argumentos = process.argv.slice(2); //operación + argumentos

const mostrarAyuda = () => {
  console.log("\nUso: node index.js [operacion] [argumentos]");
  console.log("--------------------------------------------");
  console.log("Operaciones disponibles:");
  console.log("  registrar  - Registra una nueva cita.");
  console.log("  leer       - Muestra todas las citas registradas.");
  console.log("\nEjemplos:");
  console.log(
    '  node index.js registrar Benito "2 años" perro blanco "dolor de estómago"'
  );
  console.log("  node index.js leer\n");
};

if (argumentos.length === 0) {
  console.log("⚠️ Debes ingresar una operación.");
  mostrarAyuda();
  process.exit(1);
}

const operacion = argumentos[0]; //operación
const cita = argumentos.slice(1); //argumentos

switch (operacion) {
  case "registrar":
    registrar(cita);
    break;
  case "leer":
    leer();
    break;
  default:
    console.log(`❌ Operación no reconocida: '${operacion}'.`);
    mostrarAyuda();
    break;
}
