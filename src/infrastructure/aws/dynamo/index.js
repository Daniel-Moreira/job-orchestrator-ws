const { get } = require('./get')
const { client } = require('./client')
const { put } = require('./put')
const { remove } = require('./remove')
const { utils } = require('./utils')
const { update } = require('./update')

module.exports = { get, client, put, utils, update, remove }
