import { useContext, useEffect } from "react";
import { SearchContext } from "../../../utils/searchbar_context";
import { IoIosSearch } from "react-icons/io";

function GlobSearchInput() {
  const { globSearchField, setGlobSearchField } = useContext(SearchContext);

  return (
    <div className="relative w-30 sm:w-50 md:w-90 lg:w-full max-w-md">
      <input
        value={globSearchField}
        onChange={(e) => setGlobSearchField(e.target.value)}
        placeholder="Suche..."
        className="w-full pl-10 pr-4 py-2 bg-white text-black placeholder:text-primary border-outline-ui border-2 rounded-full shadow-sm focus:outline-none focus:shadow-lg focus:placeholder-black hover:shadow-lg hover:placeholder-black"
      />
      <IoIosSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary text-xl" />
    </div>
  );
}

export default GlobSearchInput;
