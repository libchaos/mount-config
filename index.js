const requireDirctory = require('require-directory')
const path = require('path')

function mountConfig (dir) {
  const configPathArr = dir.split('config')

  if (configPathArr.length > 1) {
    configPathArr.pop()
    configPathArr.join('config')
  } else {
    throw new Error(`mount-config ERROR: ${dir} dose not exist config dirctory`)
  }
  const _dir = path.resolve(configPathArr[0], 'config')
  console.log(_dir)
  return requireDirctory(module, _dir)
}

module.exports = mountConfig
