const resolve = require('resolve-cwd');
const spawn = require('child_process').spawn;
const path = require('path');
const pixie = require('pixie');
const cordlrPlugin = function cordlrVersion(unknown, cb) {
  const npm = spawn('npm', ['root', '-g']);
  let out = '';
  npm.stdout.on('data', data => out += data);
  npm.on('exit', () => {
    const package = require(path.join(out.trim(), 'cordlr', 'package.json'));
    cb({
      name: 'cordlr',
      version: package.version,
      author: package._from.split('/').splice(0, 1).toString() || unknown,
      homepage: package.homepage || unknown
    });
  });
};

function version(bot, config) {
  const scripts = config.plugins;
  let plugins = scripts.map(p => {
    const package = require(path.join(path.dirname(resolve(p)), 'package.json'));
    return {
      name: p,
      version: package.version,
      author: package.author || config.version.unknown,
      homepage: package.homepage || config.version.unknown
    }
  });

  cordlrPlugin(config.version.unknown, p => {
    plugins.push(p);
  });

  return function run(message, args) {
    if (args.length > 0) {
      const plugin = plugins.filter(p => p.name === args[0]).map(p => {
        return pixie.render(config.version.format, p);
      }).join('\n');
      if (config.version.code) return message.channel.sendCode(null, plugin, {split: true})
      else message.channel.sendMessage(plugin, {split: true});
      return;
    }
    
    const versions = plugins.map(p => {
      return pixie.render(config.version.format, p);
    }).join('\n');
    if (config.version.code) return message.channel.sendCode(null, versions, {split: true})
    else message.channel.sendMessage(versions, {split: true});
  }
}

version.command = 'version';
version.usage = 'version [plugin]';

module.exports = version;
