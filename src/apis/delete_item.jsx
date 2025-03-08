import { fetchWithAuth } from "./fetch_with_auth";

const isDevelopment = import.meta.env.MODE === "development";
const API_URL = isDevelopment
  ? import.meta.env.VITE_API_BASE_URL_LOCAL
  : import.meta.env.VITE_API_BASE_URL_DEPLOY;

/**
 * ! deleteItem
 * ! IMPORTANT!
 * ! This API deletes an item using the ID in the API URL.
 * ! If you need to use a different method, such as JSON, you will need to implement it here.
 *
 *
 */
const token = sessionStorage.getItem("access");
export const deleteItem = async (id) => {
  try {
    const response = await fetchWithAuth(`${API_URL}/delete-item/${id}/`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Deletion went wrong: ${response.status}`);
    }
    console.log(`Item with the id: ${id} deleted.`);
  } catch (error) {
    console.error("Error:", error.message);
  }
};
