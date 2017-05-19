Antlr4TS Walkthrough
=====================

This project is a tutorial for using the [Antlr4](http://www.antlr.org/) parser generator on  [Node.js](https://nodejs.org/) using the [TypeScript](http://www.typescriptlang.org/) and serve as a walkthrough of best practices for the NPM module [antlr4ts](https://www.npmjs.com/package/antlr4ts).    

The Node.js environment has a well developed package ecosystem, Node Package Manager ([NPM](https://www.npmjs.com)) which is generally composed of small open-source modules which each do a small function, with well documented interdependencies between packages.   Antlr on the other hand originated in the from the Java (not JavaScript) realm, and the development toolset requires a Java environment setup.   The generated code will however have no Java dependencies.   

For this example, we'll generate an NPM package to support the lightweight data-interchange format [Json](http://json.org).  Json is well understood among developers using Node.js, so the point of this package is not to replace the built-in Json support in node, but to illustrate how to use Antlr4.

# Environment Pre-reqs
- Install [Node.js](https://nodejs.org/en/) - The stable version 6.10.3 (LTS) reccomended for most users
- Install [Install the Java SDK]() -
- Test prerequsites are installed at the command line:
```cmd
node -v
java -version
```
- Upgrade to the latest stable version of NPM and install the TypeScript tools globally:
```cmd
npm install -g npm typescript
```

# Project Setup  

We start by creating a directory for the project    
```cmd
md antlr4ts-json
cd antlr4ts-json
npm init
```
At NPM will ask a few basic questions about your project and generate a skeleton file named **project.json**.   You can choose to leave most of these answers blank, but the initial version for this project like this:
```json
{
  "name": "antlr4ts-json",
  "version": "1.0.0",
  "description": "Antlr4 tutorial project",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [
    "Antlr4",
    "parser",
    "generator",
    "TypeScript"
  ],
  "author": "Burt Harris",
  "license": "MIT",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/BurtHarris/antlr4ts-json.git"
  },
  "bugs": {
    "url": "https://github.com/BurtHarris/antlr4ts-json/issues"
  },
  "homepage": "https://github.com/BurtHarris/antlr4ts-json#readme"
}
```




