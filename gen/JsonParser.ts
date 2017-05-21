// Generated from Json.g4 by ANTLR 4.6-SNAPSHOT


import { ATN } from 'antlr4ts/atn/ATN';
import { ATNDeserializer } from 'antlr4ts/atn/ATNDeserializer';
import { FailedPredicateException } from 'antlr4ts/FailedPredicateException';
import { NotNull } from 'antlr4ts/Decorators';
import { NoViableAltException } from 'antlr4ts/NoViableAltException';
import { Override } from 'antlr4ts/Decorators';
import { Parser } from 'antlr4ts/Parser';
import { ParserRuleContext } from 'antlr4ts/ParserRuleContext';
import { ParserATNSimulator } from 'antlr4ts/atn/ParserATNSimulator';
import { ParseTreeListener } from 'antlr4ts/tree/ParseTreeListener';
import { ParseTreeVisitor } from 'antlr4ts/tree/ParseTreeVisitor';
import { RecognitionException } from 'antlr4ts/RecognitionException';
import { RuleContext } from 'antlr4ts/RuleContext';
import { RuleVersion } from 'antlr4ts/RuleVersion';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { Token } from 'antlr4ts/Token';
import { TokenStream } from 'antlr4ts/TokenStream';
import { Vocabulary } from 'antlr4ts/Vocabulary';
import { VocabularyImpl } from 'antlr4ts/VocabularyImpl';

import * as Utils from 'antlr4ts/misc/Utils';

import { JsonListener } from './JsonListener';
import { JsonVisitor } from './JsonVisitor';


export class JsonParser extends Parser {
	public static readonly T__0=1;
	public static readonly T__1=2;
	public static readonly T__2=3;
	public static readonly T__3=4;
	public static readonly T__4=5;
	public static readonly T__5=6;
	public static readonly T__6=7;
	public static readonly T__7=8;
	public static readonly T__8=9;
	public static readonly STRING=10;
	public static readonly NUMBER=11;
	public static readonly WS=12;
	public static readonly RULE_obj = 0;
	public static readonly RULE_pair = 1;
	public static readonly RULE_array = 2;
	public static readonly RULE_value = 3;
	public static readonly ruleNames: string[] = [
		"obj", "pair", "array", "value"
	];

	private static readonly _LITERAL_NAMES: (string | undefined)[] = [
		undefined, "'{'", "','", "'}'", "':'", "'['", "']'", "'true'", "'false'", 
		"'null'"
	];
	private static readonly _SYMBOLIC_NAMES: (string | undefined)[] = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, "STRING", "NUMBER", "WS"
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(JsonParser._LITERAL_NAMES, JsonParser._SYMBOLIC_NAMES, []);

	@Override
	@NotNull
	public get vocabulary(): Vocabulary {
		return JsonParser.VOCABULARY;
	}

	@Override
	public get grammarFileName(): string { return "Json.g4"; }

	@Override
	public get ruleNames(): string[] { return JsonParser.ruleNames; }

