import * as React from "react";
import { useState, useEffect } from "react";

import HeaderContainer from "./Header";

import { UserProps } from "./types";

function App() {
  const [user, setUser] = useState({ name: "", email: "" });

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        `http://localhost:8090/users/d2751ed4-d8a2-4aa8-845b-17bc10d76ed9`
      );
      res.json().then((res: UserProps) => {
        if (res.email && res.name) {
          setUser(res);
        }
      });
    }
    fetchData();
  });

  return <HeaderContainer user={user} />;
}

export default App;
