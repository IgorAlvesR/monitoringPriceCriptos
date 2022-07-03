import { formatterToDolar } from "../utils";
import styles from "../styles/LabelPrice.module.css";

const LastPrice = ({ price, cripto }) => {
  return (
    <p className={styles.label}>
      Último preço de {cripto}: {formatterToDolar().format(price)}
    </p>
  );
};
export default LastPrice;
