
exports.up = function(knex, Promise) {
  return knex.schema.createTable('account', (table) => {
    table.increments()
    table.text('account')
    table.text('supplier_rep')
    table.text('distributor_rep')
    table.text('buyer')
    table.text('address')
    table.text('account_type')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('account')
}
