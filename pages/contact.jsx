import React from "react";
import Footer from "../components/footer";
import Navbar from "../components/Navbar";

export default function contact() {
  return (
    <div>
      <Navbar />
      <div class="card text-center">
        <div class="card-body">
          <h5 class="card-title">Contact</h5>
          <img
            src="/pic/propic.jpeg"
            width="180"
            height="180"
            className="rounded-circle"
            style={{ objectFit: "cover" }}
          />
          <div class="card-text">
            <p></p>
            <span class="fw-bold">Name:</span>
            <span>Wasan Santichaiphonkul</span>
            <p></p>
            <span class="fw-bold">Nickname:</span>
            <span>Boss</span>
            <p></p>
            <span class="fw-bold">Facebook:</span>
            <a
              href="https://www.facebook.com/profile.php?id=100004411034286"
              target="_blank"
            >
              https://www.facebook.com/profile.php?id=100004411034286
            </a>
            <p></p>
            <span class="fw-bold">Email:</span>
            <a href="mailto: wasan_santi@cmu.ac.th">wasan_santi@cmu.ac.th</a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
