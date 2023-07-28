import { useEffect, useState } from "react";
import { ProductData, ProductType } from "../../helpers/fakerData";
import SingleProduct from "../../components/SingleProduct";
import Logo from "../../components/Logo";
import ArrowUpSVG from "../../assets/svg/angle-up-solid.svg";
import ArrowDownSVG from "../../assets/svg/angle-down-solid.svg";
import SearchIcon from "../../assets/svg/magnifying-glass-solid.svg";
import "./Search.scss";

type SearchResultsSectionPropsType = {
  productData: ProductType[];
  searchQuery: string;
};

type FilterType = {
  rating: boolean[];
  price: boolean[];
};

type ExpandFilterType = {
  rating: boolean;
  price: boolean;
};

const Search = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [filteredData, setFilteredData] = useState<ProductType[]>([]);
  const [filters, setFilters] = useState<FilterType>({
    rating: [false, false, false, false, false],
    price: [false, false, false],
  });
  // const [displayData, setDisplayData] = useState<ProductType[]>(props.productData);
  const [displayData, setDisplayData] = useState<ProductType[]>([]);
  const [expandFilter, setExpandFilter] = useState<ExpandFilterType>({
    rating: true,
    price: true,
  });

  useEffect(() => {
    setProducts(ProductData);
    // setFilteredData(props.productData);
    setDisplayData(products);
    setFilteredData(products);
    const newFilterData: ProductType[] = [];
    for (let i = 0; i < filters.rating.length; i++) {
      if (filters.rating[i]) {
        filteredData.forEach((element) => {
          if (element.rating === i + 1) {
            newFilterData.push(element);
          }
        });
      }
    }

    // Price comparisons
    if (filters.price[0]) {
      filteredData.forEach((element) => {
        if (Number(element.discountedPrice) < 500) {
          newFilterData.push(element);
        }
      });
    } else if (filters.price[1]) {
      filteredData.forEach((element) => {
        if (
          Number(element.discountedPrice) >= 500 &&
          Number(element.discountedPrice) <= 2000
        ) {
          newFilterData.push(element);
        }
      });
    } else if (filters.price[2]) {
      filteredData.forEach((element) => {
        if (Number(element.discountedPrice) > 2000) {
          newFilterData.push(element);
        }
      });
    }
    setDisplayData(newFilterData);
  }, [filters]);

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

      {/* Body */}
      <div className="search-body">
        <div className="search-filters">
          <p>Search Results</p>
          <div>
            <div className="filter-section">
              {/* Price Filter */}
              <div className="filter-header">
                <div>PRICE RANGE</div>
                <img
                  onClick={() =>
                    setExpandFilter({
                      ...expandFilter,
                      price: !expandFilter.price,
                    })
                  }
                  src={expandFilter.price ? ArrowUpSVG : ArrowDownSVG}
                  alt="show/hide"
                />
              </div>
              <div className={!expandFilter.price ? "hide" : "show"}>
                <ul>
                  <li>
                    <input
                      type="checkbox"
                      onChange={() => {
                        const newFilters = [...filters.price];
                        newFilters[0] = !newFilters[0];
                        setFilters({ ...filters, price: newFilters });
                      }}
                    />
                    <div className="content">Under 500</div>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      onChange={() => {
                        const newFilters = [...filters.price];
                        newFilters[1] = !newFilters[1];
                        setFilters({ ...filters, price: newFilters });
                      }}
                    />
                    <div className="content">500 to 2000</div>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      onChange={() => {
                        const newFilters = [...filters.price];
                        newFilters[2] = !newFilters[2];
                        setFilters({ ...filters, price: newFilters });
                      }}
                    />
                    <div className="content">Above 2000</div>
                  </li>
                </ul>
              </div>

              {/* Ratings Filter */}
              <div className="filter-header">
                <div>RATINGS</div>
                <img
                  onClick={() =>
                    setExpandFilter({
                      ...expandFilter,
                      rating: !expandFilter.rating,
                    })
                  }
                  src={expandFilter.rating ? ArrowUpSVG : ArrowDownSVG}
                  alt="show/hide"
                />
              </div>
              <div className={!expandFilter.rating ? "hide" : "show"}>
                <ul>
                  <li>
                    <input
                      type="checkbox"
                      onChange={() => {
                        const newFilters = [...filters.rating];
                        newFilters[4] = !newFilters[4];
                        setFilters({ ...filters, rating: newFilters });
                      }}
                    />
                    <div className="rating-div">★★★★★</div>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      onChange={() => {
                        const newFilters = [...filters.rating];
                        newFilters[3] = !newFilters[3];
                        setFilters({ ...filters, rating: newFilters });
                      }}
                    />
                    <div className="rating-div">★★★★☆</div>
                  </li>

                  <li>
                    <input
                      type="checkbox"
                      onChange={() => {
                        const newFilters = [...filters.rating];
                        newFilters[2] = !newFilters[2];
                        setFilters({ ...filters, rating: newFilters });
                      }}
                    />
                    <div className="rating-div">★★★☆☆</div>
                  </li>

                  <li>
                    <input
                      type="checkbox"
                      onChange={() => {
                        const newFilters = [...filters.rating];
                        newFilters[1] = !newFilters[1];
                        setFilters({ ...filters, rating: newFilters });
                      }}
                    />
                    <div className="rating-div">★★☆☆☆</div>
                  </li>

                  <li>
                    <input
                      type="checkbox"
                      onChange={() => {
                        const newFilters = [...filters.rating];
                        newFilters[0] = !newFilters[0];
                        setFilters({ ...filters, rating: newFilters });
                      }}
                    />
                    <div className="rating-div">★☆☆☆☆</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="search-products"></div>
      </div>
    </div>
  );
};

export default Search;
