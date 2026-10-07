import { useSelector } from "react-redux";

function Navbar() {
  const count = useSelector(
    (state) => state.wishlist.items.length
  );

  return (
    <div>
      <h1>Course App</h1>
      <h2>Wishlist: {count}</h2>
    </div>
  );
}

export default Navbar;