import { Routes, Route, Navigate } from "react-router-dom";
import { CssBaseline, AppBar, createTheme, ThemeProvider, Typography } from '@mui/material';

import './App.css';

import Questions from './modules/questions';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',

  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />

      <AppBar position="static" sx={{ p: 2 }}>
        <Typography variant="h5">
          Interview helper
        </Typography>
      </AppBar>

      <Routes>
        <Route path="/questions/*" element={<Questions />} />

        <Route path="*" element={<Navigate to="/questions" replace />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
