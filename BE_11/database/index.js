const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('postgres', 'postgres', 'password', {
  host: 'localhost',
  dialect: 'postgres',
});

sequelize.sync();

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection established with database');
  } catch (err) {
    console.error('Unable to connect to database');
  }
})();

module.exports = sequelize;
