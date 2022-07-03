import LastPrice from "./LastPrice";
import ProviderPrice from "../providers/ProviderPrice";
import styles from "../styles/Bitcoin.module.css";

const Bitcoin = () => {
  return (
    <div className={styles.bitcoin}>
      <ProviderPrice>
        {(response) => <LastPrice price={response} />}
      </ProviderPrice>
    </div>
  );
};

export default Bitcoin;
