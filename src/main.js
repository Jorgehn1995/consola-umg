#!/usr/bin/env node

// Proyecto Final – Consola Interactiva
// Curso: Compiladores – UMG

const readline = require("readline");
const fs = require("fs");
const chalk = require("chalk");
const path = require("path");
const { exec } = require("child_process");

const uso = {
  set: "set x = 10",
  get: "get x",
  add: "add 5 3",
  sub: "sub 8 4",
  mul: "mul 2 3",
  div: "div 6 2",
  mod: "mod 7 2",
  pow: "pow 2 3",
  inc: "inc x",
  dec: "dec x",
  len: "len \"texto\"",
  toupper: "toupper hola",
  tolower: "tolower HOLA",
  echo: "echo \"Hola Mundo\"",
  print: "print Mensaje",
  alert: "alert ¡Atención!",
  mkdir: "mkdir nueva_carpeta",
  ls: "ls",
  cd: "cd carpeta",
  open: "open archivo.txt",
  run: "run \"script.txt\"",
  save: "save \"estado.json\"",
  load: "load \"estado.json\"",
  countlines: "countlines ruta",
  vars: "vars",
  del: "del x",
  clear: "clear",
  pause: "pause",
  status: "status",
  time: "time",
  date: "date",
  version: "version",
  credits: "credits",
  history: "history",
  uuid: "uuid",
  slug: "slug Mi título",
  note: "note \"Comprar pan\"",
  notes: "notes",
  encode: "encode texto",
  decode: "decode dGV4dG8=",
  template: "template js function miFuncion",
  scaffold: "scaffold react proyecto",
  serve: "serve index.html",
  if: "if x > 5 then echo \"Mayor\"",
  eval: "eval 5 + 3",
  "-v": "-v",
  exit: "exit"
};

function argsFaltantes(args, total, ejemplo) {
  if (args.length - 1 < total) {
    console.log(chalk.red(`Faltan argumentos. Ejemplo: ${uso[ejemplo] || ejemplo}`));
    return true;
  }
  return false;
}

let currentDir = process.cwd();

function resolvePath(userPath) {
  return !userPath ? currentDir : path.isAbsolute(userPath) ? userPath : path.resolve(currentDir, userPath);
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: chalk.green(">>> ")
});

let memory = {};
let history = [];

console.log(chalk.blueBright("╔═════════════════════════════════════════╗"));
console.log(chalk.blueBright("║ Consola Interactiva                     ║"));
console.log(chalk.blueBright("║ Universidad Mariano Gálvez de Guatemala ║"));
console.log(chalk.blueBright("║ Curso Compiladores                      ║"));
console.log(chalk.blueBright("╚═════════════════════════════════════════╝"));
console.log(chalk.gray("Escribe 'help' para ver los comandos disponibles."));

