antlr4ts Walkthrough
========================

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

We start by creating a directory for the project.  Starting your command prompt in whatever directory you put projects into, the commands used are:    
```cmd
mkdir antlr4ts-json
cd antlr4ts-json
npm init
```
At NPM will ask a few basic questions about your project and generate a skeleton file named **package.json**.   You can choose to leave most of these answers blank, but for this project I've chosen to fill them in, so [**package.json** started out like this](https://github.com/BurtHarris/antlr4ts-json/blob/1f82f180c65f36e0855ee20c4421fcbf8f07ab67/package.json).

# Initial **Json.g4** grammar file and the **antlr4ts-cli** tool

We'll start with an existing [JSON.g4](https://github.com/antlr/grammars-v4/blob/master/json/JSON.g4) Antlr v4 grammar file for Json from the available [Antlr v4 samples](https://github.com/antlr/grammars-v4) on github.   I've simply done a copy/paste of the raw text of that grammar, and made one stylisitc change on capitialization, instead of 'grammar JSON;', I prefer how things come out with `grammar Json;`  Matching the new capitialization, save that grammar as `Json.g4` in root directory of the project.  

Note: Capitalization matters, even on platforms like Windows which are usually only case-preserving.   For now, I strongly reccomend your grammar file into the root directory of your poject.    Node modules tend to be small and composable, so 

We'll be using  the **antlr4ts** runtime and command line tool (**antlr4ts-cli**) with this grammar file to build the package.   The following two commands will install the latest stable versions of these dependencies from the https://npmjs.org repository, and update **package.json** to note the dependencies.

```cmd
npm install --save antlr4ts
npm install --save-dev antlr4ts-cli
```

Now we could have used the `--global` option to install it, instead of `--save-dev`, but I've chosen the later to document in the **package.json** file that it is needed only for development, and note what version is being used.   It will install the tool into the `node_modules` subdirectory of my working directory, you will want to exclude `node_modules` from getting checked into source control, as they can be re-installed any time with the `npm install` command. 

Using your favorite text editor (I like VSCode), edit the **package.json** file to add a script to invoke the tool with all the project-specific switches.   To start with, the relevant part will look like this:
```json
  "scripts": {
    "antlr4": "antlr4ts Json.g4 -o gen",
    ...
  },
```

We can use this script to test out the tool's operation with the command `npm run antlr4`.   Later will include this in the build process, but for now you can run this and examine the **gen** directory to see the generated files.