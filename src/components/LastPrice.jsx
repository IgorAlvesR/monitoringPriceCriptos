import { formatterToDolar } from "../utils";
import styles from "../styles/LabelPrice.module.css";

const LastPrice = ({ price }) => {
  return (
    <span className={styles.label}>
      Último preço: {formatterToDolar().format(price)}
    </span>
  );
};
export default LastPrice;
