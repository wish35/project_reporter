import React from "react";
import { useHistory } from "react-router-dom";
export default function Login() {
  let history = useHistory();
  let [userName,setUserName] = useState('')
  let [password,setPassword] = useState('')


  let handleUser = (evt) => {
        let value = evt.target.value
        setUserName(value)
  }

  let handlePassword = (evt) => {
      let value = evt.target.value
      setPassword(value)
}

  return (
    <React.Fragment>
      <button style={{ color: "blue" }} onClick={() => history.push("/")}>
        home{" "}
      </button>
      <h1>Login </h1>
      <input placeholder="username" onChange={handleUser} />
      <input placeholder="password" onChange={handlePassword} />
    </React.Fragment>
  );
}
