import './App.css';
import React from 'react';
import Header from './client/Components/Header';

function App() {
  return (
    <div className="App container-fluid">
      <Header />
      <div className="row">
        <h3>Natural Skincare</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pretium, nulla ut rhoncus porttitor, purus ligula dapibus nulla, quis sollicitudin.</p>
      </div>
      <div className="row">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non ligula ac risus commodo vestibulum sed et justo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus felis ante, commodo.</p>
        <button>Link</button>
      </div>
      <div className="row">
        <div className="col">
          <p>Image here</p>
        </div>
        <div className="col">
          <h1>Title</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et convallis dui. Curabitur tortor nisi, eleifend quis commodo nec, bibendum at sem. Curabitur eget nisi iaculis, congue leo id, pulvinar.</p>
          <button>Link</button>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <p>Subscribe</p>
          <p>Address</p>
        </div>
        {/* place footer here?  */}
        <div className="row">
          <button className="col">Link</button>
          <button className="col">Link</button>
          <button className="col">Link</button>
        </div>
      </div>
    </div>
  );
}

export default App;
