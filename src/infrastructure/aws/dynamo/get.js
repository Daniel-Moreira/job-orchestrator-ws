const dynamoClient = require('./client')

async function get (Key, TableName) {
  const params = { Key, TableName }

  return dynamoClient.get(params).promise()
}

module.exports = { get }
