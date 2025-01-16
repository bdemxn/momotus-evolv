import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { setCategories } from "../../services/setCategories";
import { useFormikContext } from "formik";

const SelectCategory = () => {
  const { setFieldValue } = useFormikContext();

  return (
    <Select onValueChange={(value) => setFieldValue("category", value)}>
      <SelectTrigger className="font-inter">
        <SelectValue placeholder="Categoría" />
      </SelectTrigger>
      <SelectContent>
        {setCategories.map(({ category, id }) => (
          <SelectItem value={category} key={id} className="font-inter">
            {category}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default SelectCategory;
