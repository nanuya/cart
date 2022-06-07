import {
  QueryClient,
} from 'react-query';

const BASE_URL = 'https://fakestoreapi.com';

export const getClient = (() => {
  let client: QueryClient | null = null;
  return () => {
    if (!client) client = new QueryClient();
    return client
  }
})();

export const fetcher = async({
  method,
  path,
  body,
  params
}: {
    method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
    path: string;
    body?: { [key: string]: any }
    params?: { [key: string]: any }
}) => {
  try {
    const url = `${BASE_URL}${path}`;
    const fetchOptions: RequestInit = {
      method,
      headers: {
        'Content-type': 'application/json',
        'Access-Controll-Allow-Origin': BASE_URL
      }
    }
    const res = await fetch(url, fetchOptions);
    const json = await res.json();
    return json
  } catch (err) {
    console.error(err);
  }
}

export const QueryKeys = {
  PRODUCTS: 'PRODUCTS'
}

