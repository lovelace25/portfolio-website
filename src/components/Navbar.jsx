import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { styled, Paper } from '@mui/material';

const StyleToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "Center",
  zIndex: "1",
})

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "transparent",
  border: "none",
  fontFamily: "Nova Round",
  cursor: "pointer",
  boxShadow: "none",
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.primary.light,
  '&:hover': {
    color: theme.palette.secondary.main,
  },
}));

const Navbar = () => {
  return (
    <AppBar position="static">
      <StyleToolbar >
        <Item>TOP</Item>
        <Item>BIOGRAPHY</Item>
        <Item>ACHIEVEMENTS</Item>
        <Item>EVENTS</Item>
        <Item>CONTACT</Item>
      </StyleToolbar>
    </AppBar>
  )
}

export default Navbar