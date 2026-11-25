const fs = require("fs");

const archivo = "notas.json";

// Leer notas
function leerNotas() {
    if (!fs.existsSync(archivo)) {
        return [];
    }

    const datos = fs.readFileSync(archivo, "utf8");
    return JSON.parse(datos);
}

// Guardar notas
function guardarNotas(notas) {
    fs.writeFileSync(archivo, JSON.stringify(notas, null, 2));
}

// Agregar nota
function agregarNota(titulo, contenido) {
    let notas = leerNotas();

    if (notas.some(nota => nota.titulo === titulo)) {
        console.log("Ya existe una nota con ese título.");
        return;
    }

    notas.push({ titulo, contenido });
    guardarNotas(notas);

    console.log("Nota guardada correctamente.");
}

// Mostrar notas
function listarNotas() {
    let notas = leerNotas();

    notas.forEach(nota => {
        console.log(`${nota.titulo}: ${nota.contenido}`);
    });
}

// Eliminar nota
function eliminarNota(titulo) {
    let notas = leerNotas();

    let nuevasNotas = notas.filter(nota => nota.titulo !== titulo);

    guardarNotas(nuevasNotas);

    console.log("Operación de eliminación realizada.");
}

// Ejecutar acciones
const [, , accion, titulo, contenido] = process.argv;

if (accion === "agregar") {
    agregarNota(titulo, contenido);
} else if (accion === "listar") {
    listarNotas();
} else if (accion === "eliminar") {
    eliminarNota(titulo);
} else {
    console.log("Usa: agregar, listar o eliminar.");
}