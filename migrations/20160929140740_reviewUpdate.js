
exports.up = function(knex, Promise) {
  return knex.schema.table('review', function(table){
    table.dropColumn('user_id');
    table.text('username');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('review', function(table){
    table.integer('user_id');
    table.dropColumn('username');
  })
};
