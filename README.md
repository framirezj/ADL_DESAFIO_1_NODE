# Gestor de Citas para Veterinaria (CLI)

Esta es una aplicación de línea de comandos (CLI) desarrollada en Node.js para gestionar las citas de una veterinaria. Permite registrar nuevas citas y consultar todas las que han sido guardadas.

La información se almacena de forma persistente en un archivo `citas.json`.

## Requisitos

- Node.js (versión 12 o superior recomendada).

## Instalación

1.  Clona este repositorio o descarga los archivos en un directorio de tu elección.
2.  Abre una terminal o consola en el directorio del proyecto.

No se requieren dependencias externas, por lo que no es necesario ejecutar `npm install`.

## Uso

La aplicación se ejecuta desde la terminal usando el siguiente formato:

```bash
node index.js [operacion] [argumentos...]
```

### Operaciones Disponibles

#### 1. Registrar una nueva cita

Usa la operación `registrar` para añadir una nueva cita al sistema. Debes proporcionar 5 argumentos en el siguiente orden: nombre de la mascota, edad, tipo de animal, color y el síntoma o enfermedad.

**Sintaxis:**
```bash
node index.js registrar <nombre> <edad> <animal> <color> <enfermedad>
```

**Importante:** Si alguno de los argumentos contiene espacios, debes encerrarlo entre comillas dobles (`"`).

**Ejemplo:**
```bash
node index.js registrar Rocky "3 años" Perro Negro "No quiere comer"
```

Al ejecutar el comando, se guardará la cita en el archivo `citas.json` y verás un mensaje de confirmación.

#### 2. Leer todas las citas

Usa la operación `leer` para mostrar en la consola todas las citas que han sido registradas.

**Sintaxis:**
```bash
node index.js leer
```

**Ejemplo de salida:**
```json
{ "nombre": "Rocky", "edad": "3 años", "animal": "Perro", "color": "Negro", "enfermedad": "No quiere comer" }
{ "nombre": "Misha", "edad": "5 años", "animal": "Gato", "color": "Blanco", "enfermedad": "Vómitos" }
```