function buildKey (keys, object) {
  const objectKeys = {}

  keys.forEach(key => {
    objectKeys[key] = object[key]
    delete object[key]
  })

  return objectKeys
}

module.exports = { buildKey }
