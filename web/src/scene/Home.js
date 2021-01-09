import React from "react";
import "../css/home.css";
import { useHistory } from "react-router-dom";
import Modal from "./Modal";
{/* <link
  rel="stylesheet"
  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
  integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
  crossorigin="anonymous"
/> */}
export default function Home() {
  let history = useHistory();
  
  return (
    <React.Fragment>
      <div id="root" className="center">
        <div className="title"> Kompas.ID
        <div className="fl-r">
        <br />
        <button onClick={() => history.push("/login")}> login </button>
        <button onClick={() => history.push("/signup")}> register </button>
      </div>
        </div>
        <a>Amanat Hati Nurani Rakyat</a>
        
        <form class="tulis">
          <div class="tulisberita">
          
          </div>
          <br />
          <textarea class="formblack" placeholder="tulis berita disini"></textarea>
          <br />
          <button className="btncrt"> Create news </button>
        </form>
        <div class="listberita">
          <div class="foto">
          Inspira(k)si, Kemilau Perayaan HUT ke-50 Kompas
          </div>
          <div class="judul">Perjalanan penuh kisah milik bangsa Indonesia dan dunia dalam 
          kurun waktu setengah abad ini telah terabadikan. Pada 28 Juni 2015, usia 50 tahun 
          dicapai oleh harian umum yang didirikan PK Ojong (1920â€“1980) dan Jakob Oetama ini.
           Usia emas menjadi pertanda harian ini mampu terus hadir menemani langkah-langkah 
           Indonesia untuk terus menginspirasi dan menjadi Amanat Hati Nurani Rakyat.
           </div>
          <div class="opt">
            <button>edit</button>
            <button>delete</button>
          </div>
        </div>
      </div>

    </React.Fragment>

  );
}
