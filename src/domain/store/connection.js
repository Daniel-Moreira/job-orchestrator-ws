const GenericStore = require('./generic')

function ConnectionStore () { }

ConnectionStore.prototype = new GenericStore(process.env.CONNECTIONS_STORAGE)

module.exports = new ConnectionStore()
