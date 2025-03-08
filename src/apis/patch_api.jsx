import { fetchWithAuth } from "./fetch_with_auth";

const isDevelopment = import.meta.env.MODE === "development";
const API_URL = isDevelopment
  ? import.meta.env.VITE_API_BASE_URL_LOCAL
  : import.meta.env.VITE_API_BASE_URL_DEPLOY;
export const PatchAPI = async (url, data) => {
  console.log(url, data);
  try {
    const response = await fetchWithAuth(`${API_URL}/${url}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) throw new Error("example error");

    const responseData = await response.json();

    return responseData;
    console.log(responseData);
  } catch (error) {
    console.error("Error:", error.message);
  }
};
