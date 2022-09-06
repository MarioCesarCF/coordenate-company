const Company = require('../model/company');
const connection = require('../config/conection');

connection();

exports.createCompany = async (company) => {
    return await Company.create(company);
};

exports.getAll = async () => {
    return await Company.find();
}