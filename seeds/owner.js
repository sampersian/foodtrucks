
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('owner').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('owner').insert({
          first_name: 'Arlo',
          last_name: 'Shaver',
          username: 'M3atMast3r',
          password: 'tempPass',
          email: '1234@freemail.com'
        }),
        knex('owner').insert({
          first_name: 'Maia',
          last_name: 'Samuel',
          username: 'MaiaSamuel',
          password: 'tempPass',
          email: '1234@freemail.com'
        }),
        knex('owner').insert({
          first_name: 'Sam',
          last_name: 'Persian',
          username: 'SamPersian',
          password: 'tempPass',
          email: '1234@freemail.com'
        }),
      ]);
    });
};
