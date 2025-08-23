import styles from './PlantCard.module.css';

const PlantCard = ({ plant }) => {
  return (
    <div className={styles.card}>
      <img src={plant.image} alt={plant.name} className={styles.image} />
      <div className={styles.info}>
        <h3 className={styles.name}>{plant.name}</h3>
        <p className={styles.description}>{plant.description}</p>
        <p className={styles.price}>${plant.price.toFixed(2)}</p>
        <button className={styles.button}>Add to Cart</button>
      </div>
    </div>
  );
};

export default PlantCard;

