import Todo from "../models/todo.js";

const getTodo = async (req, res) => {
  try {
    const todos = await Todo.find();

    res.status(200).json(todos);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
};

const createTodoList = async (req, res) => {
  const { title, description, completed } = req.body;

  try {
    const todo = {
      title,
      description,
      completed,
    };

    const newTodo = await Todo.create(todo);

    res.status(201).json(newTodo);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
};

const updateTodo = async (req, res) => {
  const { id } = req.params;
  const { title, description, completed } = req.body;

  try {
    const todo = await Todo.findOneAndUpdate(
      { _id: id },
      { title, description, completed },
      { new: true }
    );

    if (!todo) {
      return res.status(404).send("Todo not found");
    }

    res.status(200).json(todo);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
};

const deleteTodo = async (req, res) => {
  const { id } = req.params;

  try {
    const todo = await Todo.findOneAndDelete({ _id: id });

    if (!todo) {
      return res.status(404).send("Todo not found");
    }

    res.status(200).json(todo);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
};

export { getTodo, createTodoList, deleteTodo, updateTodo };
