"use client";

import { useLocalStorage } from "@/app/hooks/useLocalStorage";
import { createContext, useContext } from "react";
import { v4 as uuid } from "uuid";



export const TaskContext = createContext();

export const UseTask = () => {
  const context = useContext(TaskContext);
  if (!context) throw new Error("hook is not available");
  return context;
};

export const TaskProvider = ({ children }) => {
  
  const [ tasks, setTasks] = useLocalStorage("tasks", [])



  const deleteTask = (id) =>
    setTasks([...tasks.filter((task) => task.id !== id)]);

  const createTask = (title, description) => {
    setTasks([
      ...tasks,
      {
        title: title,
        description,
        id: uuid(),
      },
    ]);
  };

  const updateTask = (id, newData) => {
    setTasks([
      ...tasks.map((task) => task.id === id ? { ...task, ...newData } : task),
    ]);
  };



  return (
    <TaskContext.Provider value={{ tasks, createTask, deleteTask, updateTask }}>
      {children}
    </TaskContext.Provider>
  );
};
