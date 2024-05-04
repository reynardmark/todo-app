import TaskList from "./TaskList";
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
  const [notCompletedTasks, setNotCompletedTasks] = useState<Task[]>([]);

  useEffect(() => {
    setNotCompletedTasks(tasks.filter((task) => !task.completed));
  }, [tasks]);

  return (
    <>
      <TaskList
        listTitle="Unfinished Tasks"
        filteredTasks={notCompletedTasks}
        tasks={tasks}
        setTasks={setTasks}
      />
    </>
  );
}
