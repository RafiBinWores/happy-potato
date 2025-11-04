import { ClockFading, MapPin } from "lucide-react";

const ShopCard = ({shop}) => {

  const { name, image, address, hours } = shop;

  return (
    <>
      <div className="card">
          <img
            src={image}
            alt={`${name} Store`}
            className="h-[200px] w-full object-cover object-center"
          />
          <div className="bg-shopCard p-4 h-[200px]">
            <h4 className="text-[26px] text-primary leading-8 h-[60px] flex items-center">
              {name}
            </h4>
            <div className="flex items-center gap-4 mt-6 mb-5">
              <MapPin className="text-primary size-7" />
              <p className="text-[13px]">{address}</p>
            </div>
            <div className="flex items-center gap-4">
              <ClockFading className="text-primary size-6" />
              <p className="text-[13px]">{hours}</p>
            </div>
          </div>
        </div>
    </>
  );
};

export default ShopCard;
