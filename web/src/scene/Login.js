import React ,{useState} from "react";
import { useHistory } from "react-router-dom";
export default function Login() {
  let history = useHistory();
  // let [userName,setUserName] = useState("a")
  // let [password,setPassword] = useState("b")

  

//   let handleUser = (evt) => {
//         let value = evt.target.value
//         setUserName(value)
//   }

//   let handlePassword = (evt) => {
//       let value = evt.target.value
//       setPassword(value)
// }

  return (
    <React.Fragment>
      <button style={{ color: "blue" }} onClick={() => history.push("/")}>
        back to home{" "}
      </button>
      <h1>Login </h1>
      <form> 
        <a>username  :   </a>
        <input ></input><br/>
        <a>password  :   </a>
        <input ></input><br/>
        <input type="submit" value="Submit"></input>
      </form>
      {/* <input placeholder="username" onChange={handleUser} />
      <input placeholder="password" onChange={handlePassword} /> */}
    </React.Fragment>
  );
}
