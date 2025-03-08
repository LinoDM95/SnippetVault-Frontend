import { createContext, useEffect, useState } from "react";

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [globSearchField, setGlobSearchField] = useState("");

  return (
    <SearchContext.Provider value={{ globSearchField, setGlobSearchField }}>
      {children}
    </SearchContext.Provider>
  );
};
