import ProductsList from "../components/ProductsList";
import { useFetchProductsQuery } from "../store";
import { useState } from "react";
import Skeleton from "../components/Skeleton";
import ActiveLink from "../components/ActiveLink";

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
        <ActiveLink to="/shop" className="mt-5 text-2xl" activeClassName="">
          Shop now!
        </ActiveLink>
      </div>
    </div>
  );
}

export default HomePage;
