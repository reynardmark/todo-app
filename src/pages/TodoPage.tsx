import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Paper, Typography } from "@mui/material";
import AddTask from "../containers/AddTask";
import NotCompletedTask from "../containers/NotCompletedTask";
import CompletedTask from "../containers/CompletedTask";
import { useState } from "react";
import Task from "../model/Task";

export default function TodoPage() {
  const [tasks, setTasks] = useState<Task[]>([]);

  return (
    <Grid2 container xs={12}>
      <Grid2
        xs={12}
        display="flex"
        justifyContent="center"
        alignItems="center"
        padding="14px"
        sx={{ backgroundColor: "primary.main" }}
      >
        <Typography
          sx={{ fontWeight: 700, color: "white" }}
          variant="h3"
          component="h1"
        >
          Todo App
        </Typography>
      </Grid2>
      <Grid2 xs={12} display="flex" justifyContent="center" alignItems="center">
        <AddTask setTasks={setTasks} tasks={tasks} />
      </Grid2>

      <Grid2
        container
        mt={2}
        xs={12}
        spacing={4}
        justifyContent="space-between"
      >
        <Grid2
          xs={12}
          md={6}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Paper
            elevation={1}
            sx={{ width: "500px", height: "500px", padding: "12px" }}
          >
            <NotCompletedTask tasks={tasks} setTasks={setTasks} />
          </Paper>
        </Grid2>

        {/* <Grid2
          xs={12}
          md={6}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Paper elevation={1} sx={{ minWidth: "500px", height: "400px" }}>
            <CompletedTask />
          </Paper>
        </Grid2> */}
      </Grid2>
    </Grid2>
  );
}
