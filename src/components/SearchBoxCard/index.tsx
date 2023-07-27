import { TrendDataType } from "../../helpers/fakerData";
import { Link } from "react-router-dom";
import TrendsCard from "../TrendsCard";
import "./SearchBoxCard.scss";

type SearchBoxCardPropsType = {
  trendsData: TrendDataType[];
  suggestionData: string[];
  setQuery: Function;
};

const SearchBoxCard = (props: SearchBoxCardPropsType) => {
  return (
    <div className="search-box-card">
      <Link className="link" to="/search">
        <div>
          <h3>Latest trends</h3>
          <div className="trends-card-view">
            {[...props.trendsData].map((element, index) => (
              <TrendsCard
                key={index}
                setQuery={props.setQuery}
                imgUrl={element.imgUrl}
                description={element.description}
              />
            ))}
          </div>
        </div>

        <div>
          <h3> Popular Suggestions</h3>
          <div>
            {[...props.suggestionData].map((element, index) => (
              <div
                className="suggestions"
                key={index}
                onClick={() => props.setQuery(element)}
              >
                {element}
              </div>
            ))}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default SearchBoxCard;
