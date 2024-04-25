import ProductsList from "../components/ProductsList";
import { Link } from "react-router-dom";
import { useFetchProductsQuery } from "../store";
import { useState } from "react";
import Skeleton from "../components/Skeleton";

function HomePage() {
  const { data: featuredItems, isFetching, error } = useFetchProductsQuery(4);
  const [photoLoaded, setPhotoLoaded] = useState(false);

  if (isFetching) {
    return <div></div>;
  } else if (error || !featuredItems) {
    return <div>Error fetching...</div>;
  }

  return (
    <div>
      <div className="mb-5 flex justify-center">
        <img
          src={`https://picsum.photos/seed/1/1500/500`}
          alt=""
          onLoad={() => setPhotoLoaded(true)}
        />
        {!photoLoaded && (
          <Skeleton times={1} className="h-[500px] w-[1500px]" />
        )}
      </div>

      <div className="flex flex-col items-center">
        <h2 className="text-4xl bold text-center mb-5">Featured Products</h2>
        <ProductsList products={featuredItems} />
      </div>
      <div className="flex justify-center">
        <Link to="/shop" className="mt-5 text-2xl">
          Shop now!
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
