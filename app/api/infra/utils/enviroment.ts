export const getBaseUrl = () => {
  return process.env.NODE_ENV === 'development' ? `http://localhost:3000` : `https://www.programadoresdoamanha.com.br`
}
