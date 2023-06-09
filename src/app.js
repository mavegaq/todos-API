const express = require('express');
const db = require('./src/utils/db');
require('./src/models/todo');
require('./src/models/user');
require('./src/models/category');
require('./src/models/subcategory');
require('./src/models/todo_subcategory');

const todosRouter = require('./src/routes/todos');
const usersRouter = require('./src/routes/users');
const categoriesRouter = require('./src/routes/categories');
const subcategoriesRouter = require('./src/routes/subcategories');

const app = express();

app.use(express.json());

app.use('/api/v1/todos', todosRouter);
app.use('/api/v1/users', usersRouter);
app.use('/api/v1/categories', categoriesRouter);
app.use('/api/v1/subcategories', subcategoriesRouter);

db.sync({ force: false })
  .then(() => console.log('Tablas creadas correctamente'))
  .catch(error => console.log('Error al crear las tablas:', error));

app.listen(3000, () => {
  console.log('Servidor corriendo en puerto 3000');
});

module.exports = app;
