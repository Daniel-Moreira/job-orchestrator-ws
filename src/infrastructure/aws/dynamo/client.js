const AWS = require('aws-sdk')

module.exports = new AWS.DynamoDB.DocumentClient({
  region: process.env.REGION
})
