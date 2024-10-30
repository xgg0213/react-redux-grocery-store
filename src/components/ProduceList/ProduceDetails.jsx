import { useDispatch, useSelector } from "react-redux";
import {addItem} from '../../store/cart';
import { likeItem } from "../../store/produce";


function ProduceDetails({ produce }) {
  const dispatch = useDispatch();
  const cartItem = useSelector((state) => state.cart[produce.id]);

  const handleAdd = () => dispatch(addItem(produce.id));
  const handleLike = () => dispatch(likeItem(produce.id))

  return (
    <li className="produce-details">
      <span>{produce.name}</span>
      <span>
        <button
          onClick={handleLike}
          className={"like-button" + (produce.liked ? " selected" : "")}
        >
          <i className={"fas fa-heart"} />
        </button>
        <button
          onClick = {handleAdd}
          className={"plus-button" + (cartItem ? " selected" : "")}
        >
          <i className="fas fa-plus" />
        </button>
      </span>
    </li>
  );
}

export default ProduceDetails;
