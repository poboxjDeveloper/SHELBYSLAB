# Express Server and jsDoc

## Express

Check out Express for node. The default Server.
Also, installed jsDoc and configured it for a test.

Steps taken:

- [tutorial followed](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/development_environment)
- `npm init`
- follow all prompted steps
- install express: `npm install express`
- install jsdoc: `npm install --save-dev jsdoc`

### Installed Packages

#### DEV

- [ESLint](https://eslint.org/)
- [jsDoc](https://github.com/jsdoc/jsdoc)

#### General

- [Express](https://expressjs.com/)

## Using JS Doc

- install it local as a dev dep.
- add a jsdoc.json file.
  - example: ```{
  "tags": {
    "allowUnknownTags": true
  },
  "source": {
    "include": "./src",
    "includePattern": ".js$",
    "excludePattern": "(node_modules/|docs)"
  },
  "plugins": ["plugins/markdown"],
  "opts": {
    "encoding": "utf8",
    "readme": "./readme.md",
    "destination": "docs/",
    "recurse": true,
    "verbose": true
  },
  "templates": {
    "cleverLinks": false,
    "monospaceLinks": false,
    "default": {
      "outputSourceFiles": true
    }
  }
}
`
