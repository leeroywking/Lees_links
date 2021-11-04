import * as React from "react";
import { ListItem, IconButton, ListItemAvatar } from "@mui/material";
import { ListItemText } from "@mui/material";
import { Icon } from "@iconify/react";

const AudioListItem = (props) => {
  return (
    <ListItem
      secondaryAction={
        <IconButton
          component="a"
          download
          href={props.link}
          edge="end"
          aria-label="download"
          onClick={() => console.log("clicked download")}
        >
          <Icon
            icon="bx:bxs-download"
            style={{ "font-size": "1.5em" }}
            sx={{ pl: 4 }}
          />
        </IconButton>
      }
    >
      <ListItemAvatar>
        <IconButton
          edge="end"
          aria-label="play"
          onClick={() => new Audio(props.link).play()}
        >
          <Icon
            icon="el:play"
            style={{ "font-size": "1.5em" }}
            sx={{ pl: 4 }}
          />
        </IconButton>
      </ListItemAvatar>
      <ListItemText
        primary={props.title}
        secondary={props.description ? props.description : null}
      />
    </ListItem>
  );
};

export default AudioListItem;
