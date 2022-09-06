const CompanyService = require('../services/companyService');
const Company = require('../model/company');

exports.create = async (req, res, next) => {
  const { nome, documento, cidade, coordenadaX, coordenadaY, informacoes } = req.body;
  try {
    const companyExists = await Company.findOne({ documento });
    if (companyExists) {
      return res.status(400).json({
        error: 'Impossible to register',
        message: 'Company already exists.'
      })
    }
    const result = await CompanyService.createCompany({
      nome,
      documento,
      cidade,
      coordenadaX,
      coordenadaY,
      informacoes
    });
    res.status(201).json({ data: result, status: 'success' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAll = async (req, res, next) => {
  try {
    const companies = await CompanyService.getAll();
    res.status(200).json({ data: companies, status: 'success' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  };
}

exports.delete = async (req, res, next) => {
  const { id } = req.params;
  try {
    const company = await CompanyService.delete(id);
    res.status(200).json({ data: company, status: 'success' });
  } catch (err) {
    res.status(500).json({error: err.message});
  }
}