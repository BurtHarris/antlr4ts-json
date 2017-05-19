import {ANTLRInputStream, CommonTokenStream} from 'antlr4ts';
import {TerminalNode, ParseTreeWalker}  from 'antlr4ts/tree';
import {JsonLexer} from './gen/JsonLexer'
import {JsonParser, ValueContext} from './gen/JsonParser'

export {ValueContext} from './gen/JsonParser'

export interface JsonOptions {
}

export function jsonParseTree(jsonText: string, options?: JsonOptions)  {
    const inputStream = new ANTLRInputStream(jsonText);
    const lexer = new JsonLexer(inputStream);
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new JsonParser(tokenStream);
    parser.buildParseTree = true;
    return parser.value();
}

// tempoary test harness

import * as fs from 'fs';
const filename = 'package.json';
fs.readFile(filename, 'utf8', (err, data) => {
    if (err) throw err;
    const tree = jsonParseTree(data);
    console.log( tree.children![0] );   
});
