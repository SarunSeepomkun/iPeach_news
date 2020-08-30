import React from 'react';
import './App.css';
import Feed from './Components/Feed';
import Box from "@material-ui/core/Box";

function App() {
  return (
    <Box display="flex" flexWrap="wrap" flexDirection="column" justifyContent="center" alignItems="flex-start" alignContent="flex-start" m={1} p={1}>
      <Box p={1} width="100%">
        IPEACH NEWS
      </Box>
      <Box p={1}>
      <Feed />
      </Box>
    </Box>
  );
}

export default App;