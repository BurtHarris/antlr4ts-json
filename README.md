antlr4ts-json - Yet another JSON parser
=======================================

This is a tutorial for using [`antlr4ts`](https://www.npmjs.com/package/antlr4ts) & [`antlr4ts-cli`](https://www.npmjs.com/package/antlr4ts-cli)to use [Antlr4](http://www.antlr.org/) grammars on [Node.js](https://nodejs.org/) (using [TypeScript](http://www.typescriptlang.org/)).  It is based on the [JSON](http://json.org/)-based language beacuse this it is well understood in the JavaScript community. 

- *Work on the tutorial is still in-flux...* **[please click here](https://github.com/BurtHarris/antlr4ts-json/tree/master/docs#readme)** to read the latest version online using github.   

- Comments and feedback on this tutorial are welcome using [gitub issues](https://github.com/BurtHarris/antlr4ts-json/issues).

- This is __not__ a tutorial on Antlr4 grammars, instead it starts from an existing [`JSON.g4`](https://github.com/antlr/grammars-v4/tree/master/json) grammar and illustrates one practical way to use the **antlr4ts** tools.   As antlr4ts becomes more stable, thsi project may evolve into a more useful npm module as well

- Browser-based use of antlr4ts is not yet supported, but may be possible soon!

Pre-release notes: *Why someone would build another JSON parser in JavaScript*
-----------

The project is intended to replace the built-in JSON support found in most JavaScript engines, or the highly portable `json2.js`.  Instead of parsing JSON into plain-old JavaScript object, Antlr can produce a parse-tree complete with information about every token found, e.g. the text's position within a file.  Antlr also supports several patterns processing the the tree, including listeners and visitors.   As a result:

- Error reporting (and recovery) can be better in Antlr-based parsers than some others.

- A parse tree can be useful in tools that seek to transform javascript while preserving its formatting.   