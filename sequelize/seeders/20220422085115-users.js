'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    const now = new Date();
    await queryInterface.bulkInsert("users",[
      { user_name: "name1", mail_address: "email1", admin_flg: "1", createdAt: now, updatedAt: now},
      { user_name: "name2", mail_address: "email2", admin_flg: "0", createdAt: now, updatedAt: now},
      { user_name: "name3", mail_address: "email3", admin_flg: "1", createdAt: now, updatedAt: now},
      { user_name: "name4", mail_address: "email4", admin_flg: "0", createdAt: now, updatedAt: now},
    ], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete("users", null, {});
  }
};
