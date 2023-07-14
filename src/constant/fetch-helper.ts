export async function get<T>(url: RequestInfo | URL): Promise<T> {
  const requestOptions = {
    method: "GET",
  };
  const response = await fetch(url, requestOptions);
  return await handleResponse<T>(response);
}

export async function post<T, R>(url: RequestInfo | URL, body: T): Promise<R> {
  const requestOptions: RequestInit = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  };
  const response = await fetch(url, requestOptions);

  return await handleResponse<R>(response);
}

export async function put<T, R>(url: RequestInfo | URL, body: T): Promise<R> {
  const requestOptions: RequestInit = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  };
  const response = await fetch(url, requestOptions);
  return await handleResponse<R>(response);
}

// prefixed with underscored because delete is a reserved word in javascript
export async function _delete<T>(url: RequestInfo | URL): Promise<T> {
  const requestOptions = {
    method: "DELETE",
  };
  const response = await fetch(url, requestOptions);
  return await handleResponse<T>(response);
}

// helper export async functions

export async function handleResponse<T>(response: Response): Promise<T> {
  const text = await response.text();
  const data = text && JSON.parse(text);
  if (!response.ok) {
    return Promise.reject(data);
  }
  return data;
}
