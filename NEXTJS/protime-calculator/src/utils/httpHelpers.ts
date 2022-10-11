/**
 * It takes a RequestInfo and returns a Promise of a generic type
 * @param {RequestInfo} request - RequestInfo
 * @returns A promise that resolves to a value of type T.
 */
export const typedHttp = async function http<T>(
  request: RequestInfo
): Promise<T> {
  const response = await fetch(request);
  const body = await response.json();
  return body;
};

/**
 * It takes a RequestInfo object and returns a Promise that resolves to the body of the response
 * @param {RequestInfo} request - RequestInfo
 * @returns The function http is being returned.
 */
export const http = async function http(request: RequestInfo): Promise<any> {
  const response = await fetch(request);
  const body = response.json;
  return body;
};
