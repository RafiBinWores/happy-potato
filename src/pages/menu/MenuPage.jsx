import Fries from "../../components/fries/Fries";
import SEO from "../../components/seo/SEO";

const Menu = () => {
  return (
    <>
      <SEO
        title="Menu"
        description="Crispy fries, French Fires, Shaker Fries, & more."
        url="/"
      />

      {/* Content */}
      <section className="bg-[url('/assets/images/bg/bg-menu1.jpg')] bg-cover bg-center">
        <div className="c-space py-6 md:py-15 lg:py-20 text-center">
          <h2 className="text-2xl md:text-[50px] md:leading-[55px] text-white text-shadow-[3px_4px_0px_#df0b1a] uppercase">
            Happy Potato menu
          </h2>
        </div>
      </section>

      <div className="c-space">
        <img
          src="assets/images/menu/cheesy-banner.jpg"
          alt="Cheesy chicken ball banner"
          className="lg:h-[640px] w-full object-cover object-center"
        />

        <div className="flex flex-col md:flex-row">
          <div className="text-center flex-col px-0  md:px-[30px] lg:px-16 py-8 md:py-0 md:my-auto basis-1/2">
            <h3 className="text-[23px] leading-[25px] md:text-[40px] md:leading-11 text-customBlue uppercase">
              Savour <br /> the <br /> Crunch
            </h3>
            <p className="text-customBlue mt-6 font-light md:font-normal">
              Enjoy our golden, crunchy fries in various shapes and sizes. Ready
              to savour? Let the taste adventure begin now!
            </p>
          </div>

          <div className="basis-1/2">
            <img
              src="assets/images/menu/menu1.jpg"
              alt="Savour the Crunch menu"
              className="md:h-[354px] lg:h-[570px] object-center bg-center w-full"
            />
          </div>
        </div>

        <div className="flex flex-col-reverse md:flex-row">
          <div className="basis-1/2">
            <img
              src="assets/images/menu/menu2.jpg"
              alt="shake-up menu"
              className="h-[347px] md:h-[354px] lg:h-[570px] object-center bg-center w-full"
            />
          </div>

          <div className="flex flex-col items-center justify-center px-0 md:px-[30px] py-[30px] md:py-0 lg:px-17 text-center basis-1/2">
            <img
              src="assets/images/menu/menu3.png"
              alt="shake-up menu"
              className="w-[187px] md:w-[147px] lg:w-[190px] object-cover"
            />
            <h4 className="uppercase text-primary mt-5 text-base md:text-[19px]">
              shake-up
            </h4>
            <p className="mt-5 lg:mt-7 text-primary font-light">
              Try Happy Potato’s Flavoured Shaker Fries! Choose from Cheese,
              Sour Cream, or Tomyum. Each bite bursts with bold, mouth-watering
              flavors.
            </p>
          </div>
        </div>
      </div>

      {/* FRIES */}
      <section className="bg-customBlue py-10 lg:py-20 ">
        <div className="c-space">
          <div className="text-center text-white mb-20">
            <h3 className="text-2xl md:text-[40px] md:leading-11 uppercase">
              FRIES
            </h3>
            <p className="mt-4 text-[13px] md:text-base">
              Craving fries? We've got you covered! Whether it's a small snack
              or a big feast, <br />
              choose the perfect size for any occasion. Fry happiness awaits in
              every bite!
            </p>
          </div>

          {/* Fries component */}
          <Fries />
        </div>
      </section>
    </>
  );
};

export default Menu;
