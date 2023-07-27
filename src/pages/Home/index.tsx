import { useState } from "react";
import SearchIcon from "../../assets/svg/magnifying-glass-solid.svg";
import Logo from "../../components/Logo/Logo";
import "./Home.scss";

const Home = () => {
  const [query, setQuery] = useState("");
  const [showTrends, setShowTrends] = useState(false);

  return (
    <div className="home">
      <Logo />

      <div className="search-box">
        <input
          placeholder="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setShowTrends(true)}
          onBlur={() => setShowTrends(false)}
        />
        <button>
          <img src={SearchIcon} alt="search" />
        </button>
      </div>

      {showTrends ? <></> : <></>}
    </div>
  );
};

export default Home;
