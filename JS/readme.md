# Using JS Doc

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
