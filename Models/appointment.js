import { DataTypes } from 'sequelize';
const sequelize = require('../Connection/database');

const Appointment = sequelize.define('Appointment', {
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    time: {
      type: DataTypes.TIME,
      allowNull: false,
    },
  });

  
export default Appointment;
