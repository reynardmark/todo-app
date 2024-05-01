import TaskList from "../components/TaskList";
import { useEffect } from "react";
import Task from "../model/Task";
import { useState } from "react";

interface NotCompletedTaskProps {
  tasks: Task[];
}

export default function NotCompletedTask({ tasks }: NotCompletedTaskProps) {
  //get tasks that are not completed
  const [notCompletedTasks, setNotCompletedTasks] = useState<Task[]>([]);

  useEffect(() => {
    tasks.filter((task) => !task.completed);
  }, [tasks]);

  return (
    <>
      <TaskList listTitle="Unfinished Tasks" tasks={tasks} />
    </>
  );
}
