import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useFormikContext } from "formik";
import { CategoryListInterface } from "../../types/category.interface";

const SelectCategory = ({ categoryList }: CategoryListInterface) => {
  const { setFieldValue } = useFormikContext();

  return (
    <Select onValueChange={(value) => setFieldValue("category", value)}>
      <SelectTrigger className="font-inter">
        <SelectValue placeholder="Categoría" />
      </SelectTrigger>
      <SelectContent>
        {categoryList?.map(({ category_name, id }) => (
          <SelectItem value={category_name} key={id} className="font-inter">
            {category_name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default SelectCategory;
