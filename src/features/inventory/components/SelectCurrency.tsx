import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useFormikContext } from "formik";

const SelectCurrency = () => {
  const { setFieldValue } = useFormikContext();

  return (
    <Select onValueChange={(value) => setFieldValue("currency", value)}>
      <SelectTrigger className="font-inter">
        <SelectValue placeholder="Moneda" />
      </SelectTrigger>
      <SelectContent className="font-inter">
        <SelectItem value="C$">Córdobas</SelectItem>
        <SelectItem value="$">Dólares</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default SelectCurrency;
