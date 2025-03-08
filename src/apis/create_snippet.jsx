import { fetchWithAuth } from "./fetch_with_auth";

const isDevelopment = import.meta.env.MODE === "development";
const API_URL = isDevelopment
  ? import.meta.env.VITE_API_BASE_URL_LOCAL
  : import.meta.env.VITE_API_BASE_URL_DEPLOY;



export const CreateSnippet = async (url) => {
  try {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    };

    //if (SnippetData) {
    //  options.body = JSON.stringify(SnippetData);
    //}

    const response = await fetchWithAuth(`${API_URL}/${url}`, options);

    if (!response.ok) {
      let errorData;
      try {
        errorData = await response.json();
      } catch (e) {
        errorData = { message: "Serverfehler, kein JSON erhalten" };
      }
      throw new Error(errorData?.message || "Something went wrong");
    }

    const data = await response.json();
    console.log("successful:", data);
  } catch (error) {
    console.error("Error:", error.message);
    throw error;
  }
};
