import { Box, TextField } from "@mui/material";
import { ChangeEvent, SyntheticEvent } from "react";

interface AddTaskFieldProps {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: SyntheticEvent) => void;
  isInvalid: boolean;
}

export default function AddTaskField({
  onChange,
  onSubmit,
  isInvalid,
}: AddTaskFieldProps) {
  return (
    <Box
      component="form"
      mt={4}
      noValidate
      onSubmit={onSubmit}
      sx={{
        minHeight: "80px",
      }}
    >
      <TextField
        error={isInvalid ? true : false}
        id="task"
        label="Add Task"
        variant="standard"
        sx={{ minWidth: "400px" }}
        onChange={onChange}
        size="medium"
        helperText={isInvalid ? "No blank inputs" : ""}
      />
    </Box>
  );
}
