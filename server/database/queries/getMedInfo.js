const dbConnection = require('./../db_connection')

const getMedInfo = medicine => {
  dbConnection.query(
    "select pharmacy.pharmacyName, pharmacy.phone, pharmacy.location,medicine.name as medicineName, medicine.medicineID,medicine.img, medicine.description,medicine.prescription, pharmacy_to_medicine.soldOut, pharmacy_to_medicine.price from pharmacy inner join pharmacy_to_medicine on pharmacy_to_medicine.pharmacyID = pharmacy.pharmacyID inner join medicine on pharmacy_to_medicine.medicineID = medicine.medicineID where medicine.medicineID = (select medicineID from medicine where name = 'Yasmin')"
  )
}

module.exports = getMedInfo
