import { useState, useEffect } from 'react';
import { removeItem, addIncrement, addDecrement } from '../../store/cart';
import { useDispatch } from 'react-redux';

function CartItem({ item }) {
  const [count, setCount] = useState(item.count);
  const dispatch = useDispatch();

  // On click event listener. When we click the remove button we'll
	// dispatch the removeItem action and use the item's id to remove it
	// from the cart
  const handleRemove = () => dispatch(removeItem(item.id))

  // On click evnet listener. when we click the + button we'll
  // dispatch the addIncrement action and use the item's id to add increment
  const handleIncrement = () => dispatch(addIncrement(item.id))

  // On click evnet listener. when we click the - button we'll
  // dispatch the addDecrement action and use the item's id to add decrement
  const handleDecrement = () => dispatch(addDecrement(item.id))

  useEffect(() => {
    setCount(item.count);
  }, [item.count]);

  return (
    <li className="cart-item">
      <div className="cart-item-header">{item.name}</div>
      <div className="cart-item-menu">
        <input
          type="number"
          value={count}
        />
        <button
          className="cart-item-button" onClick={handleIncrement}
        >
          +
        </button>
        <button
          className="cart-item-button" onClick={handleDecrement}
        >
          -
        </button>
        <button
          className="cart-item-button" onClick={handleRemove}
        >
          Remove
        </button>
      </div>
    </li>
  );
}

export default CartItem;
