const User = require('../models/user');

exports.createUser = async (req, res, next) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    next({ status: 500, message: 'Error al crear el usuario', error });
  }
};
