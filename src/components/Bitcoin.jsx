import LastPrice from "./LastPrice";
import ProviderPrice from "../providers/ProviderPrice";
import styles from "../styles/Bitcoin.module.css";

const Bitcoin = () => {
  const criptos = {
    btc: 'BTC',
    eth: 'ETH'
  }
  
  return (
    <div className={styles.bitcoin}>
      <ProviderPrice cripto={criptos.btc}>
        {(response) => <LastPrice  cripto={criptos.btc} price={response} />}
      </ProviderPrice>

      <ProviderPrice cripto={criptos.eth}>
        {(response) => <LastPrice cripto={criptos.eth} price={response} />}
      </ProviderPrice>
    </div>
  );
};

export default Bitcoin;
