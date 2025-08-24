import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../store/cartSlice'; 
import styles from './PlantCard.module.css';

const PlantCard = ({ plant }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const isInCart = cartItems.some(item => item.id === plant.id);

  const handleAddToCart = () => {
    if (!isInCart) {
      dispatch(addToCart(plant));
    }
  };

  return (
    <div className={styles.card}>
      <img src={plant.image} alt={plant.name} className={styles.image} />
      <div className={styles.info}>
        <h3 className={styles.name}>{plant.name}</h3>
        <p className={styles.description}>{plant.description}</p>
        <p className={styles.price}>${plant.price.toFixed(2)}</p>
        <button
          onClick={handleAddToCart}
          disabled={isInCart}
          className={isInCart ? styles.disabledButton : styles.button}
        >
          {isInCart ? 'Added' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
};

export default PlantCard;


