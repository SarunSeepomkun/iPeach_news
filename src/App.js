import React from 'react';
import './App.css';
import Feed from './Components/Feed';
import Box from "@material-ui/core/Box";

function App() {
  return (
    <div style={{ width: '100%' }}>
    <Box display="flex" flexWrap="wrap" flexDirection="column" justifyContent="center" m={1} p={1}>
      <Box p={1} textAlign="center" letterSpacing={11} fontSize={24} fontWeight={700}>
        iPEACH NEWS
      </Box>
      <Box p={1}>
      <Feed />
      </Box>
    </Box>
    </div>
  );
}

export default App;