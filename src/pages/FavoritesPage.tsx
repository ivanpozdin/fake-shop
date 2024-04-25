import ProductsList from "../components/ProductsList";
import { useSelector } from "react-redux";
import { RootState } from "../store";

function FavoritesPage() {
  const { likedProducts } = useSelector((state: RootState) => state.favorites);

  const header = (
    <h2 className="text-3xl justify-center font-semibold flex ">
      {likedProducts.length > 0 ? "Favorites" : "Favorites is empty"}
    </h2>
  );

  return (
    <div className="flex flex-col items-center">
      {header}
      <ProductsList products={likedProducts} />
    </div>
  );
}
export default FavoritesPage;
