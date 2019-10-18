const { apiGateway } = require('../../infrastructure/aws')

async function send (clientData, payload) {
  if (!payload) return
  payload = typeof payload === 'string' ? payload : JSON.stringify(payload)

  return apiGateway.response(clientData, payload)
}

module.exports = { send }
