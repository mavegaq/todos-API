const { DataTypes } = require('sequelize');
const db = require('../utils/db');
const Todo = require('./todo');
const Subcategory = require('./subcategory');

const TodoSubcategory = db.define('TodoSubcategory', {
  todoId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'todos',
      key: 'id'
    },
    allowNull: false
  },
  subcategoryId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'subcategories',
      key: 'id'
    },
    allowNull: false
  }
});

module.exports = TodoSubcategory;
