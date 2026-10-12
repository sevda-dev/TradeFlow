const API_URL = "http://192.168.26.129:8000/api/v1";

export async function createQuote(data) {
  const response = await fetch(`${API_URL}/quotes/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(JSON.stringify(result));
  }

  return result;
}
