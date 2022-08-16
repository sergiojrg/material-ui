import React from 'react'
import { Switch, Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { Home, Group, Article, Person, Settings, AccountCircle, Nightlight } from '@mui/icons-material'

const SideBar = () => {
  return (
    <Box
      flex={2}
      p={2}
      sx={{
        display:{xs:'none',sm:"block"}
      }}
    >
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon component="a" href="#home">
              <Home/>
            </ListItemIcon>
            <ListItemText primary="Homepage" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon component="a" href="#pages">
              <Article/>
            </ListItemIcon>
            <ListItemText primary="Pages" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon component="a" href="#pages">
              <Group/>
            </ListItemIcon>
            <ListItemText primary="Groups" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon component="a" href="#pages">
              <Group/>
            </ListItemIcon>
            <ListItemText primary="Marketplace" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon component="a" href="#pages">
              <Person/>
            </ListItemIcon>
            <ListItemText primary="Friends" />
          </ListItemButton>
        </ListItem>
        
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon component="a" href="#pages">
              <Settings/>
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItemButton>
        </ListItem>
        
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon component="a" href="#pages">
              <AccountCircle/>
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItemButton>
        </ListItem>
        
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon component="a" href="#pages">
              <Nightlight/>
            </ListItemIcon>
            <Switch/>
          </ListItemButton>
        </ListItem>
        
      </List>
    </Box>
  )
}

export default SideBar