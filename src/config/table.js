const tableConfig = {
  [process.env.CONNECTIONS_STORAGE]: {
    key: 'connection_id',
    ttl: 10
  },
  [process.env.JOB_STORAGE]: {
    key: 'job_id',
    ttl: 10
  }
}

module.exports = (table) => tableConfig[table]
