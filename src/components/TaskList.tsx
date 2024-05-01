import { Grid, List, ListItem, ListItemText, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

type TaskListProps = {
  listTitle: string;
};

export default function TaskList({ listTitle }: TaskListProps) {
  return (
    <Grid2 container p={2}>
      <Grid item>
        <Typography component="h2" variant="h4" sx={{ fontWeight: 700 }}>
          {listTitle}
        </Typography>
        <List>
          <ListItem>
            <ListItemText>Do chores</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>Study Javascript</ListItemText>
          </ListItem>
        </List>
      </Grid>
    </Grid2>
  );
}
