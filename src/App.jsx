
import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ProfileSetup from "./pages/ProfileSetup";
import Explore from "./pages/Explore";
import "./styles/global.css";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [profile, setProfile] = useState(null);

  function navigate(page) {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="app">
      <Navbar currentPage={currentPage} navigate={navigate} />

      <main>
        {currentPage === "home" && (
          <Home navigate={navigate} profile={profile} />
        )}

        {currentPage === "profile" && (
          <ProfileSetup
            navigate={navigate}
            onSave={(data) => {
              setProfile(data);
              navigate("explore");
            }}
          />
        )}

        {currentPage === "explore" && (
          <Explore profile={profile} navigate={navigate} />
        )}
      </main>

      <Footer navigate={navigate} />
    </div>
  );
}
