// Generated from d:/PROGRAMACION/UMG/compiladores/src/grammar/Consola.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link ConsolaParser}.
 */
public interface ConsolaListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link ConsolaParser#program}.
	 * @param ctx the parse tree
	 */
	void enterProgram(ConsolaParser.ProgramContext ctx);
	/**
	 * Exit a parse tree produced by {@link ConsolaParser#program}.
	 * @param ctx the parse tree
	 */
	void exitProgram(ConsolaParser.ProgramContext ctx);
	/**
	 * Enter a parse tree produced by {@link ConsolaParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterStatement(ConsolaParser.StatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link ConsolaParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitStatement(ConsolaParser.StatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link ConsolaParser#setStmt}.
	 * @param ctx the parse tree
	 */
	void enterSetStmt(ConsolaParser.SetStmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link ConsolaParser#setStmt}.
	 * @param ctx the parse tree
	 */
	void exitSetStmt(ConsolaParser.SetStmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link ConsolaParser#getStmt}.
	 * @param ctx the parse tree
	 */
	void enterGetStmt(ConsolaParser.GetStmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link ConsolaParser#getStmt}.
	 * @param ctx the parse tree
	 */
	void exitGetStmt(ConsolaParser.GetStmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link ConsolaParser#mathStmt}.
	 * @param ctx the parse tree
	 */
	void enterMathStmt(ConsolaParser.MathStmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link ConsolaParser#mathStmt}.
	 * @param ctx the parse tree
	 */
	void exitMathStmt(ConsolaParser.MathStmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link ConsolaParser#incStmt}.
	 * @param ctx the parse tree
	 */
	void enterIncStmt(ConsolaParser.IncStmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link ConsolaParser#incStmt}.
	 * @param ctx the parse tree
	 */
	void exitIncStmt(ConsolaParser.IncStmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link ConsolaParser#decStmt}.
	 * @param ctx the parse tree
	 */
	void enterDecStmt(ConsolaParser.DecStmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link ConsolaParser#decStmt}.
	 * @param ctx the parse tree
	 */
	void exitDecStmt(ConsolaParser.DecStmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link ConsolaParser#stringStmt}.
	 * @param ctx the parse tree
	 */
	void enterStringStmt(ConsolaParser.StringStmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link ConsolaParser#stringStmt}.
	 * @param ctx the parse tree
	 */
	void exitStringStmt(ConsolaParser.StringStmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link ConsolaParser#fsStmt}.
	 * @param ctx the parse tree
	 */
	void enterFsStmt(ConsolaParser.FsStmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link ConsolaParser#fsStmt}.
	 * @param ctx the parse tree
	 */
	void exitFsStmt(ConsolaParser.FsStmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link ConsolaParser#utilStmt}.
	 * @param ctx the parse tree
	 */
	void enterUtilStmt(ConsolaParser.UtilStmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link ConsolaParser#utilStmt}.
	 * @param ctx the parse tree
	 */
	void exitUtilStmt(ConsolaParser.UtilStmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link ConsolaParser#templateStmt}.
	 * @param ctx the parse tree
	 */
	void enterTemplateStmt(ConsolaParser.TemplateStmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link ConsolaParser#templateStmt}.
	 * @param ctx the parse tree
	 */
	void exitTemplateStmt(ConsolaParser.TemplateStmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link ConsolaParser#scaffoldStmt}.
	 * @param ctx the parse tree
	 */
	void enterScaffoldStmt(ConsolaParser.ScaffoldStmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link ConsolaParser#scaffoldStmt}.
	 * @param ctx the parse tree
	 */
	void exitScaffoldStmt(ConsolaParser.ScaffoldStmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link ConsolaParser#serveStmt}.
	 * @param ctx the parse tree
	 */
	void enterServeStmt(ConsolaParser.ServeStmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link ConsolaParser#serveStmt}.
	 * @param ctx the parse tree
	 */
	void exitServeStmt(ConsolaParser.ServeStmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link ConsolaParser#ifStmt}.
	 * @param ctx the parse tree
	 */
	void enterIfStmt(ConsolaParser.IfStmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link ConsolaParser#ifStmt}.
	 * @param ctx the parse tree
	 */
	void exitIfStmt(ConsolaParser.IfStmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link ConsolaParser#evalStmt}.
	 * @param ctx the parse tree
	 */
	void enterEvalStmt(ConsolaParser.EvalStmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link ConsolaParser#evalStmt}.
	 * @param ctx the parse tree
	 */
	void exitEvalStmt(ConsolaParser.EvalStmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link ConsolaParser#simpleStmt}.
	 * @param ctx the parse tree
	 */
	void enterSimpleStmt(ConsolaParser.SimpleStmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link ConsolaParser#simpleStmt}.
	 * @param ctx the parse tree
	 */
	void exitSimpleStmt(ConsolaParser.SimpleStmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link ConsolaParser#condition}.
	 * @param ctx the parse tree
	 */
	void enterCondition(ConsolaParser.ConditionContext ctx);
	/**
	 * Exit a parse tree produced by {@link ConsolaParser#condition}.
	 * @param ctx the parse tree
	 */
	void exitCondition(ConsolaParser.ConditionContext ctx);
	/**
	 * Enter a parse tree produced by {@link ConsolaParser#relationalOp}.
	 * @param ctx the parse tree
	 */
	void enterRelationalOp(ConsolaParser.RelationalOpContext ctx);
	/**
	 * Exit a parse tree produced by {@link ConsolaParser#relationalOp}.
	 * @param ctx the parse tree
	 */
	void exitRelationalOp(ConsolaParser.RelationalOpContext ctx);
	/**
	 * Enter a parse tree produced by {@link ConsolaParser#arg}.
	 * @param ctx the parse tree
	 */
	void enterArg(ConsolaParser.ArgContext ctx);
	/**
	 * Exit a parse tree produced by {@link ConsolaParser#arg}.
	 * @param ctx the parse tree
	 */
	void exitArg(ConsolaParser.ArgContext ctx);
	/**
	 * Enter a parse tree produced by the {@code MulDivMod}
	 * labeled alternative in {@link ConsolaParser#expr}.
	 * @param ctx the parse tree
	 */
	void enterMulDivMod(ConsolaParser.MulDivModContext ctx);
	/**
	 * Exit a parse tree produced by the {@code MulDivMod}
	 * labeled alternative in {@link ConsolaParser#expr}.
	 * @param ctx the parse tree
	 */
	void exitMulDivMod(ConsolaParser.MulDivModContext ctx);
	/**
	 * Enter a parse tree produced by the {@code AddSub}
	 * labeled alternative in {@link ConsolaParser#expr}.
	 * @param ctx the parse tree
	 */
	void enterAddSub(ConsolaParser.AddSubContext ctx);
	/**
	 * Exit a parse tree produced by the {@code AddSub}
	 * labeled alternative in {@link ConsolaParser#expr}.
	 * @param ctx the parse tree
	 */
	void exitAddSub(ConsolaParser.AddSubContext ctx);
	/**
	 * Enter a parse tree produced by the {@code Parens}
	 * labeled alternative in {@link ConsolaParser#expr}.
	 * @param ctx the parse tree
	 */
	void enterParens(ConsolaParser.ParensContext ctx);
	/**
	 * Exit a parse tree produced by the {@code Parens}
	 * labeled alternative in {@link ConsolaParser#expr}.
	 * @param ctx the parse tree
	 */
	void exitParens(ConsolaParser.ParensContext ctx);
	/**
	 * Enter a parse tree produced by the {@code IntAtom}
	 * labeled alternative in {@link ConsolaParser#expr}.
	 * @param ctx the parse tree
	 */
	void enterIntAtom(ConsolaParser.IntAtomContext ctx);
	/**
	 * Exit a parse tree produced by the {@code IntAtom}
	 * labeled alternative in {@link ConsolaParser#expr}.
	 * @param ctx the parse tree
	 */
	void exitIntAtom(ConsolaParser.IntAtomContext ctx);
	/**
	 * Enter a parse tree produced by the {@code IdAtom}
	 * labeled alternative in {@link ConsolaParser#expr}.
	 * @param ctx the parse tree
	 */
	void enterIdAtom(ConsolaParser.IdAtomContext ctx);
	/**
	 * Exit a parse tree produced by the {@code IdAtom}
	 * labeled alternative in {@link ConsolaParser#expr}.
	 * @param ctx the parse tree
	 */
	void exitIdAtom(ConsolaParser.IdAtomContext ctx);
	/**
	 * Enter a parse tree produced by the {@code Power}
	 * labeled alternative in {@link ConsolaParser#expr}.
	 * @param ctx the parse tree
	 */
	void enterPower(ConsolaParser.PowerContext ctx);
	/**
	 * Exit a parse tree produced by the {@code Power}
	 * labeled alternative in {@link ConsolaParser#expr}.
	 * @param ctx the parse tree
	 */
	void exitPower(ConsolaParser.PowerContext ctx);
}