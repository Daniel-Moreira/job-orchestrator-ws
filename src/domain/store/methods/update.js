const { dynamo } = require('../../../infrastructure/aws')

async function update (key, data) {
  data[this.DYNAMO_KEY] = key

  return dynamo.update([this.DYNAMO_KEY], data, this.TABLE_NAME, this.TTL)
}

module.exports = update
