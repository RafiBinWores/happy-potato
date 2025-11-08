import Fries from "../../components/fries/Fries";
import SEO from "../../components/seo/SEO";
import ImageUpload from "../../components/image/ImageUpload";
import MenuSlider from "../../components/sliders/MenuSlider";

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
        <ImageUpload
          src="menu/cheesy-banner.jpg"
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
            <ImageUpload
              src="menu/menu1.jpg"
              alt="Savour the Crunch menu"
              className="md:h-[354px] lg:h-[570px] object-center bg-center w-full"
            />
          </div>
        </div>

        <div className="flex flex-col-reverse md:flex-row">
          <div className="basis-1/2">
            <ImageUpload
              src="menu/menu2.jpg"
              alt="shake-up menu"
              className="h-[347px] md:h-[354px] lg:h-[570px] object-center bg-center w-full"
            />
          </div>

          <div className="flex flex-col items-center justify-center px-0 md:px-[30px] py-[30px] md:py-0 lg:px-17 text-center basis-1/2">
            <ImageUpload
              src="menu/menu3.png"
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

      {/* Menu Section */}
      <MenuSlider />

      {/* Combo section */}
      <section className="c-space my-10 md:my-15 lg:my-20">
        <div className="bg-[url('/assets/images/bg/bg-menu2.jpg')] bg-cover bg-center p-7 md:py-16 rounded-2xl">
          <div className="flex justify-center">
            <img src="assets/images/menu/menu5.png" alt="Happy Combo Title" />
          </div>
          <div className="grid-cols-1 grid lg:grid-cols-3 gap-3 mt-10 lg:mt-14">
            <div className="text-center grid place-content-center">
              <img
                src="assets/images/menu/combo1.png"
                alt="Shaker Fries & Chicken Nugget combo"
              />
              <p className="font-headingNew text-primary md:text-[19px] pt-6">
                Shaker Fries + <br /> Chicken Nugget
              </p>
            </div>
            <div className="text-center grid place-content-center">
              <img
                src="assets/images/menu/combo2.png"
                alt="Shaker Fries & Chicken Pop combo"
              />
              <p className="font-headingNew text-primary md:text-[19px] pt-6">
                Shaker Fries + <br /> Chicken Nugget
              </p>
            </div>
            <div className="text-center grid place-content-center">
              <img
                src="assets/images/menu/combo3.png"
                alt="Shaker Fries & Chicken Finger combo"
              />
              <p className="font-headingNew text-primary md:text-[19px] pt-6">
                Shaker Fries + <br /> Chicken Nugget
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Flavour section */}
      <section className="bg-flavor-bg py-20">
          <div className="text-center">
            <h3 className="text-2xl md:text-[40px] md:leading-11 uppercase text-primary">
              Flavours
            </h3>
            <p className="text-customBlue text-[13px] md:text-base pt-2">Simple, fun, and deliciously different. Get ready to find your new favorite fry twist!</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 c-space mt-10">
            <img src="assets/images/menu/flavour1.jpg" alt="Cheese" className="w-full object-contain" />
            <img src="assets/images/menu/flavour2.jpg" alt="Sour Cream" className="w-full object-contain" />
            <img src="assets/images/menu/flavour3.jpg" alt="BBQ" className="w-full object-contain" />
            <img src="assets/images/menu/flavour4.jpg" alt="Hot & Spicy" className="w-full object-contain" />
            <img src="assets/images/menu/flavour5.jpg" alt="Tomyum" className="w-full object-contain" />
            <img src="assets/images/menu/flavour6.jpg" alt="Seaweed" className="w-full object-contain" />
            <img src="assets/images/menu/flavour7.jpg" alt="Corn Cheese" className="w-full object-contain" />
            <img src="assets/images/menu/flavour8.jpg" alt="Sichuang mala" className="w-full object-contain" />
          </div>
      </section>
    </>
  );
};

export default Menu;
