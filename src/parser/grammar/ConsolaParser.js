// Generated from ./grammar/Consola.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import ConsolaListener from './ConsolaListener.js';
const serializedATN = [4,1,62,159,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,1,
0,1,0,3,0,43,8,0,5,0,45,8,0,10,0,12,0,48,9,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,
1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,66,8,1,1,2,1,2,1,2,1,2,1,2,1,3,1,
3,1,3,1,4,1,4,1,4,1,4,1,5,1,5,1,5,1,6,1,6,1,6,1,7,1,7,4,7,88,8,7,11,7,12,
7,89,1,8,1,8,4,8,94,8,8,11,8,12,8,95,1,9,1,9,5,9,100,8,9,10,9,12,9,103,9,
9,1,10,1,10,1,10,1,10,3,10,109,8,10,1,11,1,11,1,11,1,11,1,12,1,12,1,12,1,
13,1,13,1,13,1,13,1,13,1,14,1,14,1,14,1,15,1,15,1,16,1,16,1,16,1,16,1,17,
1,17,1,18,1,18,1,19,1,19,1,19,1,19,1,19,1,19,1,19,3,19,143,8,19,1,19,1,19,
1,19,1,19,1,19,1,19,1,19,1,19,1,19,5,19,154,8,19,10,19,12,19,157,9,19,1,
19,0,1,38,20,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,0,9,
1,0,6,11,1,0,14,19,1,0,20,26,1,0,27,42,1,0,49,50,1,0,51,56,2,0,3,3,57,58,
1,0,8,10,1,0,61,62,162,0,46,1,0,0,0,2,65,1,0,0,0,4,67,1,0,0,0,6,72,1,0,0,
0,8,75,1,0,0,0,10,79,1,0,0,0,12,82,1,0,0,0,14,85,1,0,0,0,16,91,1,0,0,0,18,
97,1,0,0,0,20,104,1,0,0,0,22,110,1,0,0,0,24,114,1,0,0,0,26,117,1,0,0,0,28,
122,1,0,0,0,30,125,1,0,0,0,32,127,1,0,0,0,34,131,1,0,0,0,36,133,1,0,0,0,
38,142,1,0,0,0,40,42,3,2,1,0,41,43,5,1,0,0,42,41,1,0,0,0,42,43,1,0,0,0,43,
45,1,0,0,0,44,40,1,0,0,0,45,48,1,0,0,0,46,44,1,0,0,0,46,47,1,0,0,0,47,49,
1,0,0,0,48,46,1,0,0,0,49,50,5,0,0,1,50,1,1,0,0,0,51,66,3,4,2,0,52,66,3,6,
3,0,53,66,3,8,4,0,54,66,3,10,5,0,55,66,3,12,6,0,56,66,3,14,7,0,57,66,3,16,
8,0,58,66,3,18,9,0,59,66,3,20,10,0,60,66,3,22,11,0,61,66,3,24,12,0,62,66,
3,26,13,0,63,66,3,28,14,0,64,66,3,30,15,0,65,51,1,0,0,0,65,52,1,0,0,0,65,
53,1,0,0,0,65,54,1,0,0,0,65,55,1,0,0,0,65,56,1,0,0,0,65,57,1,0,0,0,65,58,
1,0,0,0,65,59,1,0,0,0,65,60,1,0,0,0,65,61,1,0,0,0,65,62,1,0,0,0,65,63,1,
0,0,0,65,64,1,0,0,0,66,3,1,0,0,0,67,68,5,2,0,0,68,69,5,3,0,0,69,70,5,4,0,
0,70,71,3,38,19,0,71,5,1,0,0,0,72,73,5,5,0,0,73,74,5,3,0,0,74,7,1,0,0,0,
75,76,7,0,0,0,76,77,3,38,19,0,77,78,3,38,19,0,78,9,1,0,0,0,79,80,5,12,0,
0,80,81,5,3,0,0,81,11,1,0,0,0,82,83,5,13,0,0,83,84,5,3,0,0,84,13,1,0,0,0,
85,87,7,1,0,0,86,88,3,36,18,0,87,86,1,0,0,0,88,89,1,0,0,0,89,87,1,0,0,0,
89,90,1,0,0,0,90,15,1,0,0,0,91,93,7,2,0,0,92,94,3,36,18,0,93,92,1,0,0,0,
94,95,1,0,0,0,95,93,1,0,0,0,95,96,1,0,0,0,96,17,1,0,0,0,97,101,7,3,0,0,98,
100,3,36,18,0,99,98,1,0,0,0,100,103,1,0,0,0,101,99,1,0,0,0,101,102,1,0,0,
0,102,19,1,0,0,0,103,101,1,0,0,0,104,105,5,43,0,0,105,106,5,3,0,0,106,108,
5,3,0,0,107,109,5,3,0,0,108,107,1,0,0,0,108,109,1,0,0,0,109,21,1,0,0,0,110,
111,5,44,0,0,111,112,5,3,0,0,112,113,5,3,0,0,113,23,1,0,0,0,114,115,5,45,
0,0,115,116,3,36,18,0,116,25,1,0,0,0,117,118,5,46,0,0,118,119,3,32,16,0,
119,120,5,47,0,0,120,121,3,2,1,0,121,27,1,0,0,0,122,123,5,48,0,0,123,124,
3,38,19,0,124,29,1,0,0,0,125,126,7,4,0,0,126,31,1,0,0,0,127,128,3,38,19,
0,128,129,3,34,17,0,129,130,3,38,19,0,130,33,1,0,0,0,131,132,7,5,0,0,132,
35,1,0,0,0,133,134,7,6,0,0,134,37,1,0,0,0,135,136,6,19,-1,0,136,137,5,59,
0,0,137,138,3,38,19,0,138,139,5,60,0,0,139,143,1,0,0,0,140,143,5,58,0,0,
141,143,5,3,0,0,142,135,1,0,0,0,142,140,1,0,0,0,142,141,1,0,0,0,143,155,
1,0,0,0,144,145,10,6,0,0,145,146,5,11,0,0,146,154,3,38,19,6,147,148,10,5,
0,0,148,149,7,7,0,0,149,154,3,38,19,6,150,151,10,4,0,0,151,152,7,8,0,0,152,
154,3,38,19,5,153,144,1,0,0,0,153,147,1,0,0,0,153,150,1,0,0,0,154,157,1,
0,0,0,155,153,1,0,0,0,155,156,1,0,0,0,156,39,1,0,0,0,157,155,1,0,0,0,10,
42,46,65,89,95,101,108,142,153,155];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class ConsolaParser extends antlr4.Parser {

    static grammarFileName = "Consola.g4";
    static literalNames = [  ];
    static symbolicNames = [ null, "NEWLINE", "SET", "IDENT", "EQ", "GET", 
                             "ADD", "SUB", "MUL", "DIV", "MOD", "POW", "INC", 
                             "DEC", "LEN", "TOUPPER", "TOLOWER", "ECHO", 
                             "PRINT", "ALERT", "MKDIR", "LS", "CD", "OPEN", 
                             "RUN", "SAVE", "LOAD", "VARS", "DEL", "CLEAR", 
                             "PAUSE", "STATUS", "TIME", "DATE", "VERSION", 
                             "CREDITS", "HISTORY", "UUID", "SLUG", "NOTE", 
                             "NOTES", "ENCODE", "DECODE", "TEMPLATE", "SCAFFOLD", 
                             "SERVE", "IF", "THEN", "EVAL", "EXIT", "V_FLAG", 
                             "GT", "GE", "LT", "LE", "EQEQ", "NEQ", "STRING", 
                             "INT", "LPAREN", "RPAREN", "PLUS", "MINUS" ];
    static ruleNames = [ "program", "statement", "setStmt", "getStmt", "mathStmt", 
                         "incStmt", "decStmt", "stringStmt", "fsStmt", "utilStmt", 
                         "templateStmt", "scaffoldStmt", "serveStmt", "ifStmt", 
                         "evalStmt", "simpleStmt", "condition", "relationalOp", 
                         "arg", "expr" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = ConsolaParser.ruleNames;
        this.literalNames = ConsolaParser.literalNames;
        this.symbolicNames = ConsolaParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 19:
    	    		return this.expr_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    expr_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 6);
    		case 1:
    			return this.precpred(this._ctx, 5);
    		case 2:
    			return this.precpred(this._ctx, 4);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	program() {
	    let localctx = new ProgramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, ConsolaParser.RULE_program);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 46;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 4294967268) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 491519) !== 0)) {
	            this.state = 40;
	            this.statement();
	            this.state = 42;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===1) {
	                this.state = 41;
	                this.match(ConsolaParser.NEWLINE);
	            }

	            this.state = 48;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 49;
	        this.match(ConsolaParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	statement() {
	    let localctx = new StatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, ConsolaParser.RULE_statement);
	    try {
	        this.state = 65;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 2:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 51;
	            this.setStmt();
	            break;
	        case 5:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 52;
	            this.getStmt();
	            break;
	        case 6:
	        case 7:
	        case 8:
	        case 9:
	        case 10:
	        case 11:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 53;
	            this.mathStmt();
	            break;
	        case 12:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 54;
	            this.incStmt();
	            break;
	        case 13:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 55;
	            this.decStmt();
	            break;
	        case 14:
	        case 15:
	        case 16:
	        case 17:
	        case 18:
	        case 19:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 56;
	            this.stringStmt();
	            break;
	        case 20:
	        case 21:
	        case 22:
	        case 23:
	        case 24:
	        case 25:
	        case 26:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 57;
	            this.fsStmt();
	            break;
	        case 27:
	        case 28:
	        case 29:
	        case 30:
	        case 31:
	        case 32:
	        case 33:
	        case 34:
	        case 35:
	        case 36:
	        case 37:
	        case 38:
	        case 39:
	        case 40:
	        case 41:
	        case 42:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 58;
	            this.utilStmt();
	            break;
	        case 43:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 59;
	            this.templateStmt();
	            break;
	        case 44:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 60;
	            this.scaffoldStmt();
	            break;
	        case 45:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 61;
	            this.serveStmt();
	            break;
	        case 46:
	            this.enterOuterAlt(localctx, 12);
	            this.state = 62;
	            this.ifStmt();
	            break;
	        case 48:
	            this.enterOuterAlt(localctx, 13);
	            this.state = 63;
	            this.evalStmt();
	            break;
	        case 49:
	        case 50:
	            this.enterOuterAlt(localctx, 14);
	            this.state = 64;
	            this.simpleStmt();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	setStmt() {
	    let localctx = new SetStmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, ConsolaParser.RULE_setStmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 67;
	        this.match(ConsolaParser.SET);
	        this.state = 68;
	        this.match(ConsolaParser.IDENT);
	        this.state = 69;
	        this.match(ConsolaParser.EQ);
	        this.state = 70;
	        this.expr(0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	getStmt() {
	    let localctx = new GetStmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, ConsolaParser.RULE_getStmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 72;
	        this.match(ConsolaParser.GET);
	        this.state = 73;
	        this.match(ConsolaParser.IDENT);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	mathStmt() {
	    let localctx = new MathStmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, ConsolaParser.RULE_mathStmt);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 75;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 4032) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 76;
	        this.expr(0);
	        this.state = 77;
	        this.expr(0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	incStmt() {
	    let localctx = new IncStmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, ConsolaParser.RULE_incStmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 79;
	        this.match(ConsolaParser.INC);
	        this.state = 80;
	        this.match(ConsolaParser.IDENT);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	decStmt() {
	    let localctx = new DecStmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, ConsolaParser.RULE_decStmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 82;
	        this.match(ConsolaParser.DEC);
	        this.state = 83;
	        this.match(ConsolaParser.IDENT);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	stringStmt() {
	    let localctx = new StringStmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, ConsolaParser.RULE_stringStmt);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 85;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 1032192) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 87; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 86;
	            this.arg();
	            this.state = 89; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===3 || _la===57 || _la===58);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	fsStmt() {
	    let localctx = new FsStmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, ConsolaParser.RULE_fsStmt);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 91;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 133169152) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 93; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 92;
	            this.arg();
	            this.state = 95; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===3 || _la===57 || _la===58);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	utilStmt() {
	    let localctx = new UtilStmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, ConsolaParser.RULE_utilStmt);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 97;
	        _la = this._input.LA(1);
	        if(!(((((_la - 27)) & ~0x1f) === 0 && ((1 << (_la - 27)) & 65535) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 101;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===3 || _la===57 || _la===58) {
	            this.state = 98;
	            this.arg();
	            this.state = 103;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	templateStmt() {
	    let localctx = new TemplateStmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, ConsolaParser.RULE_templateStmt);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 104;
	        this.match(ConsolaParser.TEMPLATE);
	        this.state = 105;
	        this.match(ConsolaParser.IDENT);
	        this.state = 106;
	        this.match(ConsolaParser.IDENT);
	        this.state = 108;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===3) {
	            this.state = 107;
	            this.match(ConsolaParser.IDENT);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	scaffoldStmt() {
	    let localctx = new ScaffoldStmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, ConsolaParser.RULE_scaffoldStmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 110;
	        this.match(ConsolaParser.SCAFFOLD);
	        this.state = 111;
	        this.match(ConsolaParser.IDENT);
	        this.state = 112;
	        this.match(ConsolaParser.IDENT);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	serveStmt() {
	    let localctx = new ServeStmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, ConsolaParser.RULE_serveStmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 114;
	        this.match(ConsolaParser.SERVE);
	        this.state = 115;
	        this.arg();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	ifStmt() {
	    let localctx = new IfStmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, ConsolaParser.RULE_ifStmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 117;
	        this.match(ConsolaParser.IF);
	        this.state = 118;
	        this.condition();
	        this.state = 119;
	        this.match(ConsolaParser.THEN);
	        this.state = 120;
	        this.statement();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	evalStmt() {
	    let localctx = new EvalStmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, ConsolaParser.RULE_evalStmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 122;
	        this.match(ConsolaParser.EVAL);
	        this.state = 123;
	        this.expr(0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	simpleStmt() {
	    let localctx = new SimpleStmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, ConsolaParser.RULE_simpleStmt);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 125;
	        _la = this._input.LA(1);
	        if(!(_la===49 || _la===50)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	condition() {
	    let localctx = new ConditionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, ConsolaParser.RULE_condition);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 127;
	        this.expr(0);
	        this.state = 128;
	        this.relationalOp();
	        this.state = 129;
	        this.expr(0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	relationalOp() {
	    let localctx = new RelationalOpContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, ConsolaParser.RULE_relationalOp);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 131;
	        _la = this._input.LA(1);
	        if(!(((((_la - 51)) & ~0x1f) === 0 && ((1 << (_la - 51)) & 63) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	arg() {
	    let localctx = new ArgContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, ConsolaParser.RULE_arg);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 133;
	        _la = this._input.LA(1);
	        if(!(_la===3 || _la===57 || _la===58)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	expr(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExprContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 38;
	    this.enterRecursionRule(localctx, 38, ConsolaParser.RULE_expr, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 142;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 59:
	            localctx = new ParensContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 136;
	            this.match(ConsolaParser.LPAREN);
	            this.state = 137;
	            this.expr(0);
	            this.state = 138;
	            this.match(ConsolaParser.RPAREN);
	            break;
	        case 58:
	            localctx = new IntAtomContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 140;
	            this.match(ConsolaParser.INT);
	            break;
	        case 3:
	            localctx = new IdAtomContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 141;
	            this.match(ConsolaParser.IDENT);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 155;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,9,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 153;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new PowerContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, ConsolaParser.RULE_expr);
	                    this.state = 144;
	                    if (!( this.precpred(this._ctx, 6))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
	                    }
	                    this.state = 145;
	                    this.match(ConsolaParser.POW);
	                    this.state = 146;
	                    this.expr(6);
	                    break;

	                case 2:
	                    localctx = new MulDivModContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, ConsolaParser.RULE_expr);
	                    this.state = 147;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 148;
	                    _la = this._input.LA(1);
	                    if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 1792) !== 0))) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 149;
	                    this.expr(6);
	                    break;

	                case 3:
	                    localctx = new AddSubContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, ConsolaParser.RULE_expr);
	                    this.state = 150;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 151;
	                    _la = this._input.LA(1);
	                    if(!(_la===61 || _la===62)) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 152;
	                    this.expr(5);
	                    break;

	                } 
	            }
	            this.state = 157;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,9,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}


}

ConsolaParser.EOF = antlr4.Token.EOF;
ConsolaParser.NEWLINE = 1;
ConsolaParser.SET = 2;
ConsolaParser.IDENT = 3;
ConsolaParser.EQ = 4;
ConsolaParser.GET = 5;
ConsolaParser.ADD = 6;
ConsolaParser.SUB = 7;
ConsolaParser.MUL = 8;
ConsolaParser.DIV = 9;
ConsolaParser.MOD = 10;
ConsolaParser.POW = 11;
ConsolaParser.INC = 12;
ConsolaParser.DEC = 13;
ConsolaParser.LEN = 14;
ConsolaParser.TOUPPER = 15;
ConsolaParser.TOLOWER = 16;
ConsolaParser.ECHO = 17;
ConsolaParser.PRINT = 18;
ConsolaParser.ALERT = 19;
ConsolaParser.MKDIR = 20;
ConsolaParser.LS = 21;
ConsolaParser.CD = 22;
ConsolaParser.OPEN = 23;
ConsolaParser.RUN = 24;
ConsolaParser.SAVE = 25;
ConsolaParser.LOAD = 26;
ConsolaParser.VARS = 27;
ConsolaParser.DEL = 28;
ConsolaParser.CLEAR = 29;
ConsolaParser.PAUSE = 30;
ConsolaParser.STATUS = 31;
ConsolaParser.TIME = 32;
ConsolaParser.DATE = 33;
ConsolaParser.VERSION = 34;
ConsolaParser.CREDITS = 35;
ConsolaParser.HISTORY = 36;
ConsolaParser.UUID = 37;
ConsolaParser.SLUG = 38;
ConsolaParser.NOTE = 39;
ConsolaParser.NOTES = 40;
ConsolaParser.ENCODE = 41;
ConsolaParser.DECODE = 42;
ConsolaParser.TEMPLATE = 43;
ConsolaParser.SCAFFOLD = 44;
ConsolaParser.SERVE = 45;
ConsolaParser.IF = 46;
ConsolaParser.THEN = 47;
ConsolaParser.EVAL = 48;
ConsolaParser.EXIT = 49;
ConsolaParser.V_FLAG = 50;
ConsolaParser.GT = 51;
ConsolaParser.GE = 52;
ConsolaParser.LT = 53;
ConsolaParser.LE = 54;
ConsolaParser.EQEQ = 55;
ConsolaParser.NEQ = 56;
ConsolaParser.STRING = 57;
ConsolaParser.INT = 58;
ConsolaParser.LPAREN = 59;
ConsolaParser.RPAREN = 60;
ConsolaParser.PLUS = 61;
ConsolaParser.MINUS = 62;

ConsolaParser.RULE_program = 0;
ConsolaParser.RULE_statement = 1;
ConsolaParser.RULE_setStmt = 2;
ConsolaParser.RULE_getStmt = 3;
ConsolaParser.RULE_mathStmt = 4;
ConsolaParser.RULE_incStmt = 5;
ConsolaParser.RULE_decStmt = 6;
ConsolaParser.RULE_stringStmt = 7;
ConsolaParser.RULE_fsStmt = 8;
ConsolaParser.RULE_utilStmt = 9;
ConsolaParser.RULE_templateStmt = 10;
ConsolaParser.RULE_scaffoldStmt = 11;
ConsolaParser.RULE_serveStmt = 12;
ConsolaParser.RULE_ifStmt = 13;
ConsolaParser.RULE_evalStmt = 14;
ConsolaParser.RULE_simpleStmt = 15;
ConsolaParser.RULE_condition = 16;
ConsolaParser.RULE_relationalOp = 17;
ConsolaParser.RULE_arg = 18;
ConsolaParser.RULE_expr = 19;

class ProgramContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ConsolaParser.RULE_program;
    }

	EOF() {
	    return this.getToken(ConsolaParser.EOF, 0);
	};

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	NEWLINE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ConsolaParser.NEWLINE);
	    } else {
	        return this.getToken(ConsolaParser.NEWLINE, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof ConsolaListener ) {
	        listener.enterProgram(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ConsolaListener ) {
	        listener.exitProgram(this);
		}
	}


}



class StatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ConsolaParser.RULE_statement;
    }

	setStmt() {
	    return this.getTypedRuleContext(SetStmtContext,0);
	};

	getStmt() {
	    return this.getTypedRuleContext(GetStmtContext,0);
	};

	mathStmt() {
	    return this.getTypedRuleContext(MathStmtContext,0);
	};

	incStmt() {
	    return this.getTypedRuleContext(IncStmtContext,0);
	};

	decStmt() {
	    return this.getTypedRuleContext(DecStmtContext,0);
	};

	stringStmt() {
	    return this.getTypedRuleContext(StringStmtContext,0);
	};

	fsStmt() {
	    return this.getTypedRuleContext(FsStmtContext,0);
	};

	utilStmt() {
	    return this.getTypedRuleContext(UtilStmtContext,0);
	};

	templateStmt() {
	    return this.getTypedRuleContext(TemplateStmtContext,0);
	};

	scaffoldStmt() {
	    return this.getTypedRuleContext(ScaffoldStmtContext,0);
	};

	serveStmt() {
	    return this.getTypedRuleContext(ServeStmtContext,0);
	};

	ifStmt() {
	    return this.getTypedRuleContext(IfStmtContext,0);
	};

	evalStmt() {
	    return this.getTypedRuleContext(EvalStmtContext,0);
	};

	simpleStmt() {
	    return this.getTypedRuleContext(SimpleStmtContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ConsolaListener ) {
	        listener.enterStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ConsolaListener ) {
	        listener.exitStatement(this);
		}
	}


}



class SetStmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ConsolaParser.RULE_setStmt;
    }

	SET() {
	    return this.getToken(ConsolaParser.SET, 0);
	};

	IDENT() {
	    return this.getToken(ConsolaParser.IDENT, 0);
	};

	EQ() {
	    return this.getToken(ConsolaParser.EQ, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ConsolaListener ) {
	        listener.enterSetStmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ConsolaListener ) {
	        listener.exitSetStmt(this);
		}
	}


}



class GetStmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ConsolaParser.RULE_getStmt;
    }

	GET() {
	    return this.getToken(ConsolaParser.GET, 0);
	};

	IDENT() {
	    return this.getToken(ConsolaParser.IDENT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ConsolaListener ) {
	        listener.enterGetStmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ConsolaListener ) {
	        listener.exitGetStmt(this);
		}
	}


}



class MathStmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ConsolaParser.RULE_mathStmt;
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	ADD() {
	    return this.getToken(ConsolaParser.ADD, 0);
	};

	SUB() {
	    return this.getToken(ConsolaParser.SUB, 0);
	};

	MUL() {
	    return this.getToken(ConsolaParser.MUL, 0);
	};

	DIV() {
	    return this.getToken(ConsolaParser.DIV, 0);
	};

	MOD() {
	    return this.getToken(ConsolaParser.MOD, 0);
	};

	POW() {
	    return this.getToken(ConsolaParser.POW, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ConsolaListener ) {
	        listener.enterMathStmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ConsolaListener ) {
	        listener.exitMathStmt(this);
		}
	}


}



class IncStmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ConsolaParser.RULE_incStmt;
    }

	INC() {
	    return this.getToken(ConsolaParser.INC, 0);
	};

	IDENT() {
	    return this.getToken(ConsolaParser.IDENT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ConsolaListener ) {
	        listener.enterIncStmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ConsolaListener ) {
	        listener.exitIncStmt(this);
		}
	}


}



class DecStmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ConsolaParser.RULE_decStmt;
    }

	DEC() {
	    return this.getToken(ConsolaParser.DEC, 0);
	};

	IDENT() {
	    return this.getToken(ConsolaParser.IDENT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ConsolaListener ) {
	        listener.enterDecStmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ConsolaListener ) {
	        listener.exitDecStmt(this);
		}
	}


}



class StringStmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ConsolaParser.RULE_stringStmt;
    }

	LEN() {
	    return this.getToken(ConsolaParser.LEN, 0);
	};

	TOUPPER() {
	    return this.getToken(ConsolaParser.TOUPPER, 0);
	};

	TOLOWER() {
	    return this.getToken(ConsolaParser.TOLOWER, 0);
	};

	ECHO() {
	    return this.getToken(ConsolaParser.ECHO, 0);
	};

	PRINT() {
	    return this.getToken(ConsolaParser.PRINT, 0);
	};

	ALERT() {
	    return this.getToken(ConsolaParser.ALERT, 0);
	};

	arg = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ArgContext);
	    } else {
	        return this.getTypedRuleContext(ArgContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof ConsolaListener ) {
	        listener.enterStringStmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ConsolaListener ) {
	        listener.exitStringStmt(this);
		}
	}


}



class FsStmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ConsolaParser.RULE_fsStmt;
    }

	MKDIR() {
	    return this.getToken(ConsolaParser.MKDIR, 0);
	};

	LS() {
	    return this.getToken(ConsolaParser.LS, 0);
	};

	CD() {
	    return this.getToken(ConsolaParser.CD, 0);
	};

	OPEN() {
	    return this.getToken(ConsolaParser.OPEN, 0);
	};

	RUN() {
	    return this.getToken(ConsolaParser.RUN, 0);
	};

	SAVE() {
	    return this.getToken(ConsolaParser.SAVE, 0);
	};

	LOAD() {
	    return this.getToken(ConsolaParser.LOAD, 0);
	};

	arg = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ArgContext);
	    } else {
	        return this.getTypedRuleContext(ArgContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof ConsolaListener ) {
	        listener.enterFsStmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ConsolaListener ) {
	        listener.exitFsStmt(this);
		}
	}


}



class UtilStmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ConsolaParser.RULE_utilStmt;
    }

	VARS() {
	    return this.getToken(ConsolaParser.VARS, 0);
	};

	DEL() {
	    return this.getToken(ConsolaParser.DEL, 0);
	};

	CLEAR() {
	    return this.getToken(ConsolaParser.CLEAR, 0);
	};

	PAUSE() {
	    return this.getToken(ConsolaParser.PAUSE, 0);
	};

	STATUS() {
	    return this.getToken(ConsolaParser.STATUS, 0);
	};

	TIME() {
	    return this.getToken(ConsolaParser.TIME, 0);
	};

	DATE() {
	    return this.getToken(ConsolaParser.DATE, 0);
	};

	VERSION() {
	    return this.getToken(ConsolaParser.VERSION, 0);
	};

	CREDITS() {
	    return this.getToken(ConsolaParser.CREDITS, 0);
	};

	HISTORY() {
	    return this.getToken(ConsolaParser.HISTORY, 0);
	};

	UUID() {
	    return this.getToken(ConsolaParser.UUID, 0);
	};

	SLUG() {
	    return this.getToken(ConsolaParser.SLUG, 0);
	};

	NOTE() {
	    return this.getToken(ConsolaParser.NOTE, 0);
	};

	NOTES() {
	    return this.getToken(ConsolaParser.NOTES, 0);
	};

	ENCODE() {
	    return this.getToken(ConsolaParser.ENCODE, 0);
	};

	DECODE() {
	    return this.getToken(ConsolaParser.DECODE, 0);
	};

	arg = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ArgContext);
	    } else {
	        return this.getTypedRuleContext(ArgContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof ConsolaListener ) {
	        listener.enterUtilStmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ConsolaListener ) {
	        listener.exitUtilStmt(this);
		}
	}


}



class TemplateStmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ConsolaParser.RULE_templateStmt;
    }

	TEMPLATE() {
	    return this.getToken(ConsolaParser.TEMPLATE, 0);
	};

	IDENT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ConsolaParser.IDENT);
	    } else {
	        return this.getToken(ConsolaParser.IDENT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof ConsolaListener ) {
	        listener.enterTemplateStmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ConsolaListener ) {
	        listener.exitTemplateStmt(this);
		}
	}


}



class ScaffoldStmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ConsolaParser.RULE_scaffoldStmt;
    }

	SCAFFOLD() {
	    return this.getToken(ConsolaParser.SCAFFOLD, 0);
	};

	IDENT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ConsolaParser.IDENT);
	    } else {
	        return this.getToken(ConsolaParser.IDENT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof ConsolaListener ) {
	        listener.enterScaffoldStmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ConsolaListener ) {
	        listener.exitScaffoldStmt(this);
		}
	}


}



class ServeStmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ConsolaParser.RULE_serveStmt;
    }

	SERVE() {
	    return this.getToken(ConsolaParser.SERVE, 0);
	};

	arg() {
	    return this.getTypedRuleContext(ArgContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ConsolaListener ) {
	        listener.enterServeStmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ConsolaListener ) {
	        listener.exitServeStmt(this);
		}
	}


}



class IfStmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ConsolaParser.RULE_ifStmt;
    }

	IF() {
	    return this.getToken(ConsolaParser.IF, 0);
	};

	condition() {
	    return this.getTypedRuleContext(ConditionContext,0);
	};

	THEN() {
	    return this.getToken(ConsolaParser.THEN, 0);
	};

	statement() {
	    return this.getTypedRuleContext(StatementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ConsolaListener ) {
	        listener.enterIfStmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ConsolaListener ) {
	        listener.exitIfStmt(this);
		}
	}


}



class EvalStmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ConsolaParser.RULE_evalStmt;
    }

	EVAL() {
	    return this.getToken(ConsolaParser.EVAL, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ConsolaListener ) {
	        listener.enterEvalStmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ConsolaListener ) {
	        listener.exitEvalStmt(this);
		}
	}


}



class SimpleStmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ConsolaParser.RULE_simpleStmt;
    }

	EXIT() {
	    return this.getToken(ConsolaParser.EXIT, 0);
	};

	V_FLAG() {
	    return this.getToken(ConsolaParser.V_FLAG, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ConsolaListener ) {
	        listener.enterSimpleStmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ConsolaListener ) {
	        listener.exitSimpleStmt(this);
		}
	}


}



class ConditionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ConsolaParser.RULE_condition;
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	relationalOp() {
	    return this.getTypedRuleContext(RelationalOpContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ConsolaListener ) {
	        listener.enterCondition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ConsolaListener ) {
	        listener.exitCondition(this);
		}
	}


}



class RelationalOpContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ConsolaParser.RULE_relationalOp;
    }

	GT() {
	    return this.getToken(ConsolaParser.GT, 0);
	};

	GE() {
	    return this.getToken(ConsolaParser.GE, 0);
	};

	LT() {
	    return this.getToken(ConsolaParser.LT, 0);
	};

	LE() {
	    return this.getToken(ConsolaParser.LE, 0);
	};

	EQEQ() {
	    return this.getToken(ConsolaParser.EQEQ, 0);
	};

	NEQ() {
	    return this.getToken(ConsolaParser.NEQ, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ConsolaListener ) {
	        listener.enterRelationalOp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ConsolaListener ) {
	        listener.exitRelationalOp(this);
		}
	}


}



class ArgContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ConsolaParser.RULE_arg;
    }

	STRING() {
	    return this.getToken(ConsolaParser.STRING, 0);
	};

	IDENT() {
	    return this.getToken(ConsolaParser.IDENT, 0);
	};

	INT() {
	    return this.getToken(ConsolaParser.INT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ConsolaListener ) {
	        listener.enterArg(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ConsolaListener ) {
	        listener.exitArg(this);
		}
	}


}



class ExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ConsolaParser.RULE_expr;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class MulDivModContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	MUL() {
	    return this.getToken(ConsolaParser.MUL, 0);
	};

	DIV() {
	    return this.getToken(ConsolaParser.DIV, 0);
	};

	MOD() {
	    return this.getToken(ConsolaParser.MOD, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ConsolaListener ) {
	        listener.enterMulDivMod(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ConsolaListener ) {
	        listener.exitMulDivMod(this);
		}
	}


}

