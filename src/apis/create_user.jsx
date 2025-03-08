const isDevelopment = import.meta.env.MODE === "development";
const API_URL = isDevelopment
  ? import.meta.env.VITE_API_BASE_URL_LOCAL
  : import.meta.env.VITE_API_BASE_URL_DEPLOY;
export const createUser = async (registerData) => {
  try {
    const response = await fetch(`${API_URL}/create-user/`, {  
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(registerData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData?.message || "Something went wrong");
    }

    const data = await response.json();
    console.log("User creation succeeded:", data);
  } catch (error) {
    console.error("Error:", error.message);
    throw error;
  }
};