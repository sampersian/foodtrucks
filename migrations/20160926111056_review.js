
exports.up = function(knex, Promise) {
  return knex.schema.createTable('review', function(table){
    table.increments('id')
    table.integer('user_id')
    table.integer('truck_id')
    table.text('content')
    table.boolean('is_positive')
    table.dateTime('created_at').notNullable().defaultTo(knex.raw('now()'));
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('review')
};
