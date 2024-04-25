import CheckoutProductItem from "../components/CheckoutProductItem";
import Button from "../components/Button";
import { FaEuroSign } from "react-icons/fa";
import { RootState } from "../store";
import { useSelector } from "react-redux";
import Product from "../types/Product";

const getTotalPrice = (products: Product[]) => {
  let sum = 0;
  for (const product of products) {
    sum += product.price * (product.quantity || 1);
  }
  return sum.toFixed(2);
};

function CartPage() {
  const { cartProducts } = useSelector((state: RootState) => state.cart);

  const renderedProducts = cartProducts.map((product) => (
    <CheckoutProductItem key={product.id} item={product}></CheckoutProductItem>
  ));
  const headerCss = "text-3xl justify-center font-semibold flex";

  const header =
    cartProducts.length > 0 ? (
      <div className="flex flex-col">
        <h2 className={headerCss}>
          Total: <FaEuroSign className="text-xl self-center ml-2" />{" "}
          {getTotalPrice(cartProducts)}
        </h2>
        <Button primary className="self-center">
          Checkout
        </Button>
      </div>
    ) : (
      <div>
        <h2 className={headerCss}>Cart is empty</h2>
      </div>
    );
  return (
    <div className="flex flex-col items-center">
      {header}
      {renderedProducts}
    </div>
  );
}

export default CartPage;
