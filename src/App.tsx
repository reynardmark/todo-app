import TodoPage from "./pages/TodoPage";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#6200EE",
        dark: "3700B3",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <TodoPage />
    </ThemeProvider>
  );
}

export default App;
