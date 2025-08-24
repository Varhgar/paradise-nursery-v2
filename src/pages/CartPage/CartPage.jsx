import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart } from '../../store/cartslice';
import styles from './CartPage.module.css';

const CartPage = () => {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeFromCart({ id }));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className={styles.container}>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className={styles.cartList}>
            {cartItems.map(item => (
              <li key={item.id} className={styles.cartItem}>
                <div>
                  <strong>{item.name}</strong> — ${item.price.toFixed(2)} × {item.quantity}
                </div>
                <button onClick={() => handleRemove(item.id)} className={styles.removeButton}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className={styles.total}>
            <strong>Total:</strong> ${totalPrice.toFixed(2)}
          </div>
          <button onClick={handleClearCart} className={styles.clearButton}>
            Clear Cart
          </button>
        </>
      )}
    </div>
  );
};

export default CartPage;