	@Override
	public get serializedATN(): string { return JsonParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(JsonParser._ATN, this);
	}
	@RuleVersion(0)
	public obj(): ObjContext {
		let _localctx: ObjContext = new ObjContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, JsonParser.RULE_obj);
		let _la: number;
		try {
			this.state = 21;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,1,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 8;
				this.match(JsonParser.T__0);
				this.state = 9;
				this.pair();
				this.state = 14;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===JsonParser.T__1) {
					{
					{
					this.state = 10;
					this.match(JsonParser.T__1);
					this.state = 11;
					this.pair();
					}
					}
					this.state = 16;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 17;
				this.match(JsonParser.T__2);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 19;
				this.match(JsonParser.T__0);
				this.state = 20;
				this.match(JsonParser.T__2);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public pair(): PairContext {
		let _localctx: PairContext = new PairContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, JsonParser.RULE_pair);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 23;
			_localctx._name = this.match(JsonParser.STRING);
			this.state = 24;
			this.match(JsonParser.T__3);
			this.state = 25;
			this.value();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public array(): ArrayContext {
		let _localctx: ArrayContext = new ArrayContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, JsonParser.RULE_array);
		let _la: number;
		try {
			this.state = 40;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,3,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 27;
				this.match(JsonParser.T__4);
				this.state = 28;
				this.value();
				this.state = 33;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===JsonParser.T__1) {
					{
					{
					this.state = 29;
					this.match(JsonParser.T__1);
					this.state = 30;
					this.value();
					}
					}
					this.state = 35;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 36;
				this.match(JsonParser.T__5);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 38;
				this.match(JsonParser.T__4);
				this.state = 39;
				this.match(JsonParser.T__5);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public value(): ValueContext {
		let _localctx: ValueContext = new ValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, JsonParser.RULE_value);
		try {
			this.state = 49;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JsonParser.STRING:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 42;
				_localctx._string = this.match(JsonParser.STRING);
				}
				break;
			case JsonParser.NUMBER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 43;
				_localctx._number = this.match(JsonParser.NUMBER);
				}
				break;
			case JsonParser.T__0:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 44;
				this.obj();
				}
				break;
			case JsonParser.T__4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 45;
				this.array();
				}
				break;
			case JsonParser.T__6:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 46;
				this.match(JsonParser.T__6);
				}
				break;
			case JsonParser.T__7:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 47;
				this.match(JsonParser.T__7);
				}
				break;
			case JsonParser.T__8:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 48;
				this.match(JsonParser.T__8);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uAF6F\u8320\u479D\uB75C\u4880\u1605\u191C\uAB37\x03\x0E6\x04\x02"+
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x03\x02\x03\x02\x03\x02"+
		"\x03\x02\x07\x02\x0F\n\x02\f\x02\x0E\x02\x12\v\x02\x03\x02\x03\x02\x03"+
		"\x02\x03\x02\x05\x02\x18\n\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x04"+
		"\x03\x04\x03\x04\x03\x04\x07\x04\"\n\x04\f\x04\x0E\x04%\v\x04\x03\x04"+
		"\x03\x04\x03\x04\x03\x04\x05\x04+\n\x04\x03\x05\x03\x05\x03\x05\x03\x05"+
		"\x03\x05\x03\x05\x03\x05\x05\x054\n\x05\x03\x05\x02\x02\x02\x06\x02\x02"+
		"\x04\x02\x06\x02\b\x02\x02\x02;\x02\x17\x03\x02\x02\x02\x04\x19\x03\x02"+
		"\x02\x02\x06*\x03\x02\x02\x02\b3\x03\x02\x02\x02\n\v\x07\x03\x02\x02\v"+
		"\x10\x05\x04\x03\x02\f\r\x07\x04\x02\x02\r\x0F\x05\x04\x03\x02\x0E\f\x03"+
		"\x02\x02\x02\x0F\x12\x03\x02\x02\x02\x10\x0E\x03\x02\x02\x02\x10\x11\x03"+
		"\x02\x02\x02\x11\x13\x03\x02\x02\x02\x12\x10\x03\x02\x02\x02\x13\x14\x07"+
		"\x05\x02\x02\x14\x18\x03\x02\x02\x02\x15\x16\x07\x03\x02\x02\x16\x18\x07"+
		"\x05\x02\x02\x17\n\x03\x02\x02\x02\x17\x15\x03\x02\x02\x02\x18\x03\x03"+
		"\x02\x02\x02\x19\x1A\x07\f\x02\x02\x1A\x1B\x07\x06\x02\x02\x1B\x1C\x05"+
		"\b\x05\x02\x1C\x05\x03\x02\x02\x02\x1D\x1E\x07\x07\x02\x02\x1E#\x05\b"+
		"\x05\x02\x1F \x07\x04\x02\x02 \"\x05\b\x05\x02!\x1F\x03\x02\x02\x02\""+
		"%\x03\x02\x02\x02#!\x03\x02\x02\x02#$\x03\x02\x02\x02$&\x03\x02\x02\x02"+
		"%#\x03\x02\x02\x02&\'\x07\b\x02\x02\'+\x03\x02\x02\x02()\x07\x07\x02\x02"+
		")+\x07\b\x02\x02*\x1D\x03\x02\x02\x02*(\x03\x02\x02\x02+\x07\x03\x02\x02"+
		"\x02,4\x07\f\x02\x02-4\x07\r\x02\x02.4\x05\x02\x02\x02/4\x05\x06\x04\x02"+
		"04\x07\t\x02\x0214\x07\n\x02\x0224\x07\v\x02\x023,\x03\x02\x02\x023-\x03"+
		"\x02\x02\x023.\x03\x02\x02\x023/\x03\x02\x02\x0230\x03\x02\x02\x0231\x03"+
		"\x02\x02\x0232\x03\x02\x02\x024\t\x03\x02\x02\x02\x07\x10\x17#*3";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!JsonParser.__ATN) {
			JsonParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(JsonParser._serializedATN));
		}

		return JsonParser.__ATN;
	}

}

