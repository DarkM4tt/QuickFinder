import { useEffect, useState } from "react";
import { ProductData, ProductType } from "../../helpers/fakerData";
import SingleProduct from "../../components/SingleProduct";
import SearchIcon from "../../assets/svg/magnifying-glass-solid.svg";
import Logo from "../../components/Logo";
import "./Search.scss";

const Search = () => {
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    setProducts(ProductData);
  }, []);

  return (
    <div className="search-page">
      {/* Header */}
      <div className="search-header">
        <div className="search-box">
          <input
            placeholder="Search"
            // value={query}
            // onChange={(e) => setQuery(e.target.value)}
          />
          <button>
            <img src={SearchIcon} alt="search" />
          </button>
        </div>
        <Logo />
      </div>
    </div>
  );
};

export default Search;
