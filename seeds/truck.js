
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('truck').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('truck').insert({
          id: 1,
          owner_id:1,
          truck_name:"Scharwma My Bones",
          image_url: 'https://cbsnewyork.files.wordpress.com/2013/01/shawarma-spits.jpg'
        }),
        knex('truck').insert({
          id: 2,
          owner_id:2,
          truck_name:"Scharwma My Bones",
          image_url: 'https://cbsnewyork.files.wordpress.com/2013/01/shawarma-spits.jpg'
        }),
        knex('truck').insert({
          id: 3,
          owner_id:3,
          truck_name:"Scharwma My Bones",
          image_url: 'https://cbsnewyork.files.wordpress.com/2013/01/shawarma-spits.jpg'
        }),
        knex('truck').insert({
          id: 4,
          owner_id:4,
          truck_name:"Scharwma My Bones",
          image_url: 'https://cbsnewyork.files.wordpress.com/2013/01/shawarma-spits.jpg'
        })

      ]);
    });
};
