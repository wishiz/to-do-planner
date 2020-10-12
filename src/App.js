import React from 'react';

import { CssBaseline, ThemeProvider } from '@material-ui/core';

import TodoPage from './pages/TodoPage';

import theme from './themes/todoTheme';

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <TodoPage />
      </ThemeProvider>
    </div>
  );
}

export default App;
