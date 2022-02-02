const appointmentService = require('../services/appointments.service');

const users = {
  vacantAppointments: async (ctx) => {
    
    ctx.body = await appointmentService.vacantAppointments();
  }
};

module.exports = users;
