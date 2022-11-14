import * as React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
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
import LinkListItem from "./LinkListItem";
import SvgIcon from "@material-ui/core/SvgIcon";
import { playlist, nowListening } from "./getCurrentlyListening";
// import FanslyIcon from "./media/FanslyIcon";
import { ReactComponent as FanslyIcon } from "./media/Fansly-icon-1.svg";
import AdultConfirmation from "./AdultConfirmModal";

export default function NestedList() {
  const [openSoftware, setOpenSoftware] = React.useState(false);
  const [openSpotify, setOpenSpotify] = React.useState(false);
  const [pokeFieldOpen, setPokeFieldOpen] = useState(false);
  const [autoCompleteOpen, setAutoCompleteOpen] = useState(false);
  const [openAffiliate, setOpenAffiliate] = useState(false);
  const [pokename, setPokeName] = useState("");
  const [spicyOpen, setSpicyOpen] = useState(false);
  const [adultConfirmOpen, setAdultConfirmOpen] = useState(false);
  const [currentlyListening, setCurrentlyListening] = React.useState({});
  const [currentPlaylist, setCurrentPlaylist] = React.useState({});
  const handleClickSpotify = () => {
    nowListening()
      .then((data) => {
        setCurrentlyListening(data);
        playlist(data.context.href, data.token).then((data2) => {
          // console.log({ currentlyListening });
          console.log({ data2 });
          setCurrentPlaylist(data2);
        });
      })
      .catch((err) => console.error(err));

    setOpenSpotify(!openSpotify);
  };

  const [autoCompleteText, setAutoCompleteText] = useState("");
  const [isSupporter] = useState(localStorage.usertype === "supporter");

  const checkConfirmAdultContent = () => {
    if (localStorage.adultConfirmed === "true") {
      setSpicyOpen(!spicyOpen);
    } else {
      setAdultConfirmOpen(true);
    }
  };

  return (
    <List
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader
          component="div"
          id="nested-lismdi:microphone-variantt-subheader"
        >
          Links for Lee-Roy
        </ListSubheader>
      }
    >
      <LinkListItem
        primary="Main TikTok"
        component="a"
        href="https://www.tiktok.com/@exmachinaexmilitary"
        icon={<Icon icon="cib:tiktok" style={{ "font-size": "1.5em" }} />}
      />
      <LinkListItem
        primary="Backup TikTok"
        component="a"
        href="https://www.tiktok.com/@exmachina.exmilitary"
        icon={<Icon icon="cib:tiktok" style={{ "font-size": "1.5em" }} />}
      />
      <LinkListItem
        primary="Etsy Store (new!)"
        component="a"
        href="https://www.etsy.com/shop/ThiccSystems"
        // icon={<FontAwesomeIcon icon="fab fa-etsy" />}
        icon={<Icon icon="bxl:etsy" style={{ "font-size": "1.5em" }}/>}
      />
      {/* <LinkListItem
        primary="Nerdy TikTok (Marvel and software development)"
        component="a"
        href="https://www.tiktok.com/@exmachina.nerdy"
        icon={<Icon icon="cib:tiktok" style={{ "font-size": "1.5em" }} />}
      /> */}
      <LinkListItem
        primary="Instagram"
        component="a"
        href="https://www.instagram.com/pogofwar/"
        AdultConfirmation
        icon={<InstagramIcon />}
      />
      <LinkListItem
        primary="Twitter"
        component="a"
        href="https://twitter.com/LeeRoyExMachina"
        icon={<TwitterIcon />}
      />
      <LinkListItem
        primary="Youtube"
        component="a"
        href="https://www.youtube.com/channel/UCH6DIWNQ076bWdjsY9svaGQ"
        icon={<Icon
          icon="mdi:youtube"
          style={{ "font-size": "1.5em" }}
        />}
      />
      <LinkListItem
        primary="Thicc Systems Store"
        component="a"
        href="https://thicc-systems.myshopify.com/"
        icon={
          <Icon
            icon="fontisto:shopify"
            style={{"font-size": "1.5em"}}
            />
        }
      />
      <LinkListItem
        primary="Spotify"
        // component="a"
        href="https://open.spotify.com/user/12138314850?si=bc8720525d83485c"
        icon={
          <Icon
            icon="akar-icons:spotify-fill"
            style={{ "font-size": "1.5em" }}
          />
        }
        onClick={handleClickSpotify}
      >
        {openSpotify ? <ExpandLess /> : <ExpandMore />}
      </LinkListItem>
      <Collapse in={openSpotify} timeout="auto" unmountOnExit>
        {currentlyListening &&
        currentPlaylist &&
        currentPlaylist.name &&
        currentlyListening.token ? (
          <LinkListItem
            primary={`Playlist: ${currentPlaylist.name}`}
            component="a"
            href={currentPlaylist.external_urls.spotify}
            icon={
              <Icon
                icon="akar-icons:spotify-fill"
                style={{ "font-size": "1.5em" }}
              />
            }
            sx={{ pl: 4 }}
          />
        ) : null}
        {currentlyListening && currentlyListening.item ? (
          <LinkListItem
            primary={`Track: ${currentlyListening.item.name}`}
            component="a"
            href={currentlyListening.context.external_urls.spotify}
            icon={
              <Icon
                icon="akar-icons:spotify-fill"
                style={{ "font-size": "1.5em" }}
                sx={{ pl: 4 }}
              />
            }
            sx={{ pl: 4 }}
          />
        ) : null}

        <LinkListItem
          primary="Lee's spotify"
          component="a"
          href="https://open.spotify.com/user/12138314850?si=bc8720525d83485c"
          icon={
            <Icon
              icon="akar-icons:spotify-fill"
              style={{ "font-size": "1.5em" }}
            />
          }
          sx={{ pl: 4 }}
          onClick={handleClickSpotify}
        />
      </Collapse>
      <LinkListItem
        primary="Twitch"
        component="a"
        href="https://www.twitch.tv/einraw"
        icon={<Icon icon="mdi:twitch" style={{ "font-size": "1.5em" }} />}
      />
      <LinkListItem
        primary="Coven of the Red Bear (Discord)"
        component="a"
        href="https://discord.gg/covenoftheredbear"
        icon={<Icon icon="mdi:discord" style={{ "font-size": "1.5em" }} />}
      />
      <LinkListItem
        primary="Software Developer stuff"
        // component=""
        onClick={() => setOpenSoftware(!openSoftware)}
        // href="https://discord.gg/covenoftheredbear"
        icon={<CodeIcon />}
      >
        {openSoftware ? <ExpandLess /> : <ExpandMore />}
      </LinkListItem>
      <Collapse in={openSoftware} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <LinkListItem
            primary="Free Mazes for life!"
            component="a"
            href="https://maze-maker.herokuapp.com/"
            icon={<TimelineIcon />}
            sx={{ pl: 4 }}
          />
          <LinkListItem
            primary="Auto complete"
            component="a"
            onClick={() => setAutoCompleteOpen(!autoCompleteOpen)}
            href="https://oapi.herokuapp.com/autocomplete/tre"
            icon={<TextRotationNone />}
            sx={{ pl: 4 }}
          />
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

          <LinkListItem
            primary="Github"
            component="a"
            href="https://github.com/leeroywking"
            icon={<Github />}
            sx={{ pl: 4 }}
          />
          <LinkListItem
            primary="Bucket Pasta"
            component="a"
            href="https://bucket-pasta.com"
            icon={
              <Icon
                icon="mdi:bucket-outline"
                style={{ "font-size": "1.5em" }}
              />
            }
            sx={{ pl: 4 }}
          />
        </List>
      </Collapse>
      <LinkListItem
        primary="Buy Stuff that's in my videos I guess if you really want to"
        // component=""
        onClick={() => setOpenAffiliate(!openAffiliate)}
        // href="https://discord.gg/covenoftheredbear"
        icon={<Icon icon="mdi:cash" style={{ "font-size": "1.5em" }} />}
      >
        {openAffiliate ? <ExpandLess /> : <ExpandMore />}
      </LinkListItem>
      <Collapse in={openAffiliate} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <LinkListItem
            primary="Blue Yeti Microphone"
            component="a"
            href="https://www.amazon.com/gp/product/B00N1YPXW2/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B00N1YPXW2&linkCode=as2&tag=exmachina00-20&linkId=4920cc558e42edc164c3cefd65192238"
            icon={
              <Icon
                icon="mdi:microphone-variant"
                style={{ "font-size": "1.5em" }}
              />
            }
            sx={{ pl: 4 }}
          />
          <LinkListItem
            primary="Audio-Technica ATH-M50X"
            component="a"
            href="https://www.amazon.com/gp/product/B00HVLUR86/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B00HVLUR86&linkCode=as2&tag=exmachina00-20&linkId=15bd3767f753ad1ddbbc8ebe3aae10f1"
            icon={
              <Icon icon="mdi:headphones" style={{ "font-size": "1.5em" }} />
            }
            sx={{ pl: 4 }}
          />
        </List>
      </Collapse>
      {localStorage.cleanmode !== "true" ? (
        <AdultConfirmation
          adultConfirmOpen={adultConfirmOpen}
          setAdultConfirmOpen={setAdultConfirmOpen}
        >
          <LinkListItem
            primary="Adult Content"
            // component=""
            onClick={() => checkConfirmAdultContent()}
            // href="https://discord.gg/covenoftheredbear"
            icon={
              <Icon
                icon="fxemoji:nooneunder18symbol"
                style={{ "font-size": "1.5em" }}
              />
            }
          >
            {spicyOpen ? <ExpandLess /> : <ExpandMore />}
          </LinkListItem>
        </AdultConfirmation>
      ) : null}
      <Collapse in={spicyOpen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <LinkListItem
            primary="Spicy Insta"
            component="a"
            href="https://www.instagram.com/exmachinaexmilitary/"
            icon={<InstagramIcon />}
            sx={{ pl: 4 }}
          />
          <LinkListItem
            primary="TikTok thirst traps"
            component="a"
            href="https://www.tiktok.com/@exmachina.spicy"
            icon={<Icon icon="cib:tiktok" style={{ "font-size": "1.5em" }} />}
            sx={{ pl: 4 }}
          />
          <LinkListItem
            primary="OnlyFans"
            component="a"
            href="https://onlyfans.com/exmachinaexmilitary"
            icon={
              <Icon
                icon="simple-icons:onlyfans"
                style={{ "font-size": "1.5em" }}
              />
            }
            sx={{ pl: 4 }}
          />
          <LinkListItem
            primary="Fansly"
            component="a"
            href="https://fans.ly/r/Exmachina"
            icon={
              <SvgIcon>
                <FanslyIcon
                  className="iconify iconify--simple-icons"
                  style={{ "font-size": "1.5em", color: "inherit" }}
                />
              </SvgIcon>
            }
            sx={{ pl: 4 }}
          />
        </List>
      </Collapse>
      {isSupporter ? (
        <LinkListItem
          primary="Thank you for being a supporter!"
          component="a"
          // onClick={handleClickAffiliate}
          href="/superdupersecretsupporterurlyoucouldneverhackthisever"
          icon={
            <Icon
              icon="mdi:alert-octagram-outline"
              style={{ "font-size": "1.5em" }}
            />
          }
        ></LinkListItem>
      ) : null}
    </List>
  );
}
