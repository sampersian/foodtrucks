
exports.up = function(knex, Promise) {
  return knex.schema.createTable('review', function(table){
    table.increments('id')
    table.text('user_id')
    table.text('truck_id')
    table.text('content')
    table.boolean('is_positive')
    table.dateTime('created_at').notNullable().defaultTo(knex.raw('now()'));
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('review')
};
