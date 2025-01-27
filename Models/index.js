const Patient = require('./patient');
const Doctor = require('./doctor');
const Appointment = require('./appointment');

Patient.hasMany(Appointment);
Doctor.hasMany(Appointment);
Appointment.belongsTo(Patient);
Appointment.belongsTo(Doctor);

module.exports = { Patient, Doctor, Appointment };
