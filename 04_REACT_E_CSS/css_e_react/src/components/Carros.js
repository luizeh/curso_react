import styles from './Carros.module.css'

const Carros = ({marca, cor, km}) => {
  return (
    <div className={styles.card}>
      <p className={styles.marca}>{marca}</p>
      <p className={styles.info}>Cor: <span>{cor}</span></p>
      <p className={styles.info}>Km: <span>{km}</span></p>
    </div>
  )
}

export default Carros
