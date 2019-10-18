const GenericStore = require('./generic')
const { update } = require('./methods')

function JobStore () {
  this.update = update
}

JobStore.prototype = new GenericStore(process.env.JOB_STORAGE)

module.exports = new JobStore()
