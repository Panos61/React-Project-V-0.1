let API_ROUTE;

process.env.NODE_ENV === 'development'
  ? (API_ROUTE = 'http://localhost:3000')
  : (API_ROUTE = null);

export default API_ROUTE;
