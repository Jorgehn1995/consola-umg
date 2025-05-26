// Generated from d:/PROGRAMACION/UMG/compiladores/src/grammar/Consola.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue"})
public class ConsolaParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		SET=1, GET=2, ADD=3, SUB=4, DIV=5, MOD=6, POW=7, INC=8, DEC=9, LEN=10, 
		TOUPPER=11, TOLOWER=12, ECHO=13, PRINT=14, ALERT=15, MKDIR=16, LS=17, 
		CD=18, OPEN=19, RUN=20, SAVE=21, LOAD=22, VARS=23, DEL=24, CLEAR=25, PAUSE=26, 
		STATUS=27, TIME=28, DATE=29, VERSION=30, CREDITS=31, HISTORY=32, UUID=33, 
		SLUG=34, NOTE=35, NOTES=36, ENCODE=37, DECODE=38, TEMPLATE=39, SCAFFOLD=40, 
		SERVE=41, IF=42, THEN=43, EVAL=44, EXIT=45, V_FLAG=46, PLUS=47, MINUS=48, 
		MUL=49, DIV_SYM=50, MOD_SYM=51, LT=52, GT=53, LE=54, GE=55, EQEQ=56, NEQ=57, 
		LPAREN=58, RPAREN=59, EQ=60, STRING=61, IDENT=62, INT=63, WS=64, NEWLINE=65, 
		COMMENT=66;
	public static final int
		RULE_program = 0, RULE_statement = 1, RULE_setStmt = 2, RULE_getStmt = 3, 
		RULE_mathStmt = 4, RULE_incStmt = 5, RULE_decStmt = 6, RULE_stringStmt = 7, 
		RULE_fsStmt = 8, RULE_utilStmt = 9, RULE_templateStmt = 10, RULE_scaffoldStmt = 11, 
		RULE_serveStmt = 12, RULE_ifStmt = 13, RULE_evalStmt = 14, RULE_simpleStmt = 15, 
		RULE_condition = 16, RULE_relationalOp = 17, RULE_arg = 18, RULE_expr = 19;
	private static String[] makeRuleNames() {
		return new String[] {
			"program", "statement", "setStmt", "getStmt", "mathStmt", "incStmt", 
			"decStmt", "stringStmt", "fsStmt", "utilStmt", "templateStmt", "scaffoldStmt", 
			"serveStmt", "ifStmt", "evalStmt", "simpleStmt", "condition", "relationalOp", 
			"arg", "expr"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'set'", "'get'", "'add'", "'sub'", "'div'", "'mod'", "'pow'", 
			"'inc'", "'dec'", "'len'", "'toupper'", "'tolower'", "'echo'", "'print'", 
			"'alert'", "'mkdir'", "'ls'", "'cd'", "'open'", "'run'", "'save'", "'load'", 
			"'vars'", "'del'", "'clear'", "'pause'", "'status'", "'time'", "'date'", 
			"'version'", "'credits'", "'history'", "'uuid'", "'slug'", "'note'", 
			"'notes'", "'encode'", "'decode'", "'template'", "'scaffold'", "'serve'", 
			"'if'", "'then'", "'eval'", "'exit'", "'-v'", "'+'", "'-'", "'*'", "'/'", 
			"'%'", "'<'", "'>'", "'<='", "'>='", "'=='", "'!='", "'('", "')'", "'='"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "SET", "GET", "ADD", "SUB", "DIV", "MOD", "POW", "INC", "DEC", 
			"LEN", "TOUPPER", "TOLOWER", "ECHO", "PRINT", "ALERT", "MKDIR", "LS", 
			"CD", "OPEN", "RUN", "SAVE", "LOAD", "VARS", "DEL", "CLEAR", "PAUSE", 
			"STATUS", "TIME", "DATE", "VERSION", "CREDITS", "HISTORY", "UUID", "SLUG", 
			"NOTE", "NOTES", "ENCODE", "DECODE", "TEMPLATE", "SCAFFOLD", "SERVE", 
			"IF", "THEN", "EVAL", "EXIT", "V_FLAG", "PLUS", "MINUS", "MUL", "DIV_SYM", 
			"MOD_SYM", "LT", "GT", "LE", "GE", "EQEQ", "NEQ", "LPAREN", "RPAREN", 
			"EQ", "STRING", "IDENT", "INT", "WS", "NEWLINE", "COMMENT"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "Consola.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public ConsolaParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ProgramContext extends ParserRuleContext {
		public TerminalNode EOF() { return getToken(ConsolaParser.EOF, 0); }
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
		}
		public List<TerminalNode> NEWLINE() { return getTokens(ConsolaParser.NEWLINE); }
		public TerminalNode NEWLINE(int i) {
			return getToken(ConsolaParser.NEWLINE, i);
		}
		public ProgramContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_program; }
	}

	public final ProgramContext program() throws RecognitionException {
		ProgramContext _localctx = new ProgramContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_program);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(46);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 694891348754430L) != 0)) {
				{
				{
				setState(40);
				statement();
				setState(42);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==NEWLINE) {
					{
					setState(41);
					match(NEWLINE);
					}
				}

				}
				}
				setState(48);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(49);
			match(EOF);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class StatementContext extends ParserRuleContext {
		public SetStmtContext setStmt() {
			return getRuleContext(SetStmtContext.class,0);
		}
		public GetStmtContext getStmt() {
			return getRuleContext(GetStmtContext.class,0);
		}
		public MathStmtContext mathStmt() {
			return getRuleContext(MathStmtContext.class,0);
		}
		public IncStmtContext incStmt() {
			return getRuleContext(IncStmtContext.class,0);
		}
		public DecStmtContext decStmt() {
			return getRuleContext(DecStmtContext.class,0);
		}
		public StringStmtContext stringStmt() {
			return getRuleContext(StringStmtContext.class,0);
		}
		public FsStmtContext fsStmt() {
			return getRuleContext(FsStmtContext.class,0);
		}
		public UtilStmtContext utilStmt() {
			return getRuleContext(UtilStmtContext.class,0);
		}
		public TemplateStmtContext templateStmt() {
			return getRuleContext(TemplateStmtContext.class,0);
		}
		public ScaffoldStmtContext scaffoldStmt() {
			return getRuleContext(ScaffoldStmtContext.class,0);
		}
		public ServeStmtContext serveStmt() {
			return getRuleContext(ServeStmtContext.class,0);
		}
		public IfStmtContext ifStmt() {
			return getRuleContext(IfStmtContext.class,0);
		}
		public EvalStmtContext evalStmt() {
			return getRuleContext(EvalStmtContext.class,0);
		}
		public SimpleStmtContext simpleStmt() {
			return getRuleContext(SimpleStmtContext.class,0);
		}
		public StatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_statement; }
	}

	public final StatementContext statement() throws RecognitionException {
		StatementContext _localctx = new StatementContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_statement);
		try {
			setState(65);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case SET:
				enterOuterAlt(_localctx, 1);
				{
				setState(51);
				setStmt();
				}
				break;
			case GET:
				enterOuterAlt(_localctx, 2);
				{
				setState(52);
				getStmt();
				}
				break;
			case ADD:
			case SUB:
			case DIV:
			case MOD:
			case POW:
			case MUL:
				enterOuterAlt(_localctx, 3);
				{
				setState(53);
				mathStmt();
				}
				break;
			case INC:
				enterOuterAlt(_localctx, 4);
				{
				setState(54);
				incStmt();
				}
				break;
			case DEC:
				enterOuterAlt(_localctx, 5);
				{
				setState(55);
				decStmt();
				}
				break;
			case LEN:
			case TOUPPER:
			case TOLOWER:
			case ECHO:
			case PRINT:
			case ALERT:
				enterOuterAlt(_localctx, 6);
				{
				setState(56);
				stringStmt();
				}
				break;
			case MKDIR:
			case LS:
			case CD:
			case OPEN:
			case RUN:
			case SAVE:
			case LOAD:
				enterOuterAlt(_localctx, 7);
				{
				setState(57);
				fsStmt();
				}
				break;
			case VARS:
			case DEL:
			case CLEAR:
			case PAUSE:
			case STATUS:
			case TIME:
			case DATE:
			case VERSION:
			case CREDITS:
			case HISTORY:
			case UUID:
			case SLUG:
			case NOTE:
			case NOTES:
			case ENCODE:
			case DECODE:
				enterOuterAlt(_localctx, 8);
				{
				setState(58);
				utilStmt();
				}
				break;
			case TEMPLATE:
				enterOuterAlt(_localctx, 9);
				{
				setState(59);
				templateStmt();
				}
				break;
			case SCAFFOLD:
				enterOuterAlt(_localctx, 10);
				{
				setState(60);
				scaffoldStmt();
				}
				break;
			case SERVE:
				enterOuterAlt(_localctx, 11);
				{
				setState(61);
				serveStmt();
				}
				break;
			case IF:
				enterOuterAlt(_localctx, 12);
				{
				setState(62);
				ifStmt();
				}
				break;
			case EVAL:
				enterOuterAlt(_localctx, 13);
				{
				setState(63);
				evalStmt();
				}
				break;
			case EXIT:
			case V_FLAG:
				enterOuterAlt(_localctx, 14);
				{
				setState(64);
				simpleStmt();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class SetStmtContext extends ParserRuleContext {
		public TerminalNode SET() { return getToken(ConsolaParser.SET, 0); }
		public TerminalNode IDENT() { return getToken(ConsolaParser.IDENT, 0); }
		public TerminalNode EQ() { return getToken(ConsolaParser.EQ, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public SetStmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_setStmt; }
	}

	public final SetStmtContext setStmt() throws RecognitionException {
		SetStmtContext _localctx = new SetStmtContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_setStmt);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(67);
			match(SET);
			setState(68);
			match(IDENT);
			setState(69);
			match(EQ);
			setState(70);
			expr(0);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class GetStmtContext extends ParserRuleContext {
		public TerminalNode GET() { return getToken(ConsolaParser.GET, 0); }
		public TerminalNode IDENT() { return getToken(ConsolaParser.IDENT, 0); }
		public GetStmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_getStmt; }
	}

	public final GetStmtContext getStmt() throws RecognitionException {
		GetStmtContext _localctx = new GetStmtContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_getStmt);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(72);
			match(GET);
			setState(73);
			match(IDENT);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class MathStmtContext extends ParserRuleContext {
		public List<ExprContext> expr() {
			return getRuleContexts(ExprContext.class);
		}
		public ExprContext expr(int i) {
			return getRuleContext(ExprContext.class,i);
		}
		public TerminalNode ADD() { return getToken(ConsolaParser.ADD, 0); }
		public TerminalNode SUB() { return getToken(ConsolaParser.SUB, 0); }
		public TerminalNode MUL() { return getToken(ConsolaParser.MUL, 0); }
		public TerminalNode DIV() { return getToken(ConsolaParser.DIV, 0); }
		public TerminalNode MOD() { return getToken(ConsolaParser.MOD, 0); }
		public TerminalNode POW() { return getToken(ConsolaParser.POW, 0); }
		public MathStmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_mathStmt; }
	}

	public final MathStmtContext mathStmt() throws RecognitionException {
		MathStmtContext _localctx = new MathStmtContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_mathStmt);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(75);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 562949953421560L) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(76);
			expr(0);
			setState(77);
			expr(0);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class IncStmtContext extends ParserRuleContext {
		public TerminalNode INC() { return getToken(ConsolaParser.INC, 0); }
		public TerminalNode IDENT() { return getToken(ConsolaParser.IDENT, 0); }
		public IncStmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_incStmt; }
	}

	public final IncStmtContext incStmt() throws RecognitionException {
		IncStmtContext _localctx = new IncStmtContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_incStmt);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(79);
			match(INC);
			setState(80);
			match(IDENT);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class DecStmtContext extends ParserRuleContext {
		public TerminalNode DEC() { return getToken(ConsolaParser.DEC, 0); }
		public TerminalNode IDENT() { return getToken(ConsolaParser.IDENT, 0); }
		public DecStmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_decStmt; }
	}

	public final DecStmtContext decStmt() throws RecognitionException {
		DecStmtContext _localctx = new DecStmtContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_decStmt);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(82);
			match(DEC);
			setState(83);
			match(IDENT);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class StringStmtContext extends ParserRuleContext {
		public TerminalNode LEN() { return getToken(ConsolaParser.LEN, 0); }
		public TerminalNode TOUPPER() { return getToken(ConsolaParser.TOUPPER, 0); }
		public TerminalNode TOLOWER() { return getToken(ConsolaParser.TOLOWER, 0); }
		public TerminalNode ECHO() { return getToken(ConsolaParser.ECHO, 0); }
		public TerminalNode PRINT() { return getToken(ConsolaParser.PRINT, 0); }
		public TerminalNode ALERT() { return getToken(ConsolaParser.ALERT, 0); }
		public List<ArgContext> arg() {
			return getRuleContexts(ArgContext.class);
		}
		public ArgContext arg(int i) {
			return getRuleContext(ArgContext.class,i);
		}
		public StringStmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_stringStmt; }
	}

	public final StringStmtContext stringStmt() throws RecognitionException {
		StringStmtContext _localctx = new StringStmtContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_stringStmt);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(85);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 64512L) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(87); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(86);
				arg();
				}
				}
				setState(89); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( (((_la) & ~0x3f) == 0 && ((1L << _la) & -2305843009213693952L) != 0) );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class FsStmtContext extends ParserRuleContext {
		public TerminalNode MKDIR() { return getToken(ConsolaParser.MKDIR, 0); }
		public TerminalNode LS() { return getToken(ConsolaParser.LS, 0); }
		public TerminalNode CD() { return getToken(ConsolaParser.CD, 0); }
		public TerminalNode OPEN() { return getToken(ConsolaParser.OPEN, 0); }
		public TerminalNode RUN() { return getToken(ConsolaParser.RUN, 0); }
		public TerminalNode SAVE() { return getToken(ConsolaParser.SAVE, 0); }
		public TerminalNode LOAD() { return getToken(ConsolaParser.LOAD, 0); }
		public List<ArgContext> arg() {
			return getRuleContexts(ArgContext.class);
		}
		public ArgContext arg(int i) {
			return getRuleContext(ArgContext.class,i);
		}
		public FsStmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_fsStmt; }
	}

	public final FsStmtContext fsStmt() throws RecognitionException {
		FsStmtContext _localctx = new FsStmtContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_fsStmt);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(91);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 8323072L) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(93); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(92);
				arg();
				}
				}
				setState(95); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( (((_la) & ~0x3f) == 0 && ((1L << _la) & -2305843009213693952L) != 0) );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class UtilStmtContext extends ParserRuleContext {
		public TerminalNode VARS() { return getToken(ConsolaParser.VARS, 0); }
		public TerminalNode DEL() { return getToken(ConsolaParser.DEL, 0); }
		public TerminalNode CLEAR() { return getToken(ConsolaParser.CLEAR, 0); }
		public TerminalNode PAUSE() { return getToken(ConsolaParser.PAUSE, 0); }
		public TerminalNode STATUS() { return getToken(ConsolaParser.STATUS, 0); }
		public TerminalNode TIME() { return getToken(ConsolaParser.TIME, 0); }
		public TerminalNode DATE() { return getToken(ConsolaParser.DATE, 0); }
		public TerminalNode VERSION() { return getToken(ConsolaParser.VERSION, 0); }
		public TerminalNode CREDITS() { return getToken(ConsolaParser.CREDITS, 0); }
		public TerminalNode HISTORY() { return getToken(ConsolaParser.HISTORY, 0); }
		public TerminalNode UUID() { return getToken(ConsolaParser.UUID, 0); }
		public TerminalNode SLUG() { return getToken(ConsolaParser.SLUG, 0); }
		public TerminalNode NOTE() { return getToken(ConsolaParser.NOTE, 0); }
		public TerminalNode NOTES() { return getToken(ConsolaParser.NOTES, 0); }
		public TerminalNode ENCODE() { return getToken(ConsolaParser.ENCODE, 0); }
		public TerminalNode DECODE() { return getToken(ConsolaParser.DECODE, 0); }
		public List<ArgContext> arg() {
			return getRuleContexts(ArgContext.class);
		}
		public ArgContext arg(int i) {
			return getRuleContext(ArgContext.class,i);
		}
		public UtilStmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_utilStmt; }
	}

	public final UtilStmtContext utilStmt() throws RecognitionException {
		UtilStmtContext _localctx = new UtilStmtContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_utilStmt);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(97);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 549747425280L) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(101);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & -2305843009213693952L) != 0)) {
				{
				{
				setState(98);
				arg();
				}
				}
				setState(103);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class TemplateStmtContext extends ParserRuleContext {
		public TerminalNode TEMPLATE() { return getToken(ConsolaParser.TEMPLATE, 0); }
		public List<TerminalNode> IDENT() { return getTokens(ConsolaParser.IDENT); }
		public TerminalNode IDENT(int i) {
			return getToken(ConsolaParser.IDENT, i);
		}
		public TemplateStmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_templateStmt; }
	}

	public final TemplateStmtContext templateStmt() throws RecognitionException {
		TemplateStmtContext _localctx = new TemplateStmtContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_templateStmt);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(104);
			match(TEMPLATE);
			setState(105);
			match(IDENT);
			setState(106);
			match(IDENT);
			setState(108);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==IDENT) {
				{
				setState(107);
				match(IDENT);
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ScaffoldStmtContext extends ParserRuleContext {
		public TerminalNode SCAFFOLD() { return getToken(ConsolaParser.SCAFFOLD, 0); }
		public List<TerminalNode> IDENT() { return getTokens(ConsolaParser.IDENT); }
		public TerminalNode IDENT(int i) {
			return getToken(ConsolaParser.IDENT, i);
		}
		public ScaffoldStmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_scaffoldStmt; }
	}

	public final ScaffoldStmtContext scaffoldStmt() throws RecognitionException {
		ScaffoldStmtContext _localctx = new ScaffoldStmtContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_scaffoldStmt);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(110);
			match(SCAFFOLD);
			setState(111);
			match(IDENT);
			setState(112);
			match(IDENT);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ServeStmtContext extends ParserRuleContext {
		public TerminalNode SERVE() { return getToken(ConsolaParser.SERVE, 0); }
		public ArgContext arg() {
			return getRuleContext(ArgContext.class,0);
		}
		public ServeStmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_serveStmt; }
	}

	public final ServeStmtContext serveStmt() throws RecognitionException {
		ServeStmtContext _localctx = new ServeStmtContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_serveStmt);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(114);
			match(SERVE);
			setState(115);
			arg();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class IfStmtContext extends ParserRuleContext {
		public TerminalNode IF() { return getToken(ConsolaParser.IF, 0); }
		public ConditionContext condition() {
			return getRuleContext(ConditionContext.class,0);
		}
		public TerminalNode THEN() { return getToken(ConsolaParser.THEN, 0); }
		public StatementContext statement() {
			return getRuleContext(StatementContext.class,0);
		}
		public IfStmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ifStmt; }
	}

	public final IfStmtContext ifStmt() throws RecognitionException {
		IfStmtContext _localctx = new IfStmtContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_ifStmt);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(117);
			match(IF);
			setState(118);
			condition();
			setState(119);
			match(THEN);
			setState(120);
			statement();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class EvalStmtContext extends ParserRuleContext {
		public TerminalNode EVAL() { return getToken(ConsolaParser.EVAL, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public EvalStmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_evalStmt; }
	}

	public final EvalStmtContext evalStmt() throws RecognitionException {
		EvalStmtContext _localctx = new EvalStmtContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_evalStmt);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(122);
			match(EVAL);
			setState(123);
			expr(0);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class SimpleStmtContext extends ParserRuleContext {
		public TerminalNode EXIT() { return getToken(ConsolaParser.EXIT, 0); }
		public TerminalNode V_FLAG() { return getToken(ConsolaParser.V_FLAG, 0); }
		public SimpleStmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_simpleStmt; }
	}

	public final SimpleStmtContext simpleStmt() throws RecognitionException {
		SimpleStmtContext _localctx = new SimpleStmtContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_simpleStmt);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(125);
			_la = _input.LA(1);
			if ( !(_la==EXIT || _la==V_FLAG) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ConditionContext extends ParserRuleContext {
		public List<ExprContext> expr() {
			return getRuleContexts(ExprContext.class);
		}
		public ExprContext expr(int i) {
			return getRuleContext(ExprContext.class,i);
		}
		public RelationalOpContext relationalOp() {
			return getRuleContext(RelationalOpContext.class,0);
		}
		public ConditionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_condition; }
	}

	public final ConditionContext condition() throws RecognitionException {
		ConditionContext _localctx = new ConditionContext(_ctx, getState());
		enterRule(_localctx, 32, RULE_condition);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(127);
			expr(0);
			setState(128);
			relationalOp();
			setState(129);
			expr(0);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class RelationalOpContext extends ParserRuleContext {
		public TerminalNode GT() { return getToken(ConsolaParser.GT, 0); }
		public TerminalNode GE() { return getToken(ConsolaParser.GE, 0); }
		public TerminalNode LT() { return getToken(ConsolaParser.LT, 0); }
		public TerminalNode LE() { return getToken(ConsolaParser.LE, 0); }
		public TerminalNode EQEQ() { return getToken(ConsolaParser.EQEQ, 0); }
		public TerminalNode NEQ() { return getToken(ConsolaParser.NEQ, 0); }
		public RelationalOpContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_relationalOp; }
	}

	public final RelationalOpContext relationalOp() throws RecognitionException {
		RelationalOpContext _localctx = new RelationalOpContext(_ctx, getState());
		enterRule(_localctx, 34, RULE_relationalOp);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(131);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 283726776524341248L) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ArgContext extends ParserRuleContext {
		public TerminalNode STRING() { return getToken(ConsolaParser.STRING, 0); }
		public TerminalNode IDENT() { return getToken(ConsolaParser.IDENT, 0); }
		public TerminalNode INT() { return getToken(ConsolaParser.INT, 0); }
		public ArgContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_arg; }
	}

	public final ArgContext arg() throws RecognitionException {
		ArgContext _localctx = new ArgContext(_ctx, getState());
		enterRule(_localctx, 36, RULE_arg);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(133);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & -2305843009213693952L) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ExprContext extends ParserRuleContext {
		public ExprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expr; }
	 
		public ExprContext() { }
		public void copyFrom(ExprContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class MulDivModContext extends ExprContext {
		public List<ExprContext> expr() {
			return getRuleContexts(ExprContext.class);
		}
		public ExprContext expr(int i) {
			return getRuleContext(ExprContext.class,i);
		}
		public TerminalNode MUL() { return getToken(ConsolaParser.MUL, 0); }
		public TerminalNode DIV() { return getToken(ConsolaParser.DIV, 0); }
		public TerminalNode MOD() { return getToken(ConsolaParser.MOD, 0); }
		public MulDivModContext(ExprContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class AddSubContext extends ExprContext {
		public List<ExprContext> expr() {
			return getRuleContexts(ExprContext.class);
		}
		public ExprContext expr(int i) {
			return getRuleContext(ExprContext.class,i);
		}
		public TerminalNode PLUS() { return getToken(ConsolaParser.PLUS, 0); }
		public TerminalNode MINUS() { return getToken(ConsolaParser.MINUS, 0); }
		public AddSubContext(ExprContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class ParensContext extends ExprContext {
		public TerminalNode LPAREN() { return getToken(ConsolaParser.LPAREN, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode RPAREN() { return getToken(ConsolaParser.RPAREN, 0); }
		public ParensContext(ExprContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class IntAtomContext extends ExprContext {
		public TerminalNode INT() { return getToken(ConsolaParser.INT, 0); }
		public IntAtomContext(ExprContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class IdAtomContext extends ExprContext {
		public TerminalNode IDENT() { return getToken(ConsolaParser.IDENT, 0); }
		public IdAtomContext(ExprContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class PowerContext extends ExprContext {
		public List<ExprContext> expr() {
			return getRuleContexts(ExprContext.class);
		}
		public ExprContext expr(int i) {
			return getRuleContext(ExprContext.class,i);
		}
		public TerminalNode POW() { return getToken(ConsolaParser.POW, 0); }
		public PowerContext(ExprContext ctx) { copyFrom(ctx); }
	}

	public final ExprContext expr() throws RecognitionException {
		return expr(0);
	}

	private ExprContext expr(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		ExprContext _localctx = new ExprContext(_ctx, _parentState);
		ExprContext _prevctx = _localctx;
		int _startState = 38;
		enterRecursionRule(_localctx, 38, RULE_expr, _p);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(142);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case LPAREN:
				{
				_localctx = new ParensContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;

				setState(136);
				match(LPAREN);
				setState(137);
				expr(0);
				setState(138);
				match(RPAREN);
				}
				break;
			case INT:
				{
				_localctx = new IntAtomContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(140);
				match(INT);
				}
				break;
			case IDENT:
				{
				_localctx = new IdAtomContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(141);
				match(IDENT);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			_ctx.stop = _input.LT(-1);
			setState(155);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,9,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(153);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,8,_ctx) ) {
					case 1:
						{
						_localctx = new PowerContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(144);
						if (!(precpred(_ctx, 6))) throw new FailedPredicateException(this, "precpred(_ctx, 6)");
						setState(145);
						match(POW);
						setState(146);
						expr(6);
						}
						break;
					case 2:
						{
						_localctx = new MulDivModContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(147);
						if (!(precpred(_ctx, 5))) throw new FailedPredicateException(this, "precpred(_ctx, 5)");
						setState(148);
						_la = _input.LA(1);
						if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 562949953421408L) != 0)) ) {
						_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(149);
						expr(6);
						}
						break;
					case 3:
						{
						_localctx = new AddSubContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(150);
						if (!(precpred(_ctx, 4))) throw new FailedPredicateException(this, "precpred(_ctx, 4)");
						setState(151);
						_la = _input.LA(1);
						if ( !(_la==PLUS || _la==MINUS) ) {
						_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(152);
						expr(5);
						}
						break;
					}
					} 
				}
				setState(157);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,9,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public boolean sempred(RuleContext _localctx, int ruleIndex, int predIndex) {
		switch (ruleIndex) {
		case 19:
			return expr_sempred((ExprContext)_localctx, predIndex);
		}
		return true;
	}
	private boolean expr_sempred(ExprContext _localctx, int predIndex) {
		switch (predIndex) {
		case 0:
			return precpred(_ctx, 6);
		case 1:
			return precpred(_ctx, 5);
		case 2:
			return precpred(_ctx, 4);
		}
		return true;
	}

	public static final String _serializedATN =
		"\u0004\u0001B\u009f\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002"+
		"\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004\u0002"+
		"\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007\u0002"+
		"\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b\u0007\u000b\u0002"+
		"\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e\u0002\u000f\u0007\u000f"+
		"\u0002\u0010\u0007\u0010\u0002\u0011\u0007\u0011\u0002\u0012\u0007\u0012"+
		"\u0002\u0013\u0007\u0013\u0001\u0000\u0001\u0000\u0003\u0000+\b\u0000"+
		"\u0005\u0000-\b\u0000\n\u0000\f\u00000\t\u0000\u0001\u0000\u0001\u0000"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0003\u0001B\b\u0001\u0001\u0002\u0001\u0002"+
		"\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0003\u0001\u0003\u0001\u0003"+
		"\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0005\u0001\u0005"+
		"\u0001\u0005\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0007\u0001\u0007"+
		"\u0004\u0007X\b\u0007\u000b\u0007\f\u0007Y\u0001\b\u0001\b\u0004\b^\b"+
		"\b\u000b\b\f\b_\u0001\t\u0001\t\u0005\td\b\t\n\t\f\tg\t\t\u0001\n\u0001"+
		"\n\u0001\n\u0001\n\u0003\nm\b\n\u0001\u000b\u0001\u000b\u0001\u000b\u0001"+
		"\u000b\u0001\f\u0001\f\u0001\f\u0001\r\u0001\r\u0001\r\u0001\r\u0001\r"+
		"\u0001\u000e\u0001\u000e\u0001\u000e\u0001\u000f\u0001\u000f\u0001\u0010"+
		"\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0011\u0001\u0011\u0001\u0012"+
		"\u0001\u0012\u0001\u0013\u0001\u0013\u0001\u0013\u0001\u0013\u0001\u0013"+
		"\u0001\u0013\u0001\u0013\u0003\u0013\u008f\b\u0013\u0001\u0013\u0001\u0013"+
		"\u0001\u0013\u0001\u0013\u0001\u0013\u0001\u0013\u0001\u0013\u0001\u0013"+
		"\u0001\u0013\u0005\u0013\u009a\b\u0013\n\u0013\f\u0013\u009d\t\u0013\u0001"+
		"\u0013\u0000\u0001&\u0014\u0000\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012"+
		"\u0014\u0016\u0018\u001a\u001c\u001e \"$&\u0000\t\u0002\u0000\u0003\u0007"+
		"11\u0001\u0000\n\u000f\u0001\u0000\u0010\u0016\u0001\u0000\u0017&\u0001"+
		"\u0000-.\u0001\u000049\u0001\u0000=?\u0002\u0000\u0005\u000611\u0001\u0000"+
		"/0\u00a2\u0000.\u0001\u0000\u0000\u0000\u0002A\u0001\u0000\u0000\u0000"+
		"\u0004C\u0001\u0000\u0000\u0000\u0006H\u0001\u0000\u0000\u0000\bK\u0001"+
		"\u0000\u0000\u0000\nO\u0001\u0000\u0000\u0000\fR\u0001\u0000\u0000\u0000"+
		"\u000eU\u0001\u0000\u0000\u0000\u0010[\u0001\u0000\u0000\u0000\u0012a"+
		"\u0001\u0000\u0000\u0000\u0014h\u0001\u0000\u0000\u0000\u0016n\u0001\u0000"+
		"\u0000\u0000\u0018r\u0001\u0000\u0000\u0000\u001au\u0001\u0000\u0000\u0000"+
		"\u001cz\u0001\u0000\u0000\u0000\u001e}\u0001\u0000\u0000\u0000 \u007f"+
		"\u0001\u0000\u0000\u0000\"\u0083\u0001\u0000\u0000\u0000$\u0085\u0001"+
		"\u0000\u0000\u0000&\u008e\u0001\u0000\u0000\u0000(*\u0003\u0002\u0001"+
		"\u0000)+\u0005A\u0000\u0000*)\u0001\u0000\u0000\u0000*+\u0001\u0000\u0000"+
		"\u0000+-\u0001\u0000\u0000\u0000,(\u0001\u0000\u0000\u0000-0\u0001\u0000"+
		"\u0000\u0000.,\u0001\u0000\u0000\u0000./\u0001\u0000\u0000\u0000/1\u0001"+
		"\u0000\u0000\u00000.\u0001\u0000\u0000\u000012\u0005\u0000\u0000\u0001"+
		"2\u0001\u0001\u0000\u0000\u00003B\u0003\u0004\u0002\u00004B\u0003\u0006"+
		"\u0003\u00005B\u0003\b\u0004\u00006B\u0003\n\u0005\u00007B\u0003\f\u0006"+
		"\u00008B\u0003\u000e\u0007\u00009B\u0003\u0010\b\u0000:B\u0003\u0012\t"+
		"\u0000;B\u0003\u0014\n\u0000<B\u0003\u0016\u000b\u0000=B\u0003\u0018\f"+
		"\u0000>B\u0003\u001a\r\u0000?B\u0003\u001c\u000e\u0000@B\u0003\u001e\u000f"+
		"\u0000A3\u0001\u0000\u0000\u0000A4\u0001\u0000\u0000\u0000A5\u0001\u0000"+
		"\u0000\u0000A6\u0001\u0000\u0000\u0000A7\u0001\u0000\u0000\u0000A8\u0001"+
		"\u0000\u0000\u0000A9\u0001\u0000\u0000\u0000A:\u0001\u0000\u0000\u0000"+
		"A;\u0001\u0000\u0000\u0000A<\u0001\u0000\u0000\u0000A=\u0001\u0000\u0000"+
		"\u0000A>\u0001\u0000\u0000\u0000A?\u0001\u0000\u0000\u0000A@\u0001\u0000"+
		"\u0000\u0000B\u0003\u0001\u0000\u0000\u0000CD\u0005\u0001\u0000\u0000"+
		"DE\u0005>\u0000\u0000EF\u0005<\u0000\u0000FG\u0003&\u0013\u0000G\u0005"+
		"\u0001\u0000\u0000\u0000HI\u0005\u0002\u0000\u0000IJ\u0005>\u0000\u0000"+
		"J\u0007\u0001\u0000\u0000\u0000KL\u0007\u0000\u0000\u0000LM\u0003&\u0013"+
		"\u0000MN\u0003&\u0013\u0000N\t\u0001\u0000\u0000\u0000OP\u0005\b\u0000"+
		"\u0000PQ\u0005>\u0000\u0000Q\u000b\u0001\u0000\u0000\u0000RS\u0005\t\u0000"+
		"\u0000ST\u0005>\u0000\u0000T\r\u0001\u0000\u0000\u0000UW\u0007\u0001\u0000"+
		"\u0000VX\u0003$\u0012\u0000WV\u0001\u0000\u0000\u0000XY\u0001\u0000\u0000"+
		"\u0000YW\u0001\u0000\u0000\u0000YZ\u0001\u0000\u0000\u0000Z\u000f\u0001"+
		"\u0000\u0000\u0000[]\u0007\u0002\u0000\u0000\\^\u0003$\u0012\u0000]\\"+
		"\u0001\u0000\u0000\u0000^_\u0001\u0000\u0000\u0000_]\u0001\u0000\u0000"+
		"\u0000_`\u0001\u0000\u0000\u0000`\u0011\u0001\u0000\u0000\u0000ae\u0007"+
		"\u0003\u0000\u0000bd\u0003$\u0012\u0000cb\u0001\u0000\u0000\u0000dg\u0001"+
		"\u0000\u0000\u0000ec\u0001\u0000\u0000\u0000ef\u0001\u0000\u0000\u0000"+
		"f\u0013\u0001\u0000\u0000\u0000ge\u0001\u0000\u0000\u0000hi\u0005\'\u0000"+
		"\u0000ij\u0005>\u0000\u0000jl\u0005>\u0000\u0000km\u0005>\u0000\u0000"+
		"lk\u0001\u0000\u0000\u0000lm\u0001\u0000\u0000\u0000m\u0015\u0001\u0000"+
		"\u0000\u0000no\u0005(\u0000\u0000op\u0005>\u0000\u0000pq\u0005>\u0000"+
		"\u0000q\u0017\u0001\u0000\u0000\u0000rs\u0005)\u0000\u0000st\u0003$\u0012"+
		"\u0000t\u0019\u0001\u0000\u0000\u0000uv\u0005*\u0000\u0000vw\u0003 \u0010"+
		"\u0000wx\u0005+\u0000\u0000xy\u0003\u0002\u0001\u0000y\u001b\u0001\u0000"+
		"\u0000\u0000z{\u0005,\u0000\u0000{|\u0003&\u0013\u0000|\u001d\u0001\u0000"+
		"\u0000\u0000}~\u0007\u0004\u0000\u0000~\u001f\u0001\u0000\u0000\u0000"+
		"\u007f\u0080\u0003&\u0013\u0000\u0080\u0081\u0003\"\u0011\u0000\u0081"+
		"\u0082\u0003&\u0013\u0000\u0082!\u0001\u0000\u0000\u0000\u0083\u0084\u0007"+
		"\u0005\u0000\u0000\u0084#\u0001\u0000\u0000\u0000\u0085\u0086\u0007\u0006"+
		"\u0000\u0000\u0086%\u0001\u0000\u0000\u0000\u0087\u0088\u0006\u0013\uffff"+
		"\uffff\u0000\u0088\u0089\u0005:\u0000\u0000\u0089\u008a\u0003&\u0013\u0000"+
		"\u008a\u008b\u0005;\u0000\u0000\u008b\u008f\u0001\u0000\u0000\u0000\u008c"+
		"\u008f\u0005?\u0000\u0000\u008d\u008f\u0005>\u0000\u0000\u008e\u0087\u0001"+
		"\u0000\u0000\u0000\u008e\u008c\u0001\u0000\u0000\u0000\u008e\u008d\u0001"+
		"\u0000\u0000\u0000\u008f\u009b\u0001\u0000\u0000\u0000\u0090\u0091\n\u0006"+
		"\u0000\u0000\u0091\u0092\u0005\u0007\u0000\u0000\u0092\u009a\u0003&\u0013"+
		"\u0006\u0093\u0094\n\u0005\u0000\u0000\u0094\u0095\u0007\u0007\u0000\u0000"+
		"\u0095\u009a\u0003&\u0013\u0006\u0096\u0097\n\u0004\u0000\u0000\u0097"+
		"\u0098\u0007\b\u0000\u0000\u0098\u009a\u0003&\u0013\u0005\u0099\u0090"+
		"\u0001\u0000\u0000\u0000\u0099\u0093\u0001\u0000\u0000\u0000\u0099\u0096"+
		"\u0001\u0000\u0000\u0000\u009a\u009d\u0001\u0000\u0000\u0000\u009b\u0099"+
		"\u0001\u0000\u0000\u0000\u009b\u009c\u0001\u0000\u0000\u0000\u009c\'\u0001"+
		"\u0000\u0000\u0000\u009d\u009b\u0001\u0000\u0000\u0000\n*.AY_el\u008e"+
		"\u0099\u009b";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}