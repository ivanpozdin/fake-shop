import { FaEuroSign } from "react-icons/fa";
import Button from "./Button";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import type Product from "../types/Product";
import { toggleLikeProduct } from "../store/index";
import { toggleCartProduct } from "../store/index";
import useProductLikedInCart from "../hooks/useProductLikedInCart";
import { useDispatch } from "react-redux";

const wrapTitle = function (title: string) {
  if (title.length <= 40) return title;
  return title.slice(0, 38) + "...";
};

interface ProductIemProps {
  item: Product;
}

function ProductItem({ item }: ProductIemProps) {
  const { isProductLiked, isProductInCart } = useProductLikedInCart();
  const dispatch = useDispatch();

  const productInCart = isProductInCart(item);

  return (
    <div className="shadow p-5 lg:p-10 flex flex-col justify-end items-center">
      <div>
        <img src={item.image} alt={item.title} className="max-h-56 max-w-48" />
      </div>
      <div className="">
        <p className="flex gap-1 items-center">
          {item.price.toFixed(2)}
          <FaEuroSign />
        </p>
        <h3 className="w-48">{wrapTitle(item.title)}</h3>
        <div className="flex justify-center mt-5">
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
    </div>
  );
}

export default ProductItem;
