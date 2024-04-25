import { useSelector } from "react-redux";
import type { RootState } from "../store/index";
import type Product from "../types/Product";

function useProductLikedInCart(): {
  isProductInCart: (product: Product) => boolean;
  isProductLiked: (product: Product) => boolean;
} {
  const { likedProducts } = useSelector((state: RootState) => state.favorites);
  const { cartProducts } = useSelector((state: RootState) => state.cart);

  const isProductLiked = (product: Product): boolean => {
    return Boolean(likedProducts.find((p) => p.id === product.id));
  };

  const isProductInCart = (product: Product): boolean => {
    return Boolean(cartProducts.find((p) => p.id === product.id));
  };
  return { isProductInCart, isProductLiked };
}

export default useProductLikedInCart;
