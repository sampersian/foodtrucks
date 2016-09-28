
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('user').insert({
          first_name:'Maia',
          last_name:'Samuel',
          username:'maia',
          password:'$2a$10$.jXtKFtYcXEd3gVcagt6MODo48L8frOjCOs35H0avYCUu9ONH1.Ge',
          email:'maiasamuel98@gmail.com',
          image_url:'https://scontent-sjc2-1.xx.fbcdn.net/v/t1.0-9/14117734_1133960686678752_920891216877506960_n.jpg?oh=9566e9dafb88639b85dbfdc41dcc2ff1&oe=58811480'
        }),
        knex('user').insert({
          first_name:'Bartholomew',
          last_name:'Krystman',
          username:'hipster',
          password:'$2a$10$P.kOQ0Ly2gbMVeE40ZC50.zOkApSL6xsPEM9QhzLa9lQPhXXyfIVu',
          email:'bkrystman@protonmail.ch',
          image_url:'https://avatars0.githubusercontent.com/u/8432252?v=3&s=400'
        }),
      ]);
    });
};
