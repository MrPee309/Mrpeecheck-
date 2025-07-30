
export default async function handler(req, res) {
  const { imei } = req.query;
  const apiUrl = `https://imeidb.xyz/api/${imei}`;
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching IMEI data' });
  }
}
