import LabelPrice from "./LabelPrice";
import ProviderPrice from "./ProviderPrice";
import styles from "../styles/Bitcoin.module.css";

const Bitcoin = () => {
  return (
    <div className={styles.bitcoin}>
      <ProviderPrice>
        {(response) => <LabelPrice price={response} />}
      </ProviderPrice>
    </div>
  );
};

export default Bitcoin;
