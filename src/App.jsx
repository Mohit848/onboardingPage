import React from 'react';
import './App.css';
import Userform from './components/Userform';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';

const theme = createTheme({
  typography: {
    fontFamily: [
      "Inter"
    ].join(",")
  }
});

function App() {
  return (
	<ThemeProvider theme={theme}>
		<div className="App">
			<Userform/>
    	</div>
	</ThemeProvider>
   
  );
}

export default App;
