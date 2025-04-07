import express from 'express';
import appointmentController from '../Controllers/appointmentcontroller.js';
import { Appointment, Patient, Doctor } from '../models/index.js';

const router = express.Router();

router.post('/', appointmentController.create);
router.get('/', async (req, res) => {
  try {
    const appointments = await Appointment.findAll({
      include: [
        { model: Patient },
        { model: Doctor }
      ]
    });
    res.json(appointments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


export default router;
