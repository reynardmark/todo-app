import { List, Typography } from "@mui/material";
import Task from "../model/Task";
import TaskListItem from "./TaskListItem";

interface TaskListProps {
  listTitle: string;
  tasks: Task[];
  filteredTasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

export default function TaskList({
  listTitle,
  filteredTasks,
  tasks,
  setTasks,
}: TaskListProps) {
  return (
    <>
      <Typography component="h2" variant="h4" sx={{ fontWeight: 700 }}>
        {listTitle}
      </Typography>
      <List sx={{ overflow: "auto", height: "90%" }}>
        {filteredTasks.map((task) => (
          <TaskListItem
            task={task}
            tasks={tasks}
            setTasks={setTasks}
            key={task.id}
          />
        ))}
      </List>
    </>
  );
}