function execute(command) {
  if (command.trim()) {
    history.push(command.trim());
    if (history.length > 10) history.shift();
  }

  const args = command.trim().split(/\s+/);
  const cmd = args[0];

  switch (cmd) {
    case "set":
      if (argsFaltantes(args, 3, "set")) break;
      const val = args.slice(3).join(" ");
      try {
        memory[args[1]] = eval(val.replace(/\b[a-zA-Z_][a-zA-Z0-9_]*\b/g, (v) => memory[v] ?? 0));
        console.log(`[set] ${args[1]} = ${memory[args[1]]}`);
      } catch {
        console.log("[ERROR] Expresión inválida.");
      }
      break;

    case "get":
      if (argsFaltantes(args, 1, "get")) break;
      console.log(`[get] ${args[1]} = ${memory[args[1]] ?? "undefined"}`);
      break;

    case "add":
    case "sub":
    case "mul":
    case "div":
    case "mod":
    case "pow": {
      if (argsFaltantes(args, 2, cmd)) break;
      const [a, b] = [parseFloat(args[1]), parseFloat(args[2])];
      const operations = {
        add: a + b,
        sub: a - b,
        mul: a * b,
        div: b === 0 ? "Error: división por cero" : a / b,
        mod: a % b,
        pow: Math.pow(a, b)
      };
      console.log(`[${cmd}] Resultado: ${operations[cmd]}`);
      break;
    }

    case "mkdir":
      if (argsFaltantes(args, 1, "mkdir")) break;
      try {
        fs.mkdirSync(resolvePath(args[1]), { recursive: true });
        console.log("[mkdir] Carpeta creada.");
      } catch {
        console.log("[mkdir] Error al crear carpeta.");
      }
      break;

    case "ls":
      try {
        const files = fs.readdirSync(resolvePath(args[1]));
        files.forEach(f => console.log(f));
      } catch {
        console.log("[ls] Error al listar.");
      }
      break;

    case "cd":
      if (argsFaltantes(args, 1, "cd")) break;
      const dir = resolvePath(args[1]);
      if (fs.existsSync(dir) && fs.statSync(dir).isDirectory()) {
        currentDir = dir;
        console.log(`[cd] ${currentDir}`);
      } else {
        console.log("[cd] Carpeta no válida.");
      }
      break;

    case "open":
      if (argsFaltantes(args, 1, "open")) break;
      const f = resolvePath(args[1]);
      if (!fs.existsSync(f)) return console.log("[open] Archivo no encontrado.");
      const opener = process.platform === "win32" ? "start" : process.platform === "darwin" ? "open" : "xdg-open";
      exec(`${opener} "${f}"`);
      break;

    case "clear":
      console.clear();
      break;

    case "echo":
    case "print":
    case "alert":
      if (argsFaltantes(args, 1, cmd)) break;
      console.log(`[${cmd}] ${args.slice(1).join(" ").replace(/"/g, "")}`);
      break;

    case "run":
      if (argsFaltantes(args, 1, "run")) break;
      const script = resolvePath(args[1].replace(/"/g, ""));
      if (fs.existsSync(script)) {
        const lines = fs.readFileSync(script, "utf8").split("\n");
        lines.forEach(line => line.trim() && execute(line));
      } else {
        console.log("[run] Archivo no encontrado.");
      }
      break;

    case "del":
      if (argsFaltantes(args, 1, "del")) break;
      delete memory[args[1]];
      break;

    case "vars":
      console.log(memory);
      break;

    case "pause":
      rl.question("", () => rl.prompt());
      return;

    case "inc":
    case "dec":
      if (argsFaltantes(args, 1, cmd)) break;
      memory[args[1]] = (memory[args[1]] || 0) + (cmd === "inc" ? 1 : -1);
      console.log(`[${cmd}] ${args[1]} = ${memory[args[1]]}`);
      break;

    case "len":
      if (argsFaltantes(args, 1, "len")) break;
      const texto = args.slice(1).join(" ").replace(/"/g, "");
      console.log(`[len] ${texto.length}`);
      break;

    case "toupper":
    case "tolower":
      if (argsFaltantes(args, 1, cmd)) break;
      console.log(`[${cmd}] ${cmd === "toupper" ? args[1].toUpperCase() : args[1].toLowerCase()}`);
      break;

    case "status":
      console.log("[status] OK");
      break;

    case "time":
      console.log(new Date().toLocaleTimeString());
      break;

    case "date":
      console.log(new Date().toLocaleDateString());
      break;

    case "version":
      console.log("Consola JS v2.1");
      break;

    case "credits":
      console.log("Consola desarrollada por estudiantes de Ingeniería en Sistemas – UMG");
      break;

    case "history":
      console.log(history);
      break;

    case "save":
      if (argsFaltantes(args, 1, "save")) break;
      fs.writeFileSync(resolvePath(args[1].replace(/"/g, "")), JSON.stringify(memory, null, 2));
      break;

    case "load":
      if (argsFaltantes(args, 1, "load")) break;
      const file = resolvePath(args[1].replace(/"/g, ""));
      if (fs.existsSync(file)) {
        memory = JSON.parse(fs.readFileSync(file, "utf8"));
      }
      break;

    case "if":
      if (!args.includes("then")) break;
      const cond = args.slice(1, args.indexOf("then")).join(" ");
      const cmdThen = args.slice(args.indexOf("then") + 1).join(" ");
      try {
        const c = cond.replace(/\b[a-zA-Z_][a-zA-Z0-9_]*\b/g, (v) => memory[v] ?? 0);
        if (eval(c)) execute(cmdThen);
      } catch {}
      break;

    case "eval":
      if (argsFaltantes(args, 1, "eval")) break;
      try {
        console.log(eval(args.slice(1).join(" ")));
      } catch {
        console.log("[ERROR] Evaluación inválida.");
      }
      break;

    case "uuid":
      console.log(require("crypto").randomUUID());
      break;

    case "slug":
      if (argsFaltantes(args, 1, "slug")) break;
      const slug = args.slice(1).join(" ").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
      console.log(slug);
      break;

    case "note":
      if (argsFaltantes(args, 1, "note")) break;
      global.notes = global.notes || [];
      global.notes.push(args.slice(1).join(" "));
      break;

    case "notes":
      (global.notes || []).forEach((n, i) => console.log(`${i + 1}. ${n}`));
      break;

    case "encode":
      if (argsFaltantes(args, 1, "encode")) break;
      console.log(Buffer.from(args.slice(1).join(" ")).toString("base64"));
      break;

    case "decode":
      if (argsFaltantes(args, 1, "decode")) break;
      try {
        console.log(Buffer.from(args[1], "base64").toString("utf8"));
      } catch {
        console.log("[decode] Error.");
      }
      break;

    case "help":
      Object.entries(uso).forEach(([k, ej]) => console.log(" -", k.padEnd(10), "Ej:", ej));
      break;

    case "template":
      if (argsFaltantes(args, 2, "template")) break;
      const [lang, type, name = "default"] = [args[1], args[2], args[3]?.replace(/["']/g, "")];
      if (lang === "js" && type === "function") {
        console.log(`function ${name}() {\n  // ...\n}`);
      } else if (lang === "js" && type === "class") {
        console.log(`class ${name} {\n  constructor() {}\n}`);
      }
      break;

    case "scaffold":
      if (argsFaltantes(args, 2, "scaffold")) break;
      const fw = args[1];
      const dest = resolvePath(args[2]);
      if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });

      const templates = {
        react: {
          "index.js": `import React from 'react';\nimport ReactDOM from 'react-dom';\nReactDOM.render(<h1>Hola React</h1>, document.getElementById('root'));`,
          "App.js": `export default function App() { return <div>App</div>; }`,
          "README.md": `# Proyecto React\n1. npm install\n2. npm start`
        }
        // ... puedes agregar más frameworks
      };

      if (templates[fw]) {
        Object.entries(templates[fw]).forEach(([f, c]) => fs.writeFileSync(path.join(dest, f), c));
        console.log(`[scaffold] Proyecto ${fw} creado en ${dest}`);
      }
      break;

    case "serve":
      if (argsFaltantes(args, 1, "serve")) break;
      const html = resolvePath(args[1]);
      if (!fs.existsSync(html)) break;
      const port = 3000;
      const http = require("http");
      const chokidar = require("chokidar");

      let content = fs.readFileSync(html, "utf8");
      chokidar.watch(html).on("change", () => content = fs.readFileSync(html, "utf8"));

      http.createServer((req, res) => {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(content);
      }).listen(port, () => console.log(`[serve] http://localhost:${port}`));
      break;

    case "-v":
      console.log("umg 1.0");
      break;

    case "exit":
      process.exit(0);

    default:
      if (cmd) console.log(`[ERROR] Comando no reconocido: ${cmd}`);
  }
}

rl.prompt();
rl.on("line", (line) => {
  execute(line);
  rl.prompt();
});
