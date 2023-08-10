import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Activities from './components/Activities';

import { Box } from "@mui/material"
import Achievements from './components/Achievements';


function App() {
  return (
    <Box>
      <Navbar />
      <Banner />
      <Activities />
      <Achievements />
    </Box>
  );
}

export default App;
