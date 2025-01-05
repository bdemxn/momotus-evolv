import CreateCategoryBtn from "./CreateCategoryBtn";
import CreateItemBtn from "./CreateItemBtn";

const ButtonsGroup = () => {
  return (
    <div className="flex gap-x-2 w-full">
      <CreateItemBtn />
      <CreateCategoryBtn />
    </div>
  );
};

export default ButtonsGroup;