ConsolaParser.MulDivModContext = MulDivModContext;

class AddSubContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	PLUS() {
	    return this.getToken(ConsolaParser.PLUS, 0);
	};

	MINUS() {
	    return this.getToken(ConsolaParser.MINUS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ConsolaListener ) {
	        listener.enterAddSub(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ConsolaListener ) {
	        listener.exitAddSub(this);
		}
	}


}

ConsolaParser.AddSubContext = AddSubContext;

class ParensContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	LPAREN() {
	    return this.getToken(ConsolaParser.LPAREN, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	RPAREN() {
	    return this.getToken(ConsolaParser.RPAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ConsolaListener ) {
	        listener.enterParens(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ConsolaListener ) {
	        listener.exitParens(this);
		}
	}


}

ConsolaParser.ParensContext = ParensContext;

class IntAtomContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	INT() {
	    return this.getToken(ConsolaParser.INT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ConsolaListener ) {
	        listener.enterIntAtom(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ConsolaListener ) {
	        listener.exitIntAtom(this);
		}
	}


}

ConsolaParser.IntAtomContext = IntAtomContext;

class IdAtomContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	IDENT() {
	    return this.getToken(ConsolaParser.IDENT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ConsolaListener ) {
	        listener.enterIdAtom(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ConsolaListener ) {
	        listener.exitIdAtom(this);
		}
	}


}

ConsolaParser.IdAtomContext = IdAtomContext;

class PowerContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	POW() {
	    return this.getToken(ConsolaParser.POW, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ConsolaListener ) {
	        listener.enterPower(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ConsolaListener ) {
	        listener.exitPower(this);
		}
	}


}

ConsolaParser.PowerContext = PowerContext;


ConsolaParser.ProgramContext = ProgramContext; 
ConsolaParser.StatementContext = StatementContext; 
ConsolaParser.SetStmtContext = SetStmtContext; 
ConsolaParser.GetStmtContext = GetStmtContext; 
ConsolaParser.MathStmtContext = MathStmtContext; 
ConsolaParser.IncStmtContext = IncStmtContext; 
ConsolaParser.DecStmtContext = DecStmtContext; 
ConsolaParser.StringStmtContext = StringStmtContext; 
ConsolaParser.FsStmtContext = FsStmtContext; 
ConsolaParser.UtilStmtContext = UtilStmtContext; 
ConsolaParser.TemplateStmtContext = TemplateStmtContext; 
ConsolaParser.ScaffoldStmtContext = ScaffoldStmtContext; 
ConsolaParser.ServeStmtContext = ServeStmtContext; 
ConsolaParser.IfStmtContext = IfStmtContext; 
ConsolaParser.EvalStmtContext = EvalStmtContext; 
ConsolaParser.SimpleStmtContext = SimpleStmtContext; 
ConsolaParser.ConditionContext = ConditionContext; 
ConsolaParser.RelationalOpContext = RelationalOpContext; 
ConsolaParser.ArgContext = ArgContext; 
ConsolaParser.ExprContext = ExprContext; 
