import { useDispatch } from "react-redux";
import { updateQuantity } from "../store";
import type Product from "../types/Product";
import Button from "./Button";
import classNames from "classnames";

function QuantityInput({ item }: { item: Product }) {
  const changeQuantityBtnClass = classNames(
    "hover:bg-slate-50 active:bg-slate-100"
  );

  const dispatch = useDispatch();

  return (
    <div className="flex flex-col mt-5">
      <label htmlFor="quantity" className="">
        Choose quantity:
      </label>
      <div className="flex">
        <Button
          onClick={() => {
            if (item?.quantity == 1) return;
            const newQuantity = item.quantity ? item.quantity - 1 : 1;
            dispatch(updateQuantity({ product: item, newQuantity }));
          }}
          className={changeQuantityBtnClass}
        >
          -
        </Button>
        <input
          type="number"
          id="quantity"
          min={1}
          max={10}
          value={item?.quantity || 1}
          onChange={(e) => {
            const newQuantity = parseInt(e.target.value);
            dispatch(updateQuantity({ product: item, newQuantity }));
          }}
          className="border text-center self-stretch max-w-14"
        />
        <Button
          onClick={() => {
            if (item?.quantity == 10) return;
            const newQuantity = item.quantity ? item.quantity + 1 : 1;
            dispatch(updateQuantity({ product: item, newQuantity }));
          }}
          className={changeQuantityBtnClass}
        >
          +
        </Button>
      </div>
    </div>
  );
}

export default QuantityInput;
