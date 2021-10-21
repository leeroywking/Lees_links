import axios from "axios";
// httpbin.org gives you the headers in the response
// body `res.data`.
// See: https://httpbin.org/#/HTTP_Methods/get_get

const nowListening = async () => {
  const res = await axios.get(
    "https://api.spotify.com/v1/me/player/currently-playing",
    {
      headers: {
        Authorization:
          "Bearer BQAOGsJAP-O15EPbb6KJawX210IW8x1lIe546FPXRQFOHdX2eS_0tCAA0P-BI5vzoIWQFjC_fpmG7-TZqz0FQdqZJmc-J8wANRF5N6_DKa87M4ynqLQHYPP0sp0eagvmq9PSZpjxneFtQu_ex1YsCQ",
      },
    }
  );

  return res.data;
};

const playlist = async (playlist_href) => {
  const res = await axios.get(playlist_href, {
    headers: {
      Authorization:
        "Bearer BQAOGsJAP-O15EPbb6KJawX210IW8x1lIe546FPXRQFOHdX2eS_0tCAA0P-BI5vzoIWQFjC_fpmG7-TZqz0FQdqZJmc-J8wANRF5N6_DKa87M4ynqLQHYPP0sp0eagvmq9PSZpjxneFtQu_ex1YsCQ",
    },
  });

  return res.data;
};
export { playlist, nowListening };
