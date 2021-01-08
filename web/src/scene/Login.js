import React from "react";
import { useHistory } from "react-router-dom";
export default function Login() {
  let history = useHistory();
  return (
    <React.Fragment>
      <button style={{ color: "blue" }} onClick={() => history.push("/")}>
        home{" "}
      </button>
      <h1>Login </h1>
      <input placeholder="email" />
      <input placeholder="password" />
    </React.Fragment>
  );
}
