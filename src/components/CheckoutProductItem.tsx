import { FaEuroSign } from "react-icons/fa";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import Button from "./Button";
import QuantityInput from "./QuantityInput";
import classNames from "classnames";
import type Product from "../types/Product";
import { toggleLikeProduct, toggleCartProduct } from "../store/index";
import useProductLikedInCart from "../hooks/useProductLikedInCart";
import { useDispatch } from "react-redux";

function CheckoutProductItem({ item }: { item: Product }) {
  const { isProductLiked, isProductInCart } = useProductLikedInCart();
  const dispatch = useDispatch();

  const productInCart = isProductInCart(item);
  const price = (item.price * (item.quantity || 1)).toFixed(2);

  const gridCss = classNames(
    "shadow p-10 gap-5 max-w-screen-lg grid grid-cols-1",
    "md:grid-cols-2",
    "lg:grid-cols-[auto_minmax(300px,_1fr)_auto]"
  );

  const nameDescriptionCss = classNames(
    "gap-5",
    "md:col-start-1 md:col-end-3",
    "lg:col-start-2 lg:col-end-3 lg:row-start-1"
  );

  return (
    <div className={gridCss}>
      <div className="">
        <img src={item.image} alt={item.title} className="max-h-56 max-w-48" />
      </div>

      <div className="">
        <p className="flex gap-1 items-center">
          {price}
          <FaEuroSign />
        </p>

        <QuantityInput item={item} />

        <div className="flex justify-start mt-5">
          <Button
            danger={productInCart}
            outline={productInCart}
            primary={!productInCart}
            onClick={() => dispatch(toggleCartProduct(item))}
          >
            {isProductInCart(item) ? "Remove" : "Add to cart"}
          </Button>
          <Button onClick={() => dispatch(toggleLikeProduct(item))}>
            {isProductLiked(item) ? <MdFavorite /> : <MdFavoriteBorder />}
          </Button>
        </div>
      </div>

      <div className={nameDescriptionCss}>
        <h3 className="font-bold">{item.title}</h3>
        <p>{item.description}</p>
      </div>
    </div>
  );
}

export default CheckoutProductItem;
