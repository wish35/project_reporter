import React,{useState} from "react";
import "../css/home.css";
import { useHistory } from "react-router-dom";
import Modal from "./Modal";
export default function Home() {
  let history = useHistory();
  
  return (
    <React.Fragment>
      <div id="root">
        <div className="title"> Kompas.ID</div>
        <Modal />
        <form class="tulis">
          <div class="tulisberita">
            <span>Tulis Berita disini</span>
          </div>
          <br />
          <textarea class="formblack"></textarea>
          <br />
          <button> Create news </button>
        </form>
        <div class="listberita">
          <div class="foto">saa</div>
          <div class="judul">sdc</div>
          <div class="opt">
            <button>edit</button>
            <button>delete</button>
          </div>
        </div>
      </div>

      <div>
        <br />
        <button onClick={() => history.push("/login")}> login </button>
        <button onClick={() => history.push("/signup")}> register </button>
      </div>
    </React.Fragment>
  );
}
