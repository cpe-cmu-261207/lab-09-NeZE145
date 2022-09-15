import React from "react";

export default function Aboutme() {
  return (
    <div>
      <div class="col d-flex justify-content-center">
        <div class="card mb-3" style={{ maxWidth: "540px" }}>
          <div class="row g-0">
            <div class="col-md-4">
              <img
                src="/pic/c++.png"
                width="180"
                height="180"
                className="rounded-circle"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div class="col-md-8">
              <div class="card-body bg">
                <h5 class="card-title">Programming</h5>
                <p class="card-text">
                  My first computer language is c++ .now I studying HTML and
                  java.
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
                src="/pic/game.png"
                width="180"
                height="180"
                className="rounded-circle"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div class="col-md-8">
              <div class="card-body bg">
                <h5 class="card-title">Game</h5>
                <p class="card-text">
                  I always love to play games, especially computer games. It
                  always helps me relax.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
