const knex = require('./knex')

module.exports = {
  getAll() {
    return knex('notes')
  },
  getOne(notes) {
    return knex('notes').where('notes', notes).first()
  },
  create(notes) {
    return knex('notes').insert(notes, '*')
  },
  update(id, notes) {
    return knex('notes').where('id', id).update(notes, '*')
  },
  delete(id) {
    return knex('notes').where('id', id).del()
  }
}