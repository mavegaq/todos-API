const Todo = require('../models/todo');

exports.createTodo = async (req, res, next) => {
  try {
    const todo = await Todo.create(req.body);
    res.status(201).json(todo);
  } catch (error) {
    next({ status: 500, message: 'Error al crear la tarea', error });
  }
};

exports.getTodosByUserId = async (req, res, next) => {
  try {
    const todos = await Todo.findAll({
      where: { userId: req.params.userId },
      include: ['category', 'subcategories'],
    });
    res.json(todos);
  } catch (error) {
    next({ status: 500, message: 'Error al obtener las tareas', error });
  }
};

exports.updateTodo = async (req, res, next) => {
  try {
    const todo = await Todo.findByPk(req.params.id);
    if (!todo) {
      return next({ status: 404, message: 'Tarea no encontrada' });
    }
    todo.completed = req.body.completed;
    await todo.save();
    res.json(todo);
  } catch (error) {
    next({ status: 500, message: 'Error al actualizar la tarea', error });
  }
};

exports.deleteTodo = async (req, res, next) => {
  try {
    const todo = await Todo.findByPk(req.params.id);
    if (!todo) {
      return next({ status: 404, message: 'Tarea no encontrada' });
    }
    await todo.destroy();
    res.json({ message: 'Tarea eliminada correctamente' });
  } catch (error) {
    next({ status: 500, message: 'Error al eliminar la tarea', error });
  }
};
