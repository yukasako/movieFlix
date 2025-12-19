import axios from 'axios';

type ProxyParams = Record<string, string | number | undefined>;

const buildProxyUrl = (endpoint: string, params: ProxyParams = {}) => {
  const searchParams = new URLSearchParams({ endpoint });

  Object.entries(params).forEach(([key, value]) => {
    if (value === undefined || value === null || value === '') {
      return;
    }
    searchParams.append(key, String(value));
  });

  return `/api/proxy?${searchParams.toString()}`;
};

export const fetchViaProxy = async <T>(
  endpoint: string,
  params: ProxyParams = {}
): Promise<T> => {
  const url = buildProxyUrl(endpoint, params);
  const { data } = await axios.get<T>(url);
  return data;
};
