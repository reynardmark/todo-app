import { ChangeEvent, SyntheticEvent, useState } from "react";
import { IconButton, ListItem, ListItemText, TextField } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import EditIcon from "@mui/icons-material/Edit";
import Task from "../model/Task";

interface TaskListItemProps {
  tasks: Task[];
  task: Task;
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

export default function TaskListItem({
  tasks,
  task,
  setTasks,
}: TaskListItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("");

  const handleDelete = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleEdit = (id: number) => {
    setIsEditing(true);
    const presentTaskName = (tasks.find((task) => task.id === id) as Task).name;
    setName(presentTaskName);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleSubmit = (e: React.KeyboardEvent<HTMLDivElement>, id: number) => {
    if (e.key === "Enter") {
      const updatedTask = tasks.map((task) => {
        if (task.id === id) {
          return { ...task, name };
        }

        return task;
      });
      setTasks(updatedTask);
      setIsEditing(false);
    }
  };

  const handleComplete = (id: number) => {
    const updatedTasks: Task[] = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, completed: true };
      }
      return task;
    });

    setTasks(updatedTasks);
  };

  return (
    <ListItem
      sx={{
        paddingRight: "100px",
      }}
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
            onClick={() => handleEdit(task.id)}
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
      {isEditing ? (
        <TextField
          value={name}
          variant="standard"
          onChange={handleChange}
          onKeyDown={(e) => handleSubmit(e, task.id)}
          fullWidth
        />
      ) : (
        <ListItemText primary={task.name} sx={{ wordWrap: "break-word" }} />
      )}
    </ListItem>
  );
}
