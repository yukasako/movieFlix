// api/proxy.js
const TMDB_BASE_URL = 'https://api.themoviedb.org/3/';

module.exports = async (req, res) => {
  try {
    const { endpoint, ...rest } = req.query ?? {};

    if (!endpoint || Array.isArray(endpoint)) {
      res.status(400).json({ error: 'Missing endpoint parameter.' });
      return;
    }

    const apiKey = process.env.TMDB_API_KEY;
    if (!apiKey) {
      res.status(500).json({ error: 'TMDB_API_KEY is not configured.' });
      return;
    }

    const targetUrl = new URL(endpoint, TMDB_BASE_URL);

    Object.entries(rest).forEach(([key, value]) => {
      if (value === undefined || value === null || value === '') return;
      if (Array.isArray(value)) return; // 念のため
      targetUrl.searchParams.append(key, String(value));
    });

    targetUrl.searchParams.set('api_key', apiKey);

    const upstream = await fetch(targetUrl.toString(), {
      headers: { Accept: 'application/json' },
    });

    const data = await upstream.json();
    res.status(upstream.status).json(data);
  } catch (err) {
    console.error('Proxy error', err);
    res.status(500).json({ error: 'Proxy request failed.' });
  }
};
