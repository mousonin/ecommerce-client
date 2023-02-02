import { CiDeliveryTruck, CiPlay1 } from "react-icons/ci";

const index = () => {
  return (
    <div className="bg-slate-100">
      <div className="flex h-8 items-center max-w-screen-xl m-auto">
        <div className="flex items-center grow justify-center">
          <CiDeliveryTruck />
          <p className="uppercase text-xs mx-1">
            free shipping for order over $50
          </p>
        </div>
        <span className="text-xs mx-1">Help and FAQs</span>
        <div className="outline-none flex items-center">
          <p className="text-xs mx-1 font-medium">EN, $</p>
          <CiPlay1 className="rotate-90 h-2 w-4" />
        </div>
      </div>
    </div>
  );
};

export default index;
