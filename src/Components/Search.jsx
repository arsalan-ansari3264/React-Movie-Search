import { useGlobalContext } from "../Context";
import "../Style/Search.css";

import { IoSearchOutline } from "react-icons/io5";
const Search = () => {
  const { query, setQuery } = useGlobalContext();

  return (
    <>
      <div className="search-container">
        <div className="search">
          <div className="icon">
            <IoSearchOutline />
          </div>
          <form action="#" onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search Movie Here..."
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default Search;
