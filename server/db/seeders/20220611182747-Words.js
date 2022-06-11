const fs = require('fs').promises;
const path = require('path');

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    const words = (await fs.readFile(path.join(process.env.PWD, '/db/words.txt'), 'utf-8'))
      .split('\n')
      .map((el) => ({ word: el, createdAt: new Date(), updatedAt: new Date() }));

    await queryInterface.bulkInsert('Words', words);
    // console.log(path.join(process.env.PWD, '/db/words.txt'));
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
