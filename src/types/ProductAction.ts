import type Product from "./Product";
interface ProductAction {
  payload: Product;
  type: string;
}
export default ProductAction;
