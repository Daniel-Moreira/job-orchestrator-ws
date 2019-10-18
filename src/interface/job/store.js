const { job } = require('../../domain')

module.exports = async (event) => {
  const body = typeof event.body === 'string' ? JSON.parse(event.body) : event.body
  const jobId = body.jobId
  const payload = body.payload

  try {
    await job.store(jobId, payload)
  } catch (err) {
    console.log(JSON.stringify(err))
    return { statusCode: 500 }
  }

  return { statusCode: 200 }
}
