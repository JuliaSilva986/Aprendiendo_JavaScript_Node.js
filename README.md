# 📝 Gestor de Notas con Node.js

Mini proyecto desarrollado en JavaScript como parte del módulo de **Introducción al Manejo de Archivos con Node.js de DEV.F**.

## 📌 Descripción

El programa permite crear, consultar y eliminar notas personales utilizando Node.js y el módulo `fs`.

Las notas se almacenan en un archivo JSON para conservar la información incluso después de finalizar la ejecución.

## ⚙️ Funcionalidades

- Crear notas con título y contenido.
- Almacenar las notas en `notas.json`.
- Consultar las notas registradas.
- Eliminar notas mediante su título.
- Evitar títulos duplicados.

## 🛠️ Conceptos utilizados

- Manejo de archivos con `fs`.
- Funciones `readFileSync()`, `writeFileSync()` y `existsSync()`.
- Formato JSON.
- Métodos `JSON.parse()` y `JSON.stringify()`.
- Arreglos y objetos.
- Métodos `push()`, `filter()` y `some()`.
- Funciones y condicionales.
- Argumentos de línea de comandos con `process.argv`.

## 💻 Tecnologías

- JavaScript
- Node.js

## 🚀 Ejecución

1. Tener instalado Node.js.
2. Abrir el proyecto en Visual Studio Code.
3. Ejecutar los siguientes comandos desde la terminal, dentro de la carpeta del proyecto.

**Agregar nota:**

```bash
node gestorNotas.js agregar "Matemáticas" "Estudiar probabilidad"
```

**Listar notas:**

```bash
node gestorNotas.js listar
```

**Eliminar nota:**

```bash
node gestorNotas.js eliminar "Matemáticas"
```

El archivo `notas.json` se genera automáticamente al guardar la primera nota.

## 🎯 Objetivo

Practicar el manejo de archivos en Node.js mediante una aplicación sencilla que permita almacenar y administrar información persistente utilizando JavaScript y JSON.