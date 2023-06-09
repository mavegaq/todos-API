const Subcategory = require('../models/subcategory');

exports.createSubcategory = async (req, res, next) => {
  try {
    const subcategory = await Subcategory.create(req.body);
    res.status(201).json(subcategory);
  } catch (error) {
    next({ status: 500, message: 'Error al crear la subcategoría', error });
  }
};
