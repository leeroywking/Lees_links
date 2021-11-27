import * as React from "react";
import NestedList from "./LinkList";
import Secret from "./Secret";

export default function App() {
  const pathname = window.location.pathname;
  console.log(pathname);
  const urlSearchParams = new URLSearchParams(window.location.search);
  const params = Object.fromEntries(urlSearchParams.entries());
  if (params.secretcode === "3366833777844332226668883366") {
    localStorage.usertype = "supporter";
    window.location.replace("/");
  }
  if (params.cleanmode === "true") {
    localStorage.cleanmode = "true";
    window.location.replace("/");
  }
  console.log(params);

  if (
    pathname === "/superdupersecretsupporterurlyoucouldneverhackthisever" &&
    localStorage.usertype === "supporter"
  ) {
    return <Secret />;
  } else {
    return <NestedList />;
  }
}
