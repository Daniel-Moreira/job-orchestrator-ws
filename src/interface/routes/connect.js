const { ConnectionStore } = require('../../domain/store')

module.exports = async (event, context) => {
  const connectionId = event.requestContext.connectionId
  const domainName = event.requestContext.domainName
  const stage = event.requestContext.stage

  try {
    await ConnectionStore.put(connectionId, { domainName, stage })
  } catch (err) {
    console.log(err)
    return { statusCode: 500 }
  }

  return { statusCode: 200 }
}
