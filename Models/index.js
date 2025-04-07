import Patient from './patient.js';
import Doctor from './Doctor.js';
import Appointment from './Appointment.js';

// Define relationships
Patient.hasMany(Appointment, { foreignKey: 'patientId', onDelete: 'CASCADE' });
Doctor.hasMany(Appointment, { foreignKey: 'doctorId', onDelete: 'CASCADE' });
Appointment.belongsTo(Patient, { foreignKey: 'patientId' });
Appointment.belongsTo(Doctor, { foreignKey: 'doctorId' });

// Export models
export { Patient, Doctor, Appointment };

