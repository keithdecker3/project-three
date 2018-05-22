const knex = require('./knex')

module.exports = {
  getAll() {
    return knex('account')
  },
  getOne(account) {
    return knex('account').where('account', account).first()
  }
}