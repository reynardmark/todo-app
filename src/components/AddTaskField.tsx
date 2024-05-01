import { Box, TextField } from "@mui/material";
import { ChangeEvent, SyntheticEvent } from "react";

type AddTaskFieldProps = {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: SyntheticEvent) => void;
};

export default function AddTaskField({
  onChange,
  onSubmit,
}: AddTaskFieldProps) {
  return (
    <Box component="form" my={4} noValidate onSubmit={onSubmit}>
      <TextField
        id="task"
        label="Add Task"
        variant="standard"
        sx={{ minWidth: "320px" }}
        onChange={onChange}
      />
    </Box>
  );
}
