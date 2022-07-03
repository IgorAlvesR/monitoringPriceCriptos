import LastPrice from "./LastPrice";
import ProviderPrice from "../providers/ProviderPrice";
import styles from "../styles/MonitoringCriptosPrice.module.css";

const MonitoringCriptosPrice = () => {
  const criptos = {
    btc: 'BTC',
    eth: 'ETH'
  }
  
  return (
    <div className={styles.monitoringCriptosPrice}>
      <ProviderPrice cripto={criptos.btc}>
        {(response) => <LastPrice  cripto={criptos.btc} price={response} />}
      </ProviderPrice>

      <ProviderPrice cripto={criptos.eth}>
        {(response) => <LastPrice cripto={criptos.eth} price={response} />}
      </ProviderPrice>
    </div>
  );
};

export default MonitoringCriptosPrice;
