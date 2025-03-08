/**
 * ! fetchWithauth is a generic API and a util fetch for other api´s
 * ! IMPORTANT!
 * ! An API that requires a token must be called via fetchWithAuth
 * 
 * This API checks whether a JWT token has been stored in the current session.
 * If the response fails, it looks for a refresh token.
 * If either token is present, the API call can proceed; otherwise, the user is redirected to the login page.
 * 
 * ? example of an api with token:
 * 
const isDevelopment = import.meta.env.MODE === "development";
const API_URL = isDevelopment
  ? import.meta.env.VITE_API_BASE_URL_LOCAL
  : import.meta.env.VITE_API_BASE_URL_DEPLOY;
  export const createPost = async (exampleData1, exampleData2) => {
  try {
    const response = await fetchWithAuth(`${API_URL}/url/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ exampleData1, exampleData2 }),
    });

    if (!response.ok) throw new Error("example error");

    const data = await response.json();
    console.log("example message:", data);
  } catch (error) {
    console.error("Error:", error.message);
  }
};
 */

export const fetchWithAuth = async (url, options = {}) => {
  const isDevelopment = import.meta.env.MODE === "development";
  const API_URL = isDevelopment
    ? import.meta.env.VITE_API_BASE_URL_LOCAL
    : import.meta.env.VITE_API_BASE_URL_DEPLOY;
  let accessToken = sessionStorage.getItem("access");

  let response = await fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (response.status === 401) {
    const refreshToken = sessionStorage.getItem("refresh");

    const refreshResponse = await fetch(`${API_URL}/api/token/refresh/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ refresh: refreshToken }),
    });

    if (refreshResponse.ok) {
      const refreshData = await refreshResponse.json();
      sessionStorage.setItem("access", refreshData.access);
      return fetchWithAuth(url, options);
    } else {
      sessionStorage.removeItem("access");
      sessionStorage.removeItem("refresh");
      window.location.href = "/";
    }
  }
  return response;
};
