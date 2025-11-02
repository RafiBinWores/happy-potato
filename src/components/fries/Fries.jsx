const Fries = () => {
  return (
    <div className="grid col-span-1 gap-y-10 md:grid-cols-2 md:gap-x-8 md:gap-y-20 lg:gap-0 lg:grid-cols-4 mx-5 md:mx-[30px] lg:mx-[50px] items-end mt-5 text-center pb-5">
      <div className="relative grid place-items-center">
        <img
          src="assets/images/fries1.png"
          alt="Fries"
          className="z-50 relative"
        />
        <p className="relative z-50 text-[19px] pt-6 lg:pt-3 text-customBlue/95 uppercase">
          Regular
        </p>
        <div className="bg-white h-[125px] lg:h-[130px] absolute left-0 -bottom-4 lg:-bottom-7 w-full rounded-r-2xl lg:rounded-r-none rounded-l-2xl "></div>
      </div>
      <div className="relative grid place-items-center">
        <img
          src="assets/images/fries2.png"
          alt="Fries"
          className="z-50 w-[230px] relative"
        />
        <p className="relative z-50 text-[19px] pt-6 lg:pt-3 text-customBlue/95 uppercase">
          Large
        </p>
        <div className="bg-white h-[125px] lg:h-[130px] absolute left-0 -bottom-4 lg:-bottom-7 w-full rounded-2xl lg:rounded-none"></div>
      </div>
      <div className="relative grid place-items-center">
        <img
          src="assets/images/fries3.png"
          alt="Fries"
          className="z-50 w-60 relative"
        />
        <p className="relative z-50 text-[19px] pt-6 lg:pt-3 text-customBlue/95 uppercase">
          Mega
        </p>
        <div className="bg-white h-[125px] lg:h-[130px] absolute left-0 -bottom-4 lg:-bottom-7 w-full rounded-2xl lg:rounded-none"></div>
      </div>
      <div className="relative lg:pe-6 grid place-items-center">
        <img
          src="assets/images/fries4.png"
          alt="Fries"
          className="z-50 lg:w-[300px] relative"
        />
        <p className="relative z-50 text-[19px] pt-6 lg:pt-3 text-customBlue/95 uppercase">
          Giga
        </p>
        <div className="bg-white h-[125px] lg:h-[130px] absolute left-0 -bottom-4 lg:-bottom-7 w-full rounded-2xl lg:rounded-l-none lg:rounded-r-2xl"></div>
      </div>
    </div>
  );
};

export default Fries;
