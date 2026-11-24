async function findNoticeByKey(client, key) {
  const sql = `SELECT id, status, self_isolation_end_date AS "endDate" FROM notices WHERE id = '${key}'`
  const { rows } = await client.query(sql)
  return rows[0]
}

module.exports = { findNoticeByKey }
