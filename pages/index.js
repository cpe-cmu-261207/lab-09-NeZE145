import Aboutme from "../components/Aboutme";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Pro from "../components/Pro";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Pro />
      <Aboutme />
      <Footer />
    </div>
  );
}
