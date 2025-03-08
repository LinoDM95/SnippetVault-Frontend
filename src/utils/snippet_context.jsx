import { createContext, useState, useEffect, useContext } from "react";
import { getData } from "../apis/get_api";
import { AuthContext } from "./auth_context";

export const SnippetContext = createContext();

export const SnippetProvider = ({ children }) => {
  const { user } = useContext(AuthContext);
  const [userData, setUserData] = useState([]);

  /**
   * ! Fetch Snippets from API
   */
  const fetchSnippets = async () => {
    if (!user) return;

    const data = await getData("get-all-snippets", user.id);
    if (data) {
      setUserData(data);
    }
  };

  /**
   * ! Initial fetch when component mounts & user changes
   */
  useEffect(() => {
    if (user) fetchSnippets();
  }, [user]);

  /**
   * ! Refresh function to manually reload snippets
   */
  const refreshSnippets = () => {
    fetchSnippets();
  };


  return (
    <SnippetContext.Provider value={{ userData, refreshSnippets }}>
      {children}
    </SnippetContext.Provider>
  );
};
