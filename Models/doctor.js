import { DataTypes } from 'sequelize';
const sequelize = require('../Connection/database');

const Doctor = sequelize.define('Doctor', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    specialization: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

export default Doctor;
