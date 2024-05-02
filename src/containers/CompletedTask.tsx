import TaskList from "./TaskList";
import Task from "../model/Task";
import { useState, useEffect } from "react";

interface CompletedTaskProps {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

export default function CompletedTask({ tasks, setTasks }: CompletedTaskProps) {
  const [completedTasks, setCompletedTasks] = useState<Task[]>([]);

  const handleDelete = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  useEffect(() => {
    setCompletedTasks(tasks.filter((task) => task.completed));
  }, [tasks]);

  return (
    <>
      <TaskList
        listTitle="Finished Tasks"
        tasks={completedTasks}
        setTasks={setTasks}
        handleDelete={handleDelete}
      />
    </>
  );
}
