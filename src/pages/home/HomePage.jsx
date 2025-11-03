import HeroSlider from "../../components/sliders/HeroSlider";
import Fries from "../../components/fries/Fries";

const flavors = [
  {
    bg: "bg-flavor1",
    icon: "assets/images/icon/icon1.png",
    label: "sour cream",
  },
  { bg: "bg-flavor2", icon: "assets/images/icon/icon2.png", label: "cheese" },
  { bg: "bg-flavor3", icon: "assets/images/icon/icon3.png", label: "seaweed" },
  {
    bg: "bg-flavor4",
    icon: "assets/images/icon/icon4.png",
    label: "corn cheese",
  },
  {
    bg: "bg-flavor5",
    icon: "assets/images/icon/icon5.png",
    label: "hot & spicy",
  },
  { bg: "bg-flavor6", icon: "assets/images/icon/icon6.png", label: "barbecue" },
  { bg: "bg-flavor7", icon: "assets/images/icon/icon7.png", label: "tomato" },
  { bg: "bg-flavor8", icon: "assets/images/icon/icon8.png", label: "tom yam" },
];

const Home = () => {
  return (
    <>
      <title>Home | Happy Potato</title>
      <meta property="og:title" content="Home | Happy Potato" />
      <meta property="og:description" content="Crispy fries, burgers & more." />
      <meta property="og:type" content="website" />

      {/* Hero Section */}
      <section>
        <HeroSlider />
      </section>

      {/* Fries Section */}
      <section className="c-space mt-8">
        <div className="bg-customBlue z-10 pb-10">
          {/* Section Title */}
          <div className="text-center pt-7 md:px-[30px]">
            <h3 className="text-secondary text-lg md:text-[26px] uppercase leading-[39px] font-headingNew">
              Discover Our Bestseller
            </h3>
            <p className="uppercase text-white text-[23px] md:text-[40px] font-headingNew">
              Savor the Sensation of Flavored Fries!
            </p>
          </div>

          {/* Price combo */}
          <Fries />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8">
          {flavors.map((flavor, index) => (
            <div
              key={index}
              className={`${flavor.bg} grid place-items-center py-3 group cursor-none`}
            >
              <div className="bg-amber-50 rounded-full size-18 duration-300 group-hover:scale-110">
                <img src={flavor.icon} alt={flavor.label} />
              </div>
              <p className="text-white font-headingNew mt-2 text-[19px]">
                {flavor.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Brand Story */}
      <section className="mt-12">
        <div className="text-center mb-12">
          <a
            href=""
            className="bg-primary px-8 py-3 font-headingNew text-white rounded-full text-[26px] uppercase ring-secondary ring-4 hover:bg-customBlue duration-300"
          >
            Discover Our Flavours
          </a>
        </div>
        <div className="bg-secondary">
          <div className="c-space py-20">
            <div className="text-center">
              <p className="uppercase text-customBlue text-lg md:text-[26px] font-headingNew leading-[39px]">
                brand story
              </p>
              <h3 className="uppercase text-white text-[23px] md:text-[40px] text-shadow-[3px_4px_0_#df0b1a] leading-[25px] md:leading-11">
                Happy Potato - Our Flavorful Journey
              </h3>

              <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-16 mt-4 lg:mt-8 mb-4">
                <img src="assets/images/map/potato-map.png" alt="" />
                <div className="mt-5">
                  <p className="bg-white rounded-2xl md:rounded-3xl text-[13px] md:text-base text-customBlue px-5 md:px-6 lg:px-9 py-7 mb-8">
                    Happy Potato, proudly born in Sabah in 2019, has quickly
                    become Malaysia’s No.1 Shaker Fries brand. With over 90
                    outlets nationwide, it stands as one of the fastest-growing
                    homegrown F&B brands in the country. Known for its unique
                    shaking method and bold, delicious flavours, Happy Potato
                    brings happiness to every bite — because with Happy Potato,
                    Happy Together.
                  </p>
                  <a
                    href=""
                    className="text-[26px] bg-primary px-7 py-2 font-headingNew text-white rounded-full uppercase hover:bg-customBlue duration-300"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


{/* Franchise */}
      <section className="bg-[url('/assets/images/bg/franchise-bg.jpg')] bg-cover bg-center">
      <div className="c-space pt-16">
        <div className="flex items-center flex-col-reverse lg:flex-row md:gap-28 lg:gap-0 gap-16">
          <div className="basis-3/5">
            <img src="assets/images/franchise-fries.png" alt="Fries" />
          </div>
          <div className="basis-2/5 text-center lg:text-start">
            <p className="uppercase font-headingNew text-customBlue text-base md:text-[19px] ">Join the Happy Potato Family</p>
            <h3 className="uppercase text-primary text-[23px] md:text-[40px] leading-[25px] md:leading-11 text-shadow-[3px_4px_0px_#ffffff]">Franchise <br /> Opportunities Await!</h3>
            <p className="pt-5 pb-10 font-regular text-[13px]">Interested in starting a business? Come join the home-grown brand that’s elevating the french fries culture to the next level through honesty, teamwork, entrepreneurship, and innovation!</p>

            <a href="" className="bg-primary px-5 md:px-8 py-2 font-headingNew text-white rounded-full text-[11px] md:text-[26px] uppercase ring-secondary ring-4 hover:bg-customBlue duration-300">Own a Happy Potato</a>
          </div>
        </div>
      </div>
      </section>
    </>
  );
};

export default Home;
