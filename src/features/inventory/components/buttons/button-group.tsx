import CreateCategoryBtn from "./create-category-btn";
import CreateItemBtn from "./create-item-btn";

const ButtonsGroup = () => {
  return (
    <div className="flex gap-x-2 w-full">
      <CreateItemBtn />
      <CreateCategoryBtn />
    </div>
  );
};

export default ButtonsGroup;
