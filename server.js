import { sync } from './Connection/database';
import { Patient, Doctor, Appointment } from './Models';

sync({ force: true })
  .then(() => console.log('Database synchronized'))
  .catch(err => console.error('Error syncing database:', err));
