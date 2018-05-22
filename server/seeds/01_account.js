
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('account').del()
    .then(function () {
      // Inserts seed entries
      return knex('account').insert([
        {
          account: `argonaut`,
          supplier_rep: `julian`,
          distributor_rep: `travis meredith`,
          buyer: `dan`,
          address: `760 e colfax ave, denver, co 80223`,
          account_type: `off`
        },
        {
          account: `molly's`,
          supplier_rep: `james`,
          distributor_rep: `mike fine`,
          buyer: `dan`,
          address: `5809 w 44th ave, denver, co 80212`,
          account_type: `on`
        }
      ])
    })
}
