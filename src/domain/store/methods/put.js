const { dynamo } = require('../../../infrastructure/aws')

async function put (key, data) {
  const dynamoItem = {
    [this.DYNAMO_KEY]: key,
    data
  }

  return dynamo.put(dynamoItem, this.TABLE_NAME, this.TTL)
}

module.exports = put
