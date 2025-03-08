/**
 * Simple get request as an generic fetch
 */

const isDevelopment = import.meta.env.MODE === "development";
const API_URL = isDevelopment
  ? import.meta.env.VITE_API_BASE_URL_LOCAL
  : import.meta.env.VITE_API_BASE_URL_DEPLOY;
export const getData = async (url, user_id = null) => {
  try {
    const fullUrl = user_id ? `${API_URL}/${url}/${user_id}` : `${API_URL}/${url}`;
    const response = await fetch(fullUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) throw new Error("example error");

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error:", error.message);
  }
};