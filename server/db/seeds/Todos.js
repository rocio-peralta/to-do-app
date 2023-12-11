exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('Todos').del()
  await knex('Todos').insert([
    {id: 2, todo: 'feed the dog'}
  ]);
};