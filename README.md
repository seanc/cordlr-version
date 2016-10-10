# cordlr-version [![NPM version](https://badge.fury.io/js/cordlr-version.svg)](https://npmjs.org/package/cordlr-version) [![Build Status](https://travis-ci.org/seanc/cordlr-version.svg?branch=master)](https://travis-ci.org/seanc/cordlr-version)

> Cordlr version plugin

**Warning** This plugin is experimental, use at your own risk.

## Installation

```sh
$ cordlr install cordlr-version
```

Then add it to your config.

```js
{
  "plugins": [
    "cordlr-version"
  ],
  "version": {
    "unknown": "Unknown", // What should the bot display if it can't find the plugin author
    "format": "{{name}}\n\tAuthor: {{author}}\n\tSource: {{homepage}}\n\tVersion: {{version}}", // How should the list be formatted
    "code": true // Should the list be sent in a code block
  }
}
```

## Usage

```
version [plugin]
```

## License

MIT © [Sean Wilson](https://imsean.me)
