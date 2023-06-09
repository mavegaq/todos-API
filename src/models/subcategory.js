const { DataTypes } = require('sequelize');
const db = require('../utils/db');
const Todo = require('./todo');
const TodoSubcategory = require('./todo_subcategory');

const Subcategory = db.define('Subcategory', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
});

Subcategory.belongsToMany(Todo, { through: TodoSubcategory });

module.exports = Subcategory;
