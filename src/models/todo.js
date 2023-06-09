const { DataTypes } = require('sequelize');
const db = require('../utils/db');
const Subcategory = require('./subcategory');
const TodoSubcategory = require('./todo_subcategory');

const Todo = db.define('Todo', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  completed: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

Todo.belongsToMany(Subcategory, { through: TodoSubcategory });

module.exports = Todo;
