const { get, put, remove } = require('./methods')
const config = require('../../config/table')

function GenericStore (table) {
  const tableConfig = config(table)

  this.DYNAMO_KEY = tableConfig ? tableConfig.key : undefined
  this.TTL = tableConfig ? tableConfig.ttl : undefined
  this.TABLE_NAME = table

  this.get = get
  this.put = put
  this.remove = remove
}

module.exports = GenericStore
