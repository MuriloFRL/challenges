const axios = require('axios');
const moment = require('moment');


const makeWorkSheet = async () => {
  
  const { data: { employees }} = await axios.get('https://api-homolog.geracaopet.com.br/api/challenges/challenge1/employees');
  
  const worksheet = {};
  const ids = [];
  
  employees.forEach(({startsAt, finishesAt, id}) => {
    ids.push(id);
    startsAt = moment(startsAt, 'HH:mm');
    finishesAt = moment(finishesAt, 'HH:mm');
    while (startsAt <= finishesAt) {
      worksheet[startsAt.format('HH:mm')] = worksheet[startsAt.format('HH:mm')] ? ++worksheet[startsAt.format('HH:mm')] : 1;
      startsAt.add(30, 'm');
    }
  });
  
  return { worksheet, ids };
}

const vacantAppointmentSheet = async (availableSheet, ids) => {
  
  await Promise.all(ids.map(async (id) => {
    const {data: {appointments}} = await axios.get(`https://api-homolog.geracaopet.com.br/api/challenges/challenge1/employee/${id}/appointments`);
    
    appointments.forEach(({startsAt, finishesAt}) => {
      startsAt = moment(startsAt, 'HH:mm');
      finishesAt = moment(finishesAt, 'HH:mm');
      while (startsAt < finishesAt) {
        --availableSheet[startsAt.format('HH:mm')];
        startsAt.add(30, 'm');
      }
    });
  }));
  
  const availableTimes = [];
  
  for (const [key, value] of Object.entries(availableSheet)) {
    if (value > 0) availableTimes.push(key.toString());
  }
  
  return availableTimes;
}


const vacantAppointments = async () => {
  const {worksheet, ids} = await makeWorkSheet();
  const availableTimes = await vacantAppointmentSheet(worksheet, ids);
  
  return { availableTimes };
};


module.exports = {
  vacantAppointments
};
