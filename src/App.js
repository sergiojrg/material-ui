import Sidebar from './components/SideBar'
import RightBar from './components/RightBar.jsx'
import Feed from './components/Feed'
import NavBar from './components/NavBar'
import { Container,Box, Stack, ThemeProvider } from '@mui/material'

function App() {

  return (
    // <ThemeProvider>
      <Box
        // m={10}
        padding={0}
      >
        {/* Navbar */}
        <NavBar/>
        <Stack direction="row"spacing={2} justifyContent="space-between">
          <Sidebar/>
          <Feed/>
          <RightBar/>
        </Stack>
      </Box>
    // </ThemeProvider>
  );
}

export default App;

