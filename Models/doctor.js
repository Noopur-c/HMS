import { DataTypes } from 'sequelize';
import { define } from '../config/database';

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
