const apiClient = require('./client')

async function response ({ domainName, stage, connectionId }, payload) {
  if (!(domainName || stage || connectionId || payload)) {
    throw Error({ payload: { domainName, stage, connectionId, payload }, message: 'Missing required attribute' })
  }

  const client = apiClient(domainName, stage)

  return client.postToConnection({
    ConnectionId: connectionId,
    Data: payload
  }).promise()
}

module.exports = response
