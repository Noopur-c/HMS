import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('hospital_db', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql',
});

export default sequelize;
