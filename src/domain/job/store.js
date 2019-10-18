const { JobStore } = require('../store')
const message = require('../message')

async function store (jobId, payload) {
  const jobData = (await JobStore.update(jobId, { payload })).Attributes

  if (jobData.client) return message.send(jobData.client, jobData.payload)
}

module.exports = store
