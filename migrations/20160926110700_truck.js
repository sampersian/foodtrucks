
exports.up = function(knex, Promise) {
  return knex.schema.createTable('truck', function(table){
    table.increments('id');
    table.text('owner_id');
    table.text('truck_name');
    table.blob('image');
    table.text('genre');
    table.text('description');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('truck')
};
