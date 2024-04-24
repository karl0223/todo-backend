import express from "express";

import {
  getTodo,
  createTodoList,
  deleteTodo,
  updateTodo,
} from "../controllers/todoControllers.js";

const todoRouter = express.Router();

todoRouter.get("/api/todo", getTodo);
todoRouter.post("/api/todo/new", createTodoList);
todoRouter.patch("/api/todo/update/:id", updateTodo);
todoRouter.delete("/api/todo/delete/:id", deleteTodo);

export default todoRouter;
