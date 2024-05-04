import { useState, useEffect } from "react";

import TaskList from "./TaskList";
import Task from "../model/Task";
interface CompletedTaskProps {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

export default function CompletedTask({ tasks, setTasks }: CompletedTaskProps) {
  const [completedTasks, setCompletedTasks] = useState<Task[]>([]);

  useEffect(() => {
    setCompletedTasks(tasks.filter((task) => task.completed));
  }, [tasks]);

  return (
    <>
      <TaskList
        listTitle="Finished Tasks"
        filteredTasks={completedTasks}
        tasks={tasks}
        setTasks={setTasks}
      />
    </>
  );
}
