const AWS = require('aws-sdk')

module.exports = (domainName, stage) => new AWS.ApiGatewayManagementApi({
  apiVersion: '2018-11-29',
  endpoint: `https://${domainName}/${stage}`
})
