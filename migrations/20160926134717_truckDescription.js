
exports.up = function(knex, Promise) {
  return knex.schema.table('truck', function (table){
  table.text('genre');
  table.text('description');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('truck', function(table){
    table.dropColumn('genre');
    table.dropColumn('description');
  })
};
