import { useState, useEffect } from "react";

const ProviderPrice = (props) => {
  const [priceBtc, setPriceBtc] = useState(0);
  const url = "https://www.mercadobitcoin.net/api";
  const endpoint = "BTC";
  const method = "ticker";

  async function fetchCripto() {
    const response = await fetch(`${url}/${endpoint}/${method}`);
    const { ticker } = await response.json();
    setPriceBtc(ticker.last);
  }
  useEffect(() => {
    fetchCripto();
    const intervalId = setInterval(() => {
      fetchCripto();
    }, 3000);
    return () => clearInterval(intervalId);
  }, []);

  return props.children(priceBtc);
};

export default ProviderPrice;
