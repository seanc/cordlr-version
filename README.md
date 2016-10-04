# cordlr-version [![NPM version](https://badge.fury.io/js/cordlr-version.svg)](https://npmjs.org/package/cordlr-version) [![Build Status](https://travis-ci.org/seanc/cordlr-version.svg?branch=master)](https://travis-ci.org/seanc/cordlr-version)

> Cordlr version plugin

**Warning** This plugin is experimental, use at your own risk.

## Installation

```sh
$ cordlr install cordlr-version
```

Then add it to your config.

```json
{
  "plugins": [
    "cordlr-version"
  ],
  "version": {
    "unknown": "Unknown",
    "format": "{{name}}\n\tAuthor: {{author}}\n\tSource: {{homepage}}\n\tVersion: {{version}}",
    "code": true
  }
}
```

## Usage

```
version
```

## License

MIT © [Sean Wilson](https://imsean.me)
