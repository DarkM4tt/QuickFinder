import { useEffect, useState } from "react";
import SearchIcon from "../../assets/svg/magnifying-glass-solid.svg";
import Logo from "../../components/Logo";
import SearchBoxCard from "../../components/SearchBoxCard";
import {
  TrendDataType,
  TrendsData,
  SuggestionData,
} from "../../helpers/fakerData";
import "./Home.scss";

const Home = () => {
  const [query, setQuery] = useState<string>("");
  const [showTrends, setShowTrends] = useState(false);
  const [trendsData, setTrendsData] = useState<TrendDataType[]>([]);
  const [suggestionData, setSuggestionData] = useState<string[]>([]);

  useEffect(() => {
    setTrendsData(TrendsData);
    setSuggestionData(SuggestionData);
  }, []);

  return (
    <div className="home">
      <Logo />

      <div className="search-box">
        <input
          placeholder="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setShowTrends(true)}
        />
        <button>
          <img src={SearchIcon} alt="search" />
        </button>
      </div>

      {showTrends && (
        <SearchBoxCard
          suggestionData={suggestionData}
          setQuery={setQuery}
          trendsData={trendsData}
        />
      )}
    </div>
  );
};

export default Home;
