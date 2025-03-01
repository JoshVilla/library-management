import { IApiResponse, IServiceParams } from "./types";

export const post = async <T>(
  url: string,
  params: IServiceParams | FormData = {},
  isFileUpload: boolean = false
): Promise<IApiResponse<T>> => {
  const headers: HeadersInit = isFileUpload ? {} : { "Content-Type": "application/json" };
  const body: string | FormData = isFileUpload 
    ? (params as FormData) 
    : JSON.stringify(params as IServiceParams);

  try {
    const response = await fetch(url, {
      method: "POST",
      headers,
      body,
    });

    const data: IApiResponse<T> = await response.json();

    if (!response.ok) {
      throw new Error(data.error || `HTTP Error! Status: ${response.status}`);
    }

    return data;
  } catch (error) {
    console.error("POST request failed:", error);
    throw error;
  }
}; 