const express = require('express');
const router = express.Router();
const todosController = require('../controllers/todosController');

router.post('/', todosController.createTodo);
router.get('/:userId', todosController.getTodosByUserId);
router.put('/:id', todosController.updateTodo);
router.delete('/:id', todosController.deleteTodo);

module.exports = router;
