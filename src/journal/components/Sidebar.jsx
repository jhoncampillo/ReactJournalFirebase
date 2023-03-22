import React from "react";
import {
  Box,
  Divider,
  Drawer,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  Grid,
  List,
} from "@mui/material";
import { TurnedInNot } from "@mui/icons-material";
export const Sidebar = ({ drawerWidth = 240 }) => {
  return (
    <Box
      component="nav"
      //   manejo de tama;o depantallas
      // maneja  el drawerWidth en pantallas pequenas
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    >
      {/* Comp[onente de MU <Drawer> que es el mismo Sidebar*/}
      <Drawer
        variant="permanent" //puede ser temporary de acuedo al manejo de screen
        open={true}
        // onClose={}
        // ModalProps=
        //Codigo extarido de MUI.com
        sx={{
          display: { xs: "block" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Jhon Jairo{" "}
          </Typography>
        </Toolbar>
        <Divider />

        <List
        //   sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          {["Enero", "Febrero", "Marzo", "Abril"].map((text) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <TurnedInNot />
                </ListItemIcon>
                <Grid container>
                  <ListItemText primary={text} />
                  <ListItemText secondary={"lorem8dffsdfssdfssdfsf"} />
                </Grid>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};
