import TaskList from "../components/TaskList";
import { useEffect } from "react";
import Task from "../model/Task";
import { useState } from "react";

interface NotCompletedTaskProps {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

export default function NotCompletedTask({
  tasks,
  setTasks,
}: NotCompletedTaskProps) {
  //get tasks that are not completed
  const [notCompletedTasks, setNotCompletedTasks] = useState<Task[]>([]);

  const handleComplete = (id: number) => {
    const updatedTasks: Task[] = notCompletedTasks.map((task) => {
      if (task.id === id) {
        return { ...task, completed: true };
      }
      return task;
    });

    setTasks(updatedTasks);
  };

  useEffect(() => {
    setNotCompletedTasks(tasks.filter((task) => !task.completed));
  }, [tasks]);

  return (
    <>
      <TaskList
        listTitle="Unfinished Tasks"
        tasks={notCompletedTasks}
        handleComplete={handleComplete}
      />
    </>
  );
}
