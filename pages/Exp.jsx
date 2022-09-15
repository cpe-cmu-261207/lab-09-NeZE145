import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function exp() {
  return (
    <div calss="card text-center">
      <div>
        <Navbar />
        <div class="col d-flex justify-content-center">
          <div class="card mb-3" style={{ maxWidth: "540px" }}>
            <div class="row g-0">
              <div class="col-md-4">
                <img
                  src="/pic/scratch.png"
                  width="180"
                  height="180"
                  className="square"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div class="col-md-8">
                <div class="card-body bg">
                  <h5 class="card-title">A long night</h5>
                  <p class="card-text">
                    A long night is a platformer game that I and my team made in
                    Scratch.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col d-flex justify-content-center">
          <div class="card mb-3" style={{ maxWidth: "540px" }}>
            <div class="row g-0">
              <div class="col-md-4">
                <img
                  src="/pic/MARKLRM.png"
                  width="180"
                  height="180"
                  className="square"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div class="col-md-8">
                <div class="card-body bg">
                  <h5 class="card-title">go chess</h5>
                  <p class="card-text">I and my team made go chess with C++.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
