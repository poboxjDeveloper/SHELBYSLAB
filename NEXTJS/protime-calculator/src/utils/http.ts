const typedHttp = async function http<T>(request: RequestInfo): Promise<T> {
  const response = await fetch(request);
  const body = await response.json();
  return body;
};

const http = async function http(request: RequestInfo): Promise<any> {
  const response = await fetch(request);
  const body = await response;
  return body;
};

const CATEGORY_ID_HOLIDAY = 1687;

export { typedHttp, http };
