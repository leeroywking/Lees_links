import axios from "axios";
// httpbin.org gives you the headers in the response
// body `res.data`.
// See: https://httpbin.org/#/HTTP_Methods/get_get

const nowListening = async () => {
  const res = await axios
    .get("https://lee-links-backend-uum42.ondigitalocean.app/currently_playing", {
      headers: {
        Authorization:
          "Bearer BQAOGsJAP-O15EPbb6KJawX210IW8x1lIe546FPXRQFOHdX2eS_0tCAA0P-BI5vzoIWQFjC_fpmG7-TZqz0FQdqZJmc-J8wANRF5N6_DKa87M4ynqLQHYPP0sp0eagvmq9PSZpjxneFtQu_ex1YsCQ",
      },
    })
    .catch((err) => err);
  return res.data;
};

const playlist = async (playlist_href, token) => {
  const res = await axios.get(playlist_href, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.data;
};
export { playlist, nowListening };
