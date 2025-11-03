import HeroSlider from "../../components/sliders/HeroSlider";
import Fries from "../../components/Fries/Fries";

const flavors = [
  { bg: "bg-flavor1", icon: "assets/images/icon1.png", label: "sour cream" },
  { bg: "bg-flavor2", icon: "assets/images/icon2.png", label: "cheese" },
  { bg: "bg-flavor3", icon: "assets/images/icon3.png", label: "seaweed" },
  { bg: "bg-flavor4", icon: "assets/images/icon4.png", label: "corn cheese" },
  { bg: "bg-flavor5", icon: "assets/images/icon5.png", label: "hot & spicy" },
  { bg: "bg-flavor6", icon: "assets/images/icon6.png", label: "barbecue" },
  { bg: "bg-flavor7", icon: "assets/images/icon7.png", label: "tomato" },
  { bg: "bg-flavor8", icon: "assets/images/icon8.png", label: "tom yam" },
];

const Home = () => {
  return (
    <>
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
              <p className="text-white font-headingNew mt-2 text-[19px]">{flavor.label}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
