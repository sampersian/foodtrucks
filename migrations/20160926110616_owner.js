
exports.up = function(knex, Promise) {
  return knex.schema.createTable('owner', function(table){
    table.increments('id');
    table.text('first_name');
    table.text('last_name');
    table.text('username');
    table.text('password');
    table.text('email');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('owner')
};
