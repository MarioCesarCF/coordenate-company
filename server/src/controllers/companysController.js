const CompanyService = require('../services/companyService');

exports.create = async (req, res, next) => {
    try {
        const result = await CompanyService.createCompany(req.body);
        res.status(201).json({data: result, status: 'success'});
    } catch (err) {
        res.status(500).json({error: err.message});
    }
};

exports.getAll = async (req, res, next) => {
    try {
        const companies = await CompanyService.getAll();
        res.status(200).json({data: companies, status: 'success'});
    } catch (err) {
        res.status(500).json({error: err.message});
    };
}