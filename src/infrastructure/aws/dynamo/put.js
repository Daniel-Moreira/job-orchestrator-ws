const dynamoClient = require('./client')

async function put (Item, TableName, timeOut) {
  if (timeOut) Item.expires_on = Math.floor(Date.now() / 1000 + 60 * timeOut)

  return dynamoClient.put({ Item, TableName }).promise()
}

module.exports = { put }
