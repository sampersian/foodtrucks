
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('review').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('review').insert({id: '1', user_id: '1', truck_id: '1', content: 'The food is really good! I enjoyed the atmosphere around the truck and the employees were extremely nice!', is_positive: '1'}),
        knex('review').insert({id: '2', user_id: '2', truck_id: '2', content: 'The food was amazing! However, the employees could have been much nicer.', is_positive: '1'}),
        knex('review').insert({id: '3', user_id: '1', truck_id: '3', content: 'The food was terrible and the truck looked dirty. The employees were nice but I will never go here again.', is_positive: '1'})
      ]);
    });
};
