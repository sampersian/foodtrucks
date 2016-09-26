
exports.up = function(knex, Promise) {
  return knex.schema.createTable('truck', function(table){
    table.increments('id')
    table.text('owner_id')
    table.text('truck_name')
    table.text('image_url')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('truck')
};