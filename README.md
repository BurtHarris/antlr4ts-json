antlr4ts-json - Yet another JSON parser
=======================================

This is a [JSON](http://json.org/)-based tutorial for using **[antlr4ts](https://www.npmjs.com/package/antlr4ts) & [antlr4ts-cli](https://www.npmjs.com/package/antlr4ts-cli)** to use [Antlr4](http://www.antlr.org/) grammars on [Node.js](https://nodejs.org/) using [TypeScript](http://www.typescriptlang.org/) using the npm packages .  

**[Click here to read the latest version of the walkthrough on github](https://github.com/BurtHarris/antlr4ts-json/tree/master/docs#readme)**

Pre-release notes on why someone would build another JSON parser
-----------

The project does not duplicate the built-in JSON support found in most JavaScript engines.  Instead of parsing JSON into an object-tree, antlr4ts-json it generates a parse-tree complete with information about every token and rule it found, including its position (line and column).  Browser-based use of antlr4ts is not yet supported, but may be possible soon!

This is __not__ a tutorial on Antlr4 grammars, instead it starts from an existing [`JSON.g4`](https://github.com/antlr/grammars-v4/tree/master/json) grammar and illustrates one practical way to use the **antlr4ts** tools.   As antlr4ts becomes more stable, thsi project may evolve into a more useful npm module as well.   