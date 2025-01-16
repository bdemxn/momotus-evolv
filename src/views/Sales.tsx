import ButtonsGroup from "@/features/sales/components/button-group";

const Sales = () => {
  return (
    <div className="h-full">
      <div className="top-0 sticky backdrop-blur-sm z-40 p-3">
        <p className="sm:font-semibold sm:text-xl font-bold text-2xl mb-5">Punto de Ventas</p>

        <ButtonsGroup />
      </div>


    </div>
  );
};

export default Sales;
