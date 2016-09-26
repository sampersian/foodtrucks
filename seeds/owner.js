
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('owner').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('owner').insert({
          id: 1,
          first_name: 'Arlo',
          last_name: 'Shaver',
          username: 'M3atMast3r',
          password: ''
        }),
        knex('owner').insert({
          id: 1,
          colName: 'rowValue1'
        }),
        knex('owner').insert({
          id: 1,
          colName: 'rowValue1'
        }),
        knex('owner').insert({
          id: 1,
          colName: 'rowValue1'
        }),
      ]);
    });
};
