export const post = async (url, params = {}, isFileUpload = false) => {
  const headers = isFileUpload ? {} : { "Content-Type": "application/json" };
  const body = isFileUpload ? params : JSON.stringify(params);

  try {
    const response = await fetch(url, {
      method: "POST",
      headers,
      body,
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || `HTTP Error! Status: ${response.status}`);
    }

    return data;
  } catch (error) {
    console.error("POST request failed:", error);
    throw error;
  }
};
