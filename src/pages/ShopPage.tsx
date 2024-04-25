import { useState } from "react";
import ProductsList from "../components/ProductsList";
import DropDown from "../components/DropDown";
import type Product from "../types/Product";
import { useFetchProductsQuery } from "../store";
import DropdownOption from "../types/DropdownOption";

const capitalize = (str: string) => str[0].toUpperCase() + str.slice(1);

const noSortOption = { label: "Sort by...", value: null };
const noCategoryOption = { label: "All categories", value: null };

const sortingOptions = [
  noSortOption,
  {
    label: "Price ascending",
    value: (a: Product, b: Product) => a.price - b.price,
  },
  {
    label: "Price descending",
    value: (a: Product, b: Product) => b.price - a.price,
  },
  {
    label: "Name a->z",
    value: (a: Product, b: Product) => a.title.localeCompare(b.title),
  },
  {
    label: "Name z->a",
    value: (a: Product, b: Product) => -a.title.localeCompare(b.title),
  },
];

function ShopPage() {
  const { data: products, isFetching, error } = useFetchProductsQuery(20);

  const [sortSelection, setSortSelection] =
    useState<DropdownOption<(a: Product, b: Product) => number>>(noSortOption);
  const [categorySelection, setCategorySelection] =
    useState<DropdownOption<string>>(noCategoryOption);

  // get all categories
  const categories = [...new Set(products?.map((p: Product) => p.category))];
  categories.sort((a, b) => a.localeCompare(b));

  const categoriesOptions = [
    noCategoryOption,
    ...categories.map((c) => {
      return { label: capitalize(c), value: c };
    }),
  ];

  let transformedProducts = products ? [...products] : [];

  if (categorySelection?.value) {
    transformedProducts = transformedProducts.filter(
      (product) => product.category === categorySelection.value
    );
  }
  if (sortSelection?.value) {
    transformedProducts.sort(sortSelection.value);
  }

  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-center">
        <DropDown
          options={sortingOptions}
          value={sortSelection}
          onChange={(option) => setSortSelection(option)}
        ></DropDown>
        <DropDown
          options={categoriesOptions}
          value={categorySelection}
          onChange={setCategorySelection}
        ></DropDown>
      </div>
      <ProductsList products={transformedProducts} />
    </div>
  );
}

export default ShopPage;
