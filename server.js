import express from 'express';
import { json } from 'body-parser';
import { Sequelize, DataTypes } from 'sequelize';
import { create, getAll } from './Controllers/patientcontroller';
import { create as _create, getAll as _getAll } from './Controllers/doctorcontroller';
import { create as __create, getAll as __getAll } from './Controllers/appointmentcontroller';

// Initialize Express app
const app = express();
app.use(json());

// Set up Sequelize and connect to MySQL database
const sequelize = new Sequelize('hospital_db', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql',
});

// Define Models
const Patient = sequelize.define('Patient', { ... });
const Doctor = sequelize.define('Doctor', { ... });
const Appointment = sequelize.define('Appointment', { ... });

// Synchronize Models with Database
sequelize.sync({ force: true }).then(() => {
  console.log('Database & tables created!');
});

// Routes
app.post('/patients', create);
app.get('/patients', getAll);

app.post('/doctors', _create);
app.get('/doctors', _getAll);

app.post('/appointments', __create);
app.get('/appointments', __getAll);

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

  