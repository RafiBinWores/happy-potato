import HeroSlider from "../../components/sliders/HeroSlider";
import Fries from "../../components/Fries/Fries";

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
            <h3 className="text-secondary text-lg md:text-[26px] uppercase leading-[39px]">Discover Our Bestseller</h3>
            <p className="uppercase text-white text-[23px] md:text-[40px] font-headingNew">Savor the Sensation of Flavored Fries!</p>
          </div>

          {/* Price combo */}
          <Fries />
        </div>
      </section>
    </>
  );
};

export default Home;
