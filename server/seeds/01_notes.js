
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('notes').del()
    .then(function () {
      // Inserts seed entries
      return knex('notes').insert([
        {
          account: 'argonaut',
          date: '5 June, 2018',
          notes: 'wants the new seasonal',
          beer: 'seasonal',
          package_type: 'Case',
          quantity: 3
        },
        {
          account: `molly's`,
          date: '5 June, 2018',
          notes: 'wants the new seasonal',
          beer: 'seasonal',
          package_type: 'Case',
          quantity: 2
        },
        {
          account: 'argonaut',
          date: '1 June, 2018',
          notes: 'talk to Dan next week about seasonal',
          beer: null,
          package_type: null,
          quantity: null
        }
      ]);
    });
};
