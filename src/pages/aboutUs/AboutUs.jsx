import { Link } from "react-router";
import FlavourCard from "../../components/card/FlavourCard";
import SEO from "../../components/seo/SEO";

const AboutUs = () => {
  return (
    <>
      <SEO
        title="About Us"
        description="Discover the story behind Happy Potato Bangladesh — Malaysia’s popular fries brand now in Dhaka. Serving crispy snacks, great service, and everyday happiness."
        url="/"
      />

      {/* Banner */}
      <section className="c-space my-10">
        <img
          src="assets/images/about/about-banner.jpg"
          alt="Banner"
          className="rounded-4xl"
        />
      </section>

      {/* happy potato story */}
      <section className="c-space mb-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-18 lg:px-28 items-center">
          <div>
            <img
              src="assets/images/about/shop.jpeg"
              alt="Shop Image"
              className="w-auto"
            />
          </div>
          <div>
            <h3 className="uppercase text-primary text-[23px] md:text-[40px] mb-4 lg:mb-6">
              happy potato story
            </h3>
            <p className="font-light md:font-normal">
              Happy Potato, proudly born in Sabah in 2019, has quickly become
              Malaysia’s No.1 Shaker Fries brand. With over 90 outlets
              nationwide, it stands as one of the fastest-growing homegrown F&B
              brands in the country. Known for its unique shaking method and
              bold, delicious flavours, Happy Potato brings happiness to every
              bite. Constantly innovating, it continues to redefine snacking for
              Malaysians everywhere. More than just fries, it’s a celebration of
              flavour, fun, and pride — because with Happy Potato, Happy
              Together.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section>
        <div className="bg-secondary">
          <div className="c-space py-20">
            <div className="text-center">
              <p className="uppercase text-customBlue text-lg md:text-[26px] font-headingNew leading-[39px]">
                Vision & Mission
              </p>
              <h3 className="uppercase text-white text-[23px] md:text-[40px] text-shadow-[3px_4px_0_#df0b1a] leading-[25px] md:leading-11">
                Happy Potato - Our Flavourful Journey
              </h3>

              <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-16 mt-4 lg:mt-8 mb-4">
                <img
                  src="assets/images/map/potato-map3.png"
                  alt="Location Map"
                  className="w-full object object-cover my-auto"
                />
                <div className="mt-5 bg-white rounded-2xl md:rounded-3xl text-customBlue px-5 md:px-6 lg:px-9 py-7 mb-8">
                  <div>
                    <p className="uppercase font-bold pb-5 md:pb-8 text-[13px] md:text-base">
                      VISION
                    </p>

                    <p className="text-[13px] md:text-base">
                      Bringing happiness to every corner of Bangladesh
                    </p>

                    <p className="uppercase font-bold text-[13px] md:text-base">
                      – HAPPY TOGETHER –
                    </p>

                    <p className="text-[13px] md:text-base">2025 – 2030</p>
                    <p className="text-[13px] md:text-base">
                      To become Bangladesh’s leading snacking brand with outlets
                      across all major cities
                    </p>

                    <p className="text-[13px] md:text-base">2030 – 2035</p>
                    <p className="text-[13px] md:text-base">
                      To strengthen nationwide presence and introduce innovative
                      snacking experiences for all ages
                    </p>

                    <p className="text-[13px] md:text-base">2035 – 2040</p>
                    <p className="text-[13px] md:text-base">
                      To establish Happy Potato Bangladesh as a regional
                      benchmark for quality, fun, and consistency
                    </p>
                  </div>

                  <div>
                    <p className="uppercase font-bold py-5 lg:py-8 text-[13px] md:text-bases">
                      MISSION
                    </p>
                    <p className="text-[13px] md:text-base">
                      Happy Potato serve happiest moments with the best food &
                      drinks by elevating nationwide industry standards
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Core Values */}
      <section className="c-space my-8 md:my-[60px] lg:my-20">
        <h3 className="uppercase text-primary text-[23px] md:text-[40px] leading-[25px] md:leading-11 text-center">
          Our Core Values
        </h3>

        <div className="space-y-6 lg:space-y-0 mt-10">
          {/* flex 1 */}
          <div className="flex flex-col lg:flex-row">
            <div className="pb-[30px] basis-1/2 lg:px-20 my-auto">
              <h3 className="text-2xl md:text-[39px] text-customBlue">
                Quality Delights
              </h3>
              <p className="text-[13px] md:text-base pt-3 md:pt-5">
                We select only the finest quality potatoes, paired premium
                seasonings that make every bite explode with irresistible,
                unique flavours.
              </p>
            </div>
            <div className="basis-1/2">
              <img src="assets/images/about/about2.jpg" alt="About image" />
            </div>
          </div>

          {/* flex 2 */}
          <div className="flex flex-col-reverse lg:flex-row">
            <div className="basis-1/2">
              <img src="assets/images/about/about3.jpg" alt="About image" />
            </div>
            <div className="pb-[30px] basis-1/2 lg:px-20 my-auto">
              <h3 className="text-2xl md:text-[39px] text-customBlue">
                Affordable Bliss
              </h3>
              <p className="text-[13px] md:text-base pt-3 md:pt-5">
                We stand by our promise of delivering the highest quality snacks
                with prices that EVERYONE CAN EAT. Our aim is making happiness
                accessible to all.
              </p>
            </div>
          </div>

          {/* flex 3 */}
          <div className="flex flex-col lg:flex-row">
            <div className="pb-[30px] basis-1/2 lg:px-20 my-auto">
              <h3 className="text-2xl md:text-[39px] text-customBlue">
                Collective Happiness
              </h3>
              <p className="text-[13px] md:text-base pt-3 md:pt-5">
                At Happy Potato, happiness multiplies when shared. We spread
                smiles to our customers, teams, partners, and everyone we touch.
              </p>
            </div>
            <div className="basis-1/2">
              <img src="assets/images/about/about4.jpg" alt="About image" />
            </div>
          </div>

          {/* flex 4 */}
          <div className="flex flex-col-reverse lg:flex-row">
            <div className="basis-1/2">
              <img src="assets/images/about/about5.jpg" alt="About image" />
            </div>
            <div className="pb-[30px] basis-1/2 lg:px-20 my-auto">
              <h3 className="text-2xl md:text-[39px] text-customBlue">
                Vibrant Community Spirit
              </h3>
              <p className="text-[13px] md:text-base pt-3 md:pt-5">
                Our brand embodies youthful joy, excitement, and playfulness. We
                believe in giving back and being an integral part of the
                communities we serve, spreading happiness beyond our snacks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Golden Spuds */}
      <section>
        <div className="bg-flavor-bg">
          <div className="c-space py-20">
            <div className="text-center lg:mx-20">
              <p className="uppercase text-primary text-lg md:text-[26px] font-headingNew leading-[39px]">
                Golden Spuds
              </p>
              <h3 className="uppercase text-customBlue text-[23px] md:text-[40px] leading-[25px] md:leading-11">
                Celebrating the Milestones and Achievements of Happy Potato
              </h3>

              <div className="grid grid-cols-1 lg:grid-cols-10 gap-4 md:px-6 mt-8 md:w-[400px] lg:w-full mx-auto">
                {/* About 1 */}
                <div className="lg:col-span-3 bg-white flex flex-col items-center rounded-4xl lg:rounded-3xl p-[35px]">
                  <img
                    src="assets/images/icon/icon-about1.png"
                    alt="Store icon"
                    className="size-[50px]"
                  />
                  <p className="font-headingNew text-[60px] lg:text-[80px] text-primary leading-20 pt-2">
                    03
                  </p>
                  <p className="font-headingNew text-[39px] text-primary leading-[51px] pb-[18px] uppercase pt-2">
                    Outlets
                  </p>
                  <p className="text-customBlue">Number of outlets</p>
                </div>

                {/* About 2 */}
                <div className="lg:col-span-3 bg-white flex flex-col items-center rounded-4xl lg:rounded-3xl p-[35px]">
                  <img
                    src="assets/images/icon/icon-about2.png"
                    alt="Canton icon"
                    className="size-[50px]"
                  />
                  <p className="font-headingNew text-[60px] lg:text-[80px] text-primary leading-20 pt-2">
                    09
                  </p>
                  <p className="font-headingNew text-[39px] text-primary leading-[51px] pb-[18px] uppercase pt-2">
                    Job
                  </p>
                  <p className="text-customBlue">Opportunities created</p>
                </div>

                {/* About 3 */}
                <div className="lg:col-span-4 bg-white flex flex-col items-center rounded-4xl lg:rounded-3xl p-[35px]">
                  <img
                    src="assets/images/icon/icon-about3.png"
                    alt="Fries icon"
                    className="size-[50px]"
                  />
                  <p className="font-headingNew text-[60px] lg:text-[80px] text-primary leading-20 pt-2">
                    3
                  </p>
                  <p className="font-headingNew text-[39px] text-primary leading-[51px] pb-[18px] uppercase pt-2">
                    Million
                  </p>
                  <p className="text-customBlue">Fries sold per year</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footprint */}
      <section>
        <div className="bg-customBlue">
          <div className="c-space py-20">
            <div className="text-center lg:mx-20">
              <p className="uppercase text-secondary text-lg md:text-[26px] font-headingNew leading-[39px]">
                Happy Potato Across Bangladesh
              </p>
              <h3 className="uppercase text-white text-[23px] md:text-[40px] leading-[25px] md:leading-11">
                Our Nationwide Footprint
              </h3>
            </div>

            <div className="flex flex-col lg:flex-row items-center mt-10 gap-10">
              <div className="basis-2/4 pe-10">
                <h4 className="text-secondary text-[18px] md:text-[28px] leading-[31px] mb-6">
                  Happy Potato’s presence across the vibrant landscapes of
                  Bangladesh
                </h4>
                <p className="text-white mb-6">
                  Across Dhaka, our outlets are ready to serve you the most
                  delightful fries, crafted with care and unbeatable flavour.
                </p>
                <p className="text-white">
                  Each location reflects our passion for bringing joy and
                  deliciousness. Find your nearest Happy Potato and celebrate
                  the flavours that unite us all.
                </p>
              </div>
              <div className="basis-2/4">
                <img
                  src="assets/images/map/potato-map1.png"
                  alt="Map"
                  className="w-full md:w-[400px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Flavours Section */}
      <section className="bg-[url('/assets/images/bg/contact-bg.jpg')] bg-cover bg-center">
        <div className="c-space py-8 md:py-16 z-20">
          <div className="bg-white rounded-3xl md:rounded-3xl lg:rounded-[50px] shadow-[0_4px_17px_5px_rgba(0,0,0,0.25)] md:my-5 lg:py-20 py-5  px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              {/* flavour grid */}
              <div className="lg:col-span-7">
                <FlavourCard />
              </div>

              {/* Content grid */}
              <div className="lg:col-span-5 flex justify-center items-center lg:items-start flex-col space-y-4 lg:space-y-7">
                <h3 className="uppercase text-customBlue text-[23px] md:text-[40px] lg:leading-11">
                  Discover Flavours That Amaze
                </h3>
                <p className="font-light md:font-normal pb-4">
                  Happy Potato, proudly born in Sabah in 2019, has grown into Malaysia’s No.1 Shaker Fries brand with over 90 outlets nationwide. Now arriving in Bangladesh, Happy Potato brings its signature shaking style and bold, delicious flavours to a whole new family of food lovers. A bite full of joy, a shake full of fun — because with Happy Potato, Happy Together.
                </p>

                {/* Button */}
                <div className="text-center pb-4 lg:pb-0">
                  <Link
                    to="/menu"
                    className="bg-primary px-5 md:px-8 py-1 font-headingNew text-white rounded-full text-[12px] md:text-[26px] uppercase ring-secondary ring-4 hover:bg-customBlue duration-300 mt-2"
                  >
                    Explore our menu
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
