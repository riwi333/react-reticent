# react-reticent

This was developed on Linux (Windows 10 WSL 2 Ubuntu).

## how to use (via the terminal)

1. have `node.js` installed
2. enter the root directory of the project
3. `npm i` (this installs all the dependencies needed for the project)
4. ???
5. from the root directory of the project, `npm run start` (should open the app in a browser tab)

## files & folders

these descriptions may not be 100% accurate since i might've forgot some things

- `src` = the code
- `webpack.config.js`
	- configuration file for webpack (responsible for preparing files to be loaded into a browser)
	- if the names of template files like `index.html` are changed, this file needs to be updated accordingly
- `package.json`, `package-lock.json` = node.js configuration file
- `.babelrc` = config file for Babel (javascript compiler)
- `src/index.html` = template HTML file that React code will be inserted into
- `src/index.js` = React code to be inserted

## notes

- this is barely tested ("Works on My Machine"-type beat)
- comments related to the template (i.e. irrelevant to the actual project) are pre-fixed with `[TEMP]` so they can be `CTRL-F`'d