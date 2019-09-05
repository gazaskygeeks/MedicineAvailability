const dbConnection = require('./../db_connection')

const addMedicineInfo = (medicine, description) => {
  return dbConnection
    .query('insert into medicine (name, company, prescription, description) values ($1, $2, $3, $4)', [medicine.medName, medicine.medCompany, medicine.prescription, description])
    .then(res => res.rows[0])
    .catch(err => console.log(err))
}

module.exports = addMedicineInfo
