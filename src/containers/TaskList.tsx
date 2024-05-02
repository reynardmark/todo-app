import {
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import Task from "../model/Task";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import EditIcon from "@mui/icons-material/Edit";

interface TaskListProps {
  listTitle: string;
  tasks: Task[];
  handleComplete?: (id: number) => void;
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  handleDelete: (id: number) => void;
}

export default function TaskList({
  listTitle,
  tasks,
  handleComplete,
  handleDelete,
}: TaskListProps) {
  //TODO: Refactor delete and add edit task feature

  return (
    <>
      <Typography component="h2" variant="h4" sx={{ fontWeight: 700 }}>
        {listTitle}
      </Typography>
      <List sx={{ overflow: "auto", height: "90%" }}>
        {tasks.map((task) => (
          <ListItem
            key={task.id}
            secondaryAction={
              <>
                {!task.completed && (
                  <IconButton
                    edge="end"
                    aria-label="Complete task"
                    onClick={() => {
                      if (handleComplete) {
                        handleComplete(task.id);
                      }
                    }}
                    sx={{ color: "green" }}
                  >
                    <CheckCircleIcon />
                  </IconButton>
                )}
                <IconButton
                  edge="end"
                  aria-label="Edit task"
                  sx={{ color: "blue" }}
                >
                  <EditIcon />
                </IconButton>
                <IconButton
                  edge="end"
                  aria-label="Delete task"
                  onClick={() => handleDelete(task.id)}
                  sx={{ color: "red" }}
                >
                  <DeleteIcon />
                </IconButton>
              </>
            }
          >
            <ListItemText>{task.name}</ListItemText>
          </ListItem>
        ))}
      </List>
    </>
  );
}
