const Category = require('../models/category');

exports.createCategory = async (req, res, next) => {
  try {
    const category = await Category.create(req.body);
    res.status(201).json(category);
  } catch (error) {
    next({ status: 500, message: 'Error al crear la categoría', error });
  }
};
