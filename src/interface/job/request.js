const { job } = require('../../domain')

module.exports = async (event, context) => {
  const body = typeof event.body === 'string' ? JSON.parse(event.body) : event.body
  const clientData = event.requestContext
  const jobId = body.jobId

  try {
    await job.request(clientData, jobId)
  } catch (err) {
    console.log('Erro', JSON.stringify(err))
    return { statusCode: 500 }
  }

  return { statusCode: 200 }
}
