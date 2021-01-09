import React from "react";
import { useHistory } from "react-router-dom";

export default function Signup() {
  let history = useHistory();

  let handleEmail = (e) => {
    let email = e.target.value;
    console.log(email);
  };

  let onChange = (evt) => {
    let bool = evt.target.value;
  };
  return (
    <React.Fragment>
      <button style={{ color: "blue" }} onClick={() => history.push("/")}>
       back to home
      </button>
      <h1>Register</h1>
      <form>
        <input placeholder="email" onChange={handleEmail} />
        <input placeholder="password" /> <br />
        <input type="radio" id="reporter" name="role" onChange={onChange} />
        <label for="reporter">reporter</label>
        <input type="radio" id="editor" name="role" onChange={onChange} />
        <label for="reporter">editor</label>
      </form>
    </React.Fragment>
  );
}
