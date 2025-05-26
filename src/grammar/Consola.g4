
grammar Consola;


program
    : (statement NEWLINE?)* EOF
    ;

statement
    : setStmt
    | getStmt
    | mathStmt
    | incStmt
    | decStmt
    | stringStmt
    | fsStmt
    | utilStmt
    | templateStmt
    | scaffoldStmt
    | serveStmt
    | ifStmt
    | evalStmt
    | simpleStmt
    ;

/* ——— instrucciones específicas ——— */
setStmt        : SET IDENT EQ expr ;
getStmt        : GET IDENT ;
mathStmt       : (ADD|SUB|MUL|DIV|MOD|POW) expr expr ;
incStmt        : INC IDENT ;
decStmt        : DEC IDENT ;
stringStmt     : (LEN|TOUPPER|TOLOWER|ECHO|PRINT|ALERT) arg+ ;
fsStmt         : (MKDIR|LS|CD|OPEN|RUN|SAVE|LOAD) arg+ ;
utilStmt       : (VARS|DEL|CLEAR|PAUSE|STATUS|TIME|DATE|VERSION|CREDITS
                  |HISTORY|UUID|SLUG|NOTE|NOTES|ENCODE|DECODE) arg* ;
templateStmt   : TEMPLATE IDENT IDENT IDENT? ;
scaffoldStmt   : SCAFFOLD IDENT IDENT ;
serveStmt      : SERVE arg ;
ifStmt         : IF condition THEN statement ;   // se ejecuta una única instrucción
evalStmt       : EVAL expr ;
simpleStmt     : (EXIT | V_FLAG) ;

/* ——— sub-reglas ——— */
condition      : expr relationalOp expr ;
relationalOp   : GT | GE | LT | LE | EQEQ | NEQ ;

arg            : STRING | IDENT | INT ;

/* ——— expresiones aritméticas con precedencia ——— */
expr
    : <assoc=right> expr POW expr           # Power
    | expr (MUL|DIV|MOD) expr               # MulDivMod
    | expr (PLUS|MINUS) expr                # AddSub
    | LPAREN expr RPAREN                    # Parens
    | INT                                   # IntAtom
    | IDENT                                 # IdAtom
    ;

// ----------
// LEXER
// ----------
// Palabras clave / comandos
SET       : 'set' ;
GET       : 'get' ;
ADD       : 'add' ;
SUB       : 'sub' ;
DIV       : 'div' ;
MOD       : 'mod' ;
POW       : 'pow' ;
INC       : 'inc' ;
DEC       : 'dec' ;

LEN       : 'len' ;
TOUPPER   : 'toupper' ;
TOLOWER   : 'tolower' ;
ECHO      : 'echo' ;
PRINT     : 'print' ;
ALERT     : 'alert' ;

MKDIR     : 'mkdir' ;
LS        : 'ls' ;
CD        : 'cd' ;
OPEN      : 'open' ;
RUN       : 'run' ;
SAVE      : 'save' ;
LOAD      : 'load' ;

VARS      : 'vars' ;
DEL       : 'del' ;
CLEAR     : 'clear' ;
PAUSE     : 'pause' ;
STATUS    : 'status' ;
TIME      : 'time' ;
DATE      : 'date' ;
VERSION   : 'version' ;
CREDITS   : 'credits' ;
HISTORY   : 'history' ;
UUID      : 'uuid' ;
SLUG      : 'slug' ;
NOTE      : 'note' ;
NOTES     : 'notes' ;
ENCODE    : 'encode' ;
DECODE    : 'decode' ;

TEMPLATE  : 'template' ;
SCAFFOLD  : 'scaffold' ;
SERVE     : 'serve' ;

IF        : 'if' ;
THEN      : 'then' ;
EVAL      : 'eval' ;

EXIT      : 'exit' ;
V_FLAG    : '-v' ;

// Operadores y símbolos
PLUS      : '+' ;
MINUS     : '-' ;
MUL       : '*' ;
DIV_SYM   : '/' ;
MOD_SYM   : '%' ;
LT        : '<' ;
GT        : '>' ;
LE        : '<=' ;
GE        : '>=' ;
EQEQ      : '==' ;
NEQ       : '!=' ;
LPAREN    : '(' ;
RPAREN    : ')' ;
EQ        : '=' ;

// Literales
STRING
    : '"' ( ~["\\] | '\\' . )* '"'   // admite secuencias escapadas
    ;

IDENT     : [a-zA-Z_] [a-zA-Z0-9_]* ;
INT       : [0-9]+ ;

// Espacios y comentarios
WS        : [ \t]+ -> skip ;
NEWLINE   : ('\r'? '\n')+ ;
COMMENT   : '//' ~[\r\n]* -> skip ;

// Para evitar conflictos entre DIV (comando) y '/' (símbolo)
fragment DIV_TOK : 'div' ;
