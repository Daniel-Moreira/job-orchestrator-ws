const dynamoClient = require('./client')

async function remove (Key, TableName) {
  const params = { Key, TableName }

  return dynamoClient.delete(params).promise()
}

module.exports = { remove }
