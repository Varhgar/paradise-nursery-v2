import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import { useSelector, useDispatch } from 'react-redux';

const Header = () => {
  // const totalCount = 0;
  const cartItems = useSelector(state => state.cart.items);
  const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);


  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to="/">🌿 Paradise Nursery</Link>
      </div>
      <nav className={styles.nav}>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart" className={styles.cart}>
          🛒 <span className={styles.count}>{totalCount}</span>
        </Link>
      </nav>
    </header>
  );
};

export default Header;

