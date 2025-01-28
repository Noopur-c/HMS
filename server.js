import express from 'express';
import bodyParser from 'body-parser';
import { Sequelize, DataTypes } from 'sequelize';
import { sync } from './Connection/database';
import Patient from './Models/patient.js';
import Doctor from './Models/doctor.js';
import Appointment from './Models/appointment.js';

sync({ force: true })
  .then(() => console.log('Database synchronized'))
  .catch(err => console.error('Error syncing database:', err));


  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
  