export class ObjContext extends ParserRuleContext {
	public pair(): PairContext[];
	public pair(i: number): PairContext;
	public pair(i?: number): PairContext | PairContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PairContext);
		} else {
			return this.getRuleContext(i, PairContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JsonParser.RULE_obj; }
	@Override
	public enterRule(listener: JsonListener): void {
		if (listener.enterObj) listener.enterObj(this);
	}
	@Override
	public exitRule(listener: JsonListener): void {
		if (listener.exitObj) listener.exitObj(this);
	}
	@Override
	public accept<Result>(visitor: JsonVisitor<Result>): Result {
		if (visitor.visitObj) return visitor.visitObj(this);
		else return visitor.visitChildren(this);
	}
}


export class PairContext extends ParserRuleContext {
	public _name: Token;
	public value(): ValueContext {
		return this.getRuleContext(0, ValueContext);
	}
	public STRING(): TerminalNode { return this.getToken(JsonParser.STRING, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JsonParser.RULE_pair; }
	@Override
	public enterRule(listener: JsonListener): void {
		if (listener.enterPair) listener.enterPair(this);
	}
	@Override
	public exitRule(listener: JsonListener): void {
		if (listener.exitPair) listener.exitPair(this);
	}
	@Override
	public accept<Result>(visitor: JsonVisitor<Result>): Result {
		if (visitor.visitPair) return visitor.visitPair(this);
		else return visitor.visitChildren(this);
	}
}


export class ArrayContext extends ParserRuleContext {
	public value(): ValueContext[];
	public value(i: number): ValueContext;
	public value(i?: number): ValueContext | ValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueContext);
		} else {
			return this.getRuleContext(i, ValueContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JsonParser.RULE_array; }
	@Override
	public enterRule(listener: JsonListener): void {
		if (listener.enterArray) listener.enterArray(this);
	}
	@Override
	public exitRule(listener: JsonListener): void {
		if (listener.exitArray) listener.exitArray(this);
	}
	@Override
	public accept<Result>(visitor: JsonVisitor<Result>): Result {
		if (visitor.visitArray) return visitor.visitArray(this);
		else return visitor.visitChildren(this);
	}
}


export class ValueContext extends ParserRuleContext {
	public _string: Token;
	public _number: Token;
	public STRING(): TerminalNode | undefined { return this.tryGetToken(JsonParser.STRING, 0); }
	public NUMBER(): TerminalNode | undefined { return this.tryGetToken(JsonParser.NUMBER, 0); }
	public obj(): ObjContext | undefined {
		return this.tryGetRuleContext(0, ObjContext);
	}
	public array(): ArrayContext | undefined {
		return this.tryGetRuleContext(0, ArrayContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JsonParser.RULE_value; }
	@Override
	public enterRule(listener: JsonListener): void {
		if (listener.enterValue) listener.enterValue(this);
	}
	@Override
	public exitRule(listener: JsonListener): void {
		if (listener.exitValue) listener.exitValue(this);
	}
	@Override
	public accept<Result>(visitor: JsonVisitor<Result>): Result {
		if (visitor.visitValue) return visitor.visitValue(this);
		else return visitor.visitChildren(this);
	}
}


