import logo from "./logo.svg";
import "./App.css";
import myimg from "./img/myimg.png";
import React, { Component }  from 'react';
import "./style.css";

function App() {
  return (
    <div className="App">
      <div>
        <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
          <h1 className="title red">je me nomme Pape Seck</h1>
          <br />
          <img src={myimg} style={{maxWidth:'150px', maxHeight:'200px'}} />
          <br />
          <img src="/images/pape.jpg"  style={{maxWidth:'150px', maxHeight:'200px'}}/>
        </div>
        <video width={320} height={240} controls>
          <source src="myVideo.mp4" type="video/mp4" />
        </video>
      </div>

    </div>
  );
}

export default App;
