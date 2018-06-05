
exports.up = function(knex, Promise) {
  return knex.schema.createTable('notes', (table) => {
    table.increments()
    table.text('account')
    table.date('date')
    table.string('notes')
    table.string('beer')
    table.string('package_type')
    table.integer('quantity')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('notes')
}
