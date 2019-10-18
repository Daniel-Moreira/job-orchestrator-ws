const { dynamo } = require('../../../infrastructure/aws')

async function get (key) {
  const result = (await dynamo.get({ [this.DYNAMO_KEY]: key }, this.TABLE_NAME)).Item

  return result.data
}

module.exports = get
