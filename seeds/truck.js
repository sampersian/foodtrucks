
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('truck').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('truck').insert({
          id: 1,
          owner_id:1,
          truck_name:"Schwarma My Bones",
          image_url: 'https://cbsnewyork.files.wordpress.com/2013/01/shawarma-spits.jpg',
          genre: 'Mediterranean',
          description: 'Steaming, seasoned, shaved, savory. If it\'s good enough for the Avengers, it must be worth a try!'
        }),
        knex('truck').insert({
          id: 2,
          owner_id:2,
          truck_name:"Burger Food Truck",
          image_url: 'https://upload.wikimedia.org/wikipedia/en/d/d1/CaliBurger_food_truck_Germany.jpg',
          genre:'Hamburgers',
          description: 'This truck sells hamburgers like they make them in California.'
        }),
        knex('truck').insert({
          id: 3,
          owner_id:3,
          truck_name:"Sea On Wheels",
          image_url: 'https://static.vecteezy.com/system/resources/previews/000/098/628/original/vector-seafood-truck.jpg',
          genre: 'Seafood',
          description: 'We bring the sea to street. Find all of your favorite seafood here!'
        })
      ]);
    });
};
