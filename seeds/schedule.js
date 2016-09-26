
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('schedule').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('schedule').insert({
          id: 1,
          truck_id: 1,
          date: ,
          open_time:,
          close_time:
        }),

      ]);
    });
};
