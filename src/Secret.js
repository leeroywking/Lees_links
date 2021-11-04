import * as React from "react";
import AudioListItem from "./AudioListItem";

const Secret = () => {
  const things = [
    {
      title: "Test Audio 1",
      description: "Mickey Voice",
      link: "/media/test_audio_1.mp3",
    },
    {
      title: "Test Audio 2",
      description: "Deeper Voice",
      link: "/media/test_audio_2.mp3",
    },
  ];
  return things.map((item) => {
    return <AudioListItem {...item} />;
  });
};

export default Secret;
