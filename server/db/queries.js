const knex = require('./knex')

module.exports = {
  getAll() {
    return knex('account')
  },
  getOne(account) {
    return knex('account').where('account', account).first()
  },
  create(account) {
    return knex('account').insert(account, '*')
  },
  update(id, account) {
    return knex('account').where('id', id).update(account, '*')
  },
  delete(id) {
    return knex('account').where('id', id).del()
  }
}

