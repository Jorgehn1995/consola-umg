````markdown
# Consola Interactiva Avanzada

Proyecto final del curso de **Compiladores** – Universidad Mariano Gálvez de Guatemala (UMG).  
Desarrollado por estudiantes de último año de la carrera de Ingeniería en Sistemas de Información y Ciencias de la Computación.

---

## 📌 Descripción

Esta consola interactiva implementada en Node.js permite ejecutar comandos personalizados simulando un entorno de scripting con soporte para:

- Variables, operaciones matemáticas y condicionales
- Manipulación básica del sistema de archivos
- Utilidades para codificación/decodificación, historial y plantillas
- Generación de proyectos base (React, Vue, Angular)
- Servidor HTTP para archivos estáticos
- Control de flujo con `if`, `eval`, y `run`

La lógica de interpretación se ejecuta directamente desde consola, mostrando cómo una gramática definida puede transformarse en acciones reales mediante código JavaScript.

---

## ⚙️ Requisitos

- Node.js 18 o superior
- pnpm (opcional, también puedes usar npm)

---

## 🚀 Ejecución

### Modo desarrollo

```bash
pnpm install
node src/index.js
````

### Modo ejecutable

> Ya está disponible una versión compilada (`umg.exe`) para Windows:

```bash
./umg.exe
```

---

## 🧠 Comandos disponibles

Algunos ejemplos rápidos:

| Categoría   | Comando                 | Ejemplo                    |
| ----------- | ----------------------- | -------------------------- |
| Variables   | `set`, `get`, `del`     | `set x = 10`               |
| Matemáticas | `add`, `sub`, `mul`     | `add 5 3`                  |
| Texto       | `echo`, `len`, `slug`   | `slug Hola mundo cruel`    |
| Archivos    | `mkdir`, `ls`, `cd`     | `cd proyectos`             |
| Scripts     | `run`, `save`, `load`   | `run "miprog.txt"`         |
| Control     | `if`, `eval`            | `if x > 5 then echo Mayor` |
| Utilidades  | `uuid`, `notes`, `help` | `uuid`                     |
| Plantillas  | `template`, `scaffold`  | `scaffold react miapp`     |
| Servidor    | `serve`                 | `serve index.html`         |

Puedes consultar todos los comandos con:

```bash
help
```

---

## 🛠️ Tecnologías utilizadas

* [Node.js](https://nodejs.org/)
* [Chalk](https://www.npmjs.com/package/chalk) – Colores en consola
* [Chokidar](https://www.npmjs.com/package/chokidar) – Recarga en vivo para archivos
* [pkg](https://github.com/vercel/pkg) – Para compilar a `.exe`

---

## 🧑‍💻 Autores

> Proyecto desarrollado por estudiantes 7to semestre como parte del curso de Compiladores, Facultad de Ingeniería en Sistemas, **UMG**.

* Jorge Antonio Hernández Nájera – `0907 20 23870`
* José Carlos Cabrera Sandoval – `0907 22 9576`
* Leslie Mariela Jiménez García – `0907 22 17016`
* José Andrés Álvarez Cardona – `0907 22 11608`

---

## 🧾 Licencia

Uso académico exclusivamente. No se autoriza la redistribución comercial.

```

