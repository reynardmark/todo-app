import { List, ListItem, ListItemText, Typography } from "@mui/material";
import Task from "../model/Task";

interface TaskListProps {
  listTitle: string;
  tasks: Task[];
}

export default function TaskList({ listTitle, tasks }: TaskListProps) {
  return (
    <>
      <Typography component="h2" variant="h4" sx={{ fontWeight: 700 }}>
        {listTitle}
      </Typography>
      <List sx={{ overflow: "auto", height: "90%" }}>
        {tasks.map((task) => (
          <ListItem key={task.id}>
            <ListItemText>{task.name}</ListItemText>
          </ListItem>
        ))}
      </List>
    </>
  );
}
