import CleanShopBtn from "./clean-shop-btn";
import CreateSaleBtn from "./create-sale-btn";

const ButtonsGroup = () => {
  return (
    <div className="flex gap-x-2 w-full">
      <CreateSaleBtn />
      <CleanShopBtn />
    </div>
  );
};

export default ButtonsGroup;
