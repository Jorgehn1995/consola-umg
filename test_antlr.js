import antlr4 from 'antlr4';
import fs from 'fs';

import ConsolaLexer from './src/parser/ConsolaLexer.js';
import ConsolaParser from './src/parser/ConsolaParser.js';

const input = fs.readFileSync('comands.txt', 'utf8');
const chars = new antlr4.InputStream(input);
const lexer = new ConsolaLexer(chars);
const tokens = new antlr4.CommonTokenStream(lexer);
const parser = new ConsolaParser(tokens);
parser.buildParseTrees = true;
const tree = parser.program();

function printTree(node, parser, indent = "") {
  if (!node) return;
  const ruleNames = parser.ruleNames;
  const children = node.children || [];
  let nodeText = node.getRuleIndex ? ruleNames[node.getRuleIndex()] : node.getText();
  console.log(indent + "├─ " + nodeText);
  for (let child of children) {
    printTree(child, parser, indent + "│  ");
  }
}

console.log("Árbol de comandos:\n");
printTree(tree, parser);
