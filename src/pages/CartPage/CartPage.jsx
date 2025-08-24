import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart, addToCart, decreaseQuantity } from '../../store/cartslice';
import Header from '../../components/Header/Header';
import styles from './CartPage.module.css';
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const handleIncrease = (item) => {
    dispatch(addToCart(item));
  };

  const handleDecrease = (item) => {
    if (item.quantity > 1) {
      dispatch(decreaseQuantity({ id: item.id }));
    }
  };

  const handleRemove = (id) => {
    dispatch(removeFromCart({ id }));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const Navigate = useNavigate();

  return (
    <>
      <Header />
      <div className={styles.container}>
        <h2>Your Shopping Cart</h2>
        <div className={styles.summary}>
          <p><strong>Total Plants:</strong> {totalItems}</p>
          <p><strong>Total Cost:</strong> ${totalPrice.toFixed(2)}</p>
        </div>
        <div className={styles.actions}>
          <button className={styles.continue} onClick={() => Navigate('/products')}>Continue Shopping</button>
          <button className={styles.checkout} onClick={() => alert('Checkout coming soon!')}>Checkout</button>
        </div>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul className={styles.cartList}>
            {cartItems.map(item => (
              <li key={item.id} className={styles.cartItem}>
                <img src={item.image} alt={item.name} className={styles.thumbnail} />
                <div className={styles.details}>
                  <h3>{item.name}</h3>
                  <p>Unit Price: ${item.price.toFixed(2)}</p>
                  <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
                  <div className={styles.quantityControls}>
                    <button onClick={() => handleDecrease(item)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => handleIncrease(item)}>+</button>
                  </div>
                  <button onClick={() => handleRemove(item.id)} className={styles.removeButton}>
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
        {cartItems.length > 0 && (
          <button onClick={handleClearCart} className={styles.clearButton}>
            Clear Cart
          </button>
        )}
      </div>
    </>
  );
};

export default CartPage;


