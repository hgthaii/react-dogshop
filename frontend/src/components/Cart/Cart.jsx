import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../Contexts/CartContext";
import "./cart.css";

const Cart = () => {
  const { myCart, total, addToCart, setTotal } = useContext(CartContext);
  const handleCheckout = () => {
    setTotal(0);
    addToCart([{}]);
  };
  const navigate = useNavigate();
  const handleHome = () => {
    navigate("/");
  };

  return (
    <>
      <div className="cart-container">
        <div className="cart-header">CHECKOUT: </div>
        <div className="cart-items">
          {myCart.slice(1).map((item) => {
            return (
              <div className="cart-item">
                <img src={item.imageUrl} alt="" className="cart-item-img" />
                {item.name} : {item.price}$
              </div>
            );
          })}
          <div className="cart-total">TOTAL: {total}$</div>
        </div>
        <button className="cart-checkout" onClick={handleCheckout}>
          DONE
        </button>
        <button className="cart-gohome" onClick={handleHome}>
          RETURN HOME
        </button>
      </div>
    </>
  );
};

export default Cart;
