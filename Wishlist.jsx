import { useSelector, useDispatch } from "react-redux";
import { removeCourse } from "../Features/Wishlist/WishlistSlice";

function Wishlist() {
  const dispatch = useDispatch();

  const items = useSelector(
    (state) => state.wishlist.items
  );

  return (
    <div>
      <h2>Wishlist</h2>

      {items.map((item) => (
        <div key={item.id}>
          {item.title}

          <button
            onClick={() =>
              dispatch(removeCourse(item.id))
            }
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}

export default Wishlist;