//Optimal setup for this table?
exports.up = function(knex, Promise) {
  return knex.schema.createTable('schedule', function(table){
    table.increments('id')
    table.text('truck_id')
    table.string('date')
    table.string('location') //Should this and day be text?
    table.integer('open_time')
    table.integer('close_time')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('scehdule')
};
