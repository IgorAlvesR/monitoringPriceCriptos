import { useState, useEffect } from "react";

const ProviderPrice = ({children, cripto}) => {
  const [price, setPrice] = useState(0);
  const url = "https://www.mercadobitcoin.net/api";  
  const method = "ticker";

  async function fetchCripto() {
    const response = await fetch(`${url}/${cripto}/${method}`);
    const { ticker } = await response.json();
    setPrice(ticker.last);
  }
  useEffect(() => {
    fetchCripto();
    const intervalId = setInterval(() => {
      fetchCripto();
    }, 3000);
    return () => clearInterval(intervalId);
  }, []);

  return children(price);
};

export default ProviderPrice;
