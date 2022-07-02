import React from 'react'
import {formatterToDolar} from '../utils'
import styles from '../styles/LabelPrice.module.css'

const LabelPrice = ({price}) => {
  return <span className={styles.label}>Último preço: {formatterToDolar().format(price)}</span>
}
export default LabelPrice