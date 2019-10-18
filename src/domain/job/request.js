const { JobStore } = require('../store')
const message = require('../message')

async function request ({ connectionId, domainName, stage }, jobId) {
  const client = {
    connectionId,
    domainName,
    stage
  }
  const jobData = (await JobStore.update(jobId, { client })).Attributes

  if (jobData.payload) return message.send(client, jobData.payload)
}

module.exports = request
