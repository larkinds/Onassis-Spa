// import './App.css';
import React from 'react';
import Header from './client/Components/Header';
import Footer from './client/Components/Footer';

function App() {
  return (
    <div className="App container-fluid overflow-hidden p-0">
      <Header className="row" />
      <div className="row">
        <div className="col">
          <img
            src="images/ramez-e-nassif-MleYuWDtQ50-unsplash.jpg"
            alt="Close Up of collarbones"
            className="img-fluid"
          />
        </div>
        <div
          className="col position-absolute start-50 bottom-50 translate-middle align-items-center text-white"
          style={{ maxWidth: 700 }}
        >
          <p className="text-uppercase m-3 fs-5">Natural Skincare</p>
          <p className="fs-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            pretium, nulla ut rhoncus porttitor, purus ligula dapibus nulla,
            quis sollicitudin.
          </p>
        </div>
      </div>
      <div className="row bg-success p-5">
        <div className="col d-flex flex-column align-items-center">
          <p className="mx-5 my-3 fs-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non
            ligula ac risus commodo vestibulum sed et justo. Pellentesque
            habitant morbi tristique senectus et netus et malesuada fames ac
            turpis egestas. Phasellus felis ante, commodo.
          </p>
          <button type="btn" className="btn btn-outline-dark my-3 fs-5">
            About Onassis
          </button>
        </div>
      </div>
      <div className="row justify-items-center">
        <div className="col d-flex flex-column justify-content-center align-items-center bg-danger">
          <p className="fs-6 fw-bolder">Onassis Skincare Studio</p>
          <p className="text-center fs-5 p-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et
            convallis dui. Curabitur tortor nisi, eleifend quis commodo nec,
            bibendum at sem. Curabitur eget nisi iaculis, congue leo id,
            pulvinar.
          </p>
          <button type="btn" className="btn btn-outline-dark fs-6 mt-6">
            Services
          </button>
        </div>
        <div className="col ps-0">
          <img
            src="images/outsideEntrance.jpg"
            alt="Waiting area for Onassis spa with a side table and red built in couch"
            className="img-fluid"
          />
        </div>
      </div>
      <div className="row bg-success p-5">
        <div className="col d-flex flex-column align-items-center">
          <p className="mx-5 my-3 fs-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non
            ligula ac risus commodo vestibulum sed et justo. Pellentesque
            habitant morbi tristique senectus et netus et malesuada fames ac
            turpis egestas. Phasellus felis ante, commodo.
          </p>
          <button type="btn" className="btn btn-outline-dark my-3 fs-5">
            Ingredients
          </button>
        </div>
      </div>
      <div className="row justify-items-center">
        <div className="col pe-0">
          <img
            src="images/blue_botanical.jpg"
            alt="botanicals with shadows on blue background"
            className="img-fluid"
          />
        </div>
        <div className="col ps-0 d-flex flex-column justify-content-center align-items-center bg-primary">
          <p className="fs-6 fw-bolder">Botanical Ingredients</p>
          <p className="text-center fs-5 p-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et
            convallis dui. Curabitur tortor nisi, eleifend quis commodo nec,
            bibendum at sem. Curabitur eget nisi iaculis, congue leo id,
            pulvinar.
          </p>
          <button type="btn" className="btn btn-outline-dark fs-6 mt-6">
            Products
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
