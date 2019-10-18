const { dynamo } = require('../../../infrastructure/aws')

async function remove (key) {
  const dynamoItem = {
    [this.DYNAMO_KEY]: key
  }

  return dynamo.remove(dynamoItem, this.TABLE_NAME)
}

module.exports = remove
