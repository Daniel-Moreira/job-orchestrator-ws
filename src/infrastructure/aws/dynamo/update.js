const dynamoClient = require('./client')
const { buildKey } = require('./utils/buildKey')

function buildUpdateExpression (object) {
  return 'set ' + Object.keys(object).map((o) => `${o} = :${o}`).join(', ')
}

function buildValuesExpression (object) {
  let result = {}
  for (let key in object) result[`:${key}`] = object[key]

  return result
}

async function update (keys, data, TableName, timeOut) {
  if (timeOut) data.expires_on = Math.floor(Date.now() / 1000 + 60 * timeOut)

  if (!data) return

  const params = {
    TableName,
    Key: buildKey(keys, data),
    UpdateExpression: buildUpdateExpression(data),
    ExpressionAttributeValues: buildValuesExpression(data),
    ReturnValues: 'ALL_NEW'
  }

  return dynamoClient.update(params).promise()
}

module.exports = { update }
