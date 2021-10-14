import * as React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
// import Link from "@mui/material/Link";
// import InboxIcon from "@mui/icons-material/MoveToInbox";
// import DraftsIcon from "@mui/icons-material/Drafts";
// import SendIcon from "@mui/icons-material/Send";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
// import StarBorder from "@mui/icons-material/StarBorder";
import Github from "@mui/icons-material/GitHub";
import Pokeball from "@mui/icons-material/SportsSoccer";
import TextRotationNone from "@mui/icons-material/TextRotationNone";
import TimelineIcon from "@mui/icons-material/Timeline";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import CodeIcon from "@mui/icons-material/Code";
import { useState } from "react";
import Input from "@mui/material/Input";
import { Icon } from "@iconify/react";

export default function NestedList() {
  const [open, setOpen] = React.useState(true);
  const [pokeFieldOpen, setPokeFieldOpen] = useState(false);
  const [autoCompleteOpen, setAutoCompleteOpen] = useState(false);
  const [pokename, setPokeName] = useState("");
  const handleClick = () => {
    setOpen(!open);
  };
  const [autoCompleteText, setAutoCompleteText] = useState("");

  return (
    <List
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Links for Lee-Roy
        </ListSubheader>
      }
    >
      {/* https://www.tiktok.com/@exmachinaexmilitary */}
      {/* cib:tiktok */}
      <ListItemButton
        component="a"
        href="https://www.tiktok.com/@exmachinaexmilitary"
      >
        <ListItemIcon>
          <Icon icon="cib:tiktok" style={{ "font-size": "1.5em" }} />
        </ListItemIcon>
        <ListItemText primary="TikTok" />
      </ListItemButton>
      <ListItemButton component="a" href="https://www.instagram.com/pogofwar/">
        <ListItemIcon>
          <InstagramIcon />
        </ListItemIcon>
        <ListItemText primary="Instagram" />
      </ListItemButton>
      <ListItemButton component="a" href="https://twitter.com/LeeRoyKing13">
        <ListItemIcon>
          <TwitterIcon />
        </ListItemIcon>
        <ListItemText primary="Twitter" />
      </ListItemButton>
      <ListItemButton
        component="a"
        href="https://open.spotify.com/user/12138314850?si=bc8720525d83485c"
      >
        <ListItemIcon>
          <Icon
            icon="akar-icons:spotify-fill"
            style={{ "font-size": "1.5em" }}
          />
        </ListItemIcon>
        <ListItemText primary="Spotify" />
      </ListItemButton>
      <ListItemButton component="a" href="https://www.twitch.tv/einraw">
        <ListItemIcon>
          <Icon icon="mdi:twitch" />
        </ListItemIcon>
        <ListItemText primary="Twitch" />
      </ListItemButton>
      <ListItemButton component="a" href="https://discord.gg/covenoftheredbear">
        <ListItemIcon>
          <Icon icon="mdi:discord" />
        </ListItemIcon>
        <ListItemText primary="Coven of the Red Bear" />
      </ListItemButton>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <CodeIcon />
        </ListItemIcon>
        <ListItemText primary="Software Developer stuff" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton
            component="a"
            href="https://maze-maker.herokuapp.com/"
            sx={{ pl: 4 }}
          >
            <ListItemIcon>
              <TimelineIcon />
            </ListItemIcon>
            <ListItemText primary="Free Mazes for life!" />
          </ListItemButton>
          <ListItemButton
            // component="a"
            href="https://oapi.herokuapp.com/autocomplete/tre"
            sx={{ pl: 4 }}
            onClick={() => setAutoCompleteOpen(!autoCompleteOpen)}
          >
            <ListItemIcon>
              <TextRotationNone />
            </ListItemIcon>
            <ListItemText primary="Auto complete" />
          </ListItemButton>
          {autoCompleteOpen ? (
            <ListItemButton>
              <ListItemText>
                <Input
                  placeholder="Enter word to complete and hit enter"
                  multiline={true}
                  onKeyDown={(e) => {
                    console.log(e);
                    if (e.key === "Enter") {
                      e.preventDefault();
                      window.location.href = `https://oapi.herokuapp.com/autocomplete/${autoCompleteText.toLowerCase()}`;
                    }
                  }}
                  onChange={(e) => setAutoCompleteText(e.target.value)}
                />
              </ListItemText>
            </ListItemButton>
          ) : null}
          <ListItemButton
            // component="a"
            href="https://poke-butts.herokuapp.com/charmander"
            sx={{ pl: 4 }}
            onClick={() => setPokeFieldOpen(!pokeFieldOpen)}
          >
            <ListItemIcon>
              <Pokeball />
            </ListItemIcon>
            <ListItemText primary="Pokébutts" />
          </ListItemButton>
          {pokeFieldOpen ? (
            <ListItemButton>
              <ListItemText>
                <Input
                  placeholder="Enter pokemon name and hit enter"
                  multiline={true}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      window.location.href = `https://poke-butts.herokuapp.com/${pokename.toLowerCase()}`;
                    }
                  }}
                  onChange={(e) => setPokeName(e.target.value)}
                />
              </ListItemText>
            </ListItemButton>
          ) : null}
          <ListItemButton
            component="a"
            href="https://github.com/leeroywking"
            sx={{ pl: 4 }}
          >
            <ListItemIcon>
              <Github />
            </ListItemIcon>
            <ListItemText primary="Github" />
          </ListItemButton>
          <ListItemButton
            component="a"
            href="https://bucket-pasta.com"
            sx={{ pl: 4 }}
          >
            <ListItemIcon>
              <Icon
                icon="mdi:bucket-outline"
                style={{ "font-size": "1.5em" }}
              />
            </ListItemIcon>
            <ListItemText primary="Bucket Pasta" />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
}

/*
import { Icon } from '@iconify/react';
<Icon icon="mdi:discord" />
*/
// https://www.tiktok.com/@exmachinaexmilitary
