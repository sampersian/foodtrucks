"use strict"

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('schedule').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('schedule').insert({
          truck_id: 1,
          date: 'sunday',
          location: 'none',
          open_time:0,
          close_time:0
        }),
        knex('schedule').insert({
          truck_id: 1,
          date: 'monday',
          location: '1644 Platte Street Denver CO 80202',
          open_time:900,
          close_time:1300
        }),
        knex('schedule').insert({
          truck_id: 1,
          date: 'tuesday',
          location: '3329 E. Bayaud blvd Denver CO 80209',
          open_time:1700,
          close_time:1930
        }),
        knex('schedule').insert({
          truck_id: 1,
          date: 'wednesday',
          location: '1644 Platte Street Denver CO 80202',
          open_time:900,
          close_time:1300
        }),
        knex('schedule').insert({
          truck_id: 1,
          date: 'thursday',
          location: '3329 E. Bayaud blvd Denver CO 80209',
          open_time:1700,
          close_time:1930
        }),
        knex('schedule').insert({
          truck_id: 1,
          date: 'friday',
          location: '3329 E. Bayaud blvd Denver CO 80209',
          open_time:1700,
          close_time:1930
        }),
        knex('schedule').insert({
          truck_id: 1,
          date: 'saturday',
          location: '1644 Platte Street Denver CO 80202',
          open_time:900,
          close_time:1300
        }),
        knex('schedule').insert({
          truck_id: 2,
          date: 'sunday',
          location: '13123 East 16th Place, Aurora, CO 80011, USA',
          open_time:1100,
          close_time:1400
        }),
        knex('schedule').insert({
          truck_id: 2,
          date: 'monday',
          location: 'Lawrence Way, Denver, CO 80204, USA',
          open_time:900,
          close_time:1300
        }),
        knex('schedule').insert({
          truck_id: 2,
          date: 'tuesday',
          location: '8401 Park Meadows Drive, Lone Tree, CO, United States',
          open_time:1700,
          close_time:1930
        }),
        knex('schedule').insert({
          truck_id: 2,
          date: 'wednesday',
          location: '7800 East Tufts Avenue, Denver, CO 80237, USA',
          open_time:900,
          close_time:1300
        }),
        knex('schedule').insert({
          truck_id: 2,
          date: 'thursday',
          location: 'West 14th Avenue & Bannock Street, Denver, CO 80202, USA',
          open_time:1700,
          close_time:1930
        }),
        knex('schedule').insert({
          truck_id: 2,
          date: 'friday',
          location: 'Aurora Ct, Aurora, CO, USA',
          open_time:1700,
          close_time:1930
        }),
        knex('schedule').insert({
          truck_id: 2,
          date: 'saturday',
          location: '13123 East 16th Place, Aurora, CO 80011, USA',
          open_time:900,
          close_time:1300
        }),
        knex('schedule').insert({
          truck_id: 3,
          date: 'sunday',
          location: 'none',
          open_time:0,
          close_time:0
        }),
        knex('schedule').insert({
          truck_id: 3,
          date: 'monday',
          location: '2001 Blake St, Denver, CO 80205',
          open_time:800,
          close_time:1630
        }),
        knex('schedule').insert({
          truck_id: 3,
          date: 'tuesday',
          location: '700 14th St, Denver, CO 80202',
          open_time:830,
          close_time:1630
        }),
        knex('schedule').insert({
          truck_id: 3,
          date: 'wednesday',
          location: ' 1701 Wynkoop St, Denver, CO 80202',
          open_time:700,
          close_time:1700
        }),
        knex('schedule').insert({
          truck_id: 3,
          date: 'thursday',
          location: '2101 15th St, Denver, CO 80202',
          open_time:1000,
          close_time:1900
        }),
        knex('schedule').insert({
          truck_id: 3,
          date: 'friday',
          location: 'Skyline Park, 16th St, Denver, CO 80202',
          open_time:1600,
          close_time:2300
        }),
        knex('schedule').insert({
          truck_id: 3,
          date: 'saturday',
          location: '1700 N Sheridan Blvd, Denver, CO 80212',
          open_time:1200,
          close_time:2300
        }),
      ]);
    });
};
