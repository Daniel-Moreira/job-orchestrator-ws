const { ConnectionStore } = require('../../domain')

module.exports = async (event, context) => {
  const connectionId = event.requestContext.connectionId

  try {
    await ConnectionStore.remove(connectionId)
  } catch (err) {
    console.log(JSON.stringify(err))
    return { statusCode: 500 }
  }

  return { statusCode: 200 }
}
