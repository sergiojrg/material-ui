import { useState } from 'react'
import { InputBase, Menu, MenuItem, AppBar, Avatar, Mail, Badge, Toolbar, Typography, styled, Box } from '@mui/material'
import PetsIcon from '@mui/icons-material/Pets';
import EmailIcon from '@mui/icons-material/Email';
import NotificationsIcon from '@mui/icons-material/Notifications';

const StyledToolBar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({theme}) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius:  theme.shape.borderRadius,
  width: "40%"
}))
const IconContainer = styled(Box)(({theme}) => ({
  display:"none",
  gap:"20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]:{
    display:"flex"
  }
}))
const UserBox = styled(Box)(({theme}) => ({
  display:"flex",
  gap:"10px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]:{
    display:"none"
  }
}))

const NavBar = () => {

  const [open,setOpen] = useState(false)

  return (
    <AppBar position="sticky"
    >
      <StyledToolBar
      >
        <Typography variant="h6"
          sx={{
            display:{
              xs:"none",
              sm:'block'
            },
          }}
        >
          RAMIREZ DEV
        </Typography>
        <PetsIcon
          sx={{
            display:{
              xs:"block",
              sm:"block",
              md:"none"
            }
          }}
        />
        <Search>
          <InputBase
            placeholder="Search"
          />
        </Search>
        <IconContainer>
          <Badge badgeContent={4} color="error">
            <EmailIcon color="white"/>
          </Badge>
          <Badge badgeContent={2} color="error">
            <NotificationsIcon color="white"/>
          </Badge>
          <Avatar 
            sx={{width:30, height:30 }} 
            src="https://unsplash.com/es/fotos/iEEBWgY_6lA"
            onClick={e=>setOpen(true)}
          />
        </IconContainer>
        <UserBox>
          <Avatar sx={{width:30, height:30 }} src="https://unsplash.com/es/fotos/iEEBWgY_6lA"/>
          <Typography
            variant="span"
          >
            John Doe
          </Typography>
        </UserBox>
      </StyledToolBar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={e=>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      > 
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default NavBar