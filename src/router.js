const Router = require('koa-router');

// CONTROLLERS
const appointmentsController = require('../controllers/appointments.controller');

module.exports = (() => {
  const router = new Router();
  
  // APPOINTMENT ROUTES
  router
    .get('/get-vacant-appointments', appointmentsController.vacantAppointments);
  
  return router;
})();
