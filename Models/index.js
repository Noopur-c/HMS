import Patient, { hasMany } from './patient';
import Doctor, { hasMany as _hasMany } from './doctor';
import Appointment, { belongsTo } from './appointment';

hasMany(Appointment);
_hasMany(Appointment);
belongsTo(Patient);
belongsTo(Doctor);

export default { Patient, Doctor, Appointment };
