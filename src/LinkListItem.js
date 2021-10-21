import React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

export default (props) => (
  <ListItemButton
    component={props.component}
    href={props.href}
    onClick={props.onClick || null}
    sx={props.sx}
  >
    <ListItemIcon>
      {props.icon}
      {/* <Icon icon="cib:tiktok" style={{ "font-size": "1.5em" }} /> */}
      
    </ListItemIcon>
    <ListItemText primary={props.primary} />
    {props.children}
  </ListItemButton>
);
