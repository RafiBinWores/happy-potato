import FranchiseOptions from "../../components/collapse/FranchiseOptions";
import FranchiseTimeline from "../../components/franchiseTimeline/FranchiseTimeline";
import SEO from "../../components/seo/SEO";
import data from "../../data/invest.json";

const FranchisePage = () => {
  const invest = data.invest;
  return (
    <>
      <SEO
        title="Franchise Program"
        description="Crispy fries, French Fires, Shaker Fries, & more."
        url="/"
      />

      <section className="bg-[url('/assets/images/franchise/banner-franchise.jpg')] bg-cover bg-center">
        <div className="c-space py-6 md:py-15 lg:py-[120px] text-center">
          <h2 className="text-[23px] md:text-[40px] md:leading-11 text-white text-shadow-[3px_4px_0px_#274789] uppercase">
            Join Our Happy Potato Franchise Program
          </h2>
        </div>
      </section>

      {/* Investment with Happy Potato */}
      <section className="bg-[url('/assets/images/bg/bg-franchising1.jpg')] bg-cover bg-center">
        <div className="c-space py-[30px] md:py-15 lg:py-20">
          {/* Section heading */}
          <div className="text-center">
            <h4 className="text-secondary text-[18px] uppercase">
              Discover the Endless Potential <br />
              with Happy Potato
            </h4>
            <h2 className="text-[23px] md:text-[40px] md:leading-11 text-white text-shadow-[3px_4px_0px_#df0b1a] uppercase">
              A Recipe for Success
            </h2>
          </div>

          {/* section content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 pt-4 lg:pt-8 gap-4 lg:gap-10">
            <img src="assets/images/franchise/hp-crowd.jpg" alt="Shop Image" />

            <div>
              <h3 className="text-white text-[18px] md:text-[26px]">
                Maximise Your Investment with Happy Potato
              </h3>

              {invest?.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-4 ${
                    index === 0 ? "mt-6" : "mt-4"
                  }`}
                >
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="size-[50px] md:size-[76px]"
                    />
                  )}
                  <div>
                    <p className="text-secondary text-[17px] md:text-[21px] font-headingNew mb-2.5 uppercase">
                      {item.title}
                    </p>
                    <p className="text-white text-[13px] md:text-base">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Store size */}
      <section className="bg-[url('/assets/images/bg/bg-franchising2.jpg')] bg-cover bg-center">
        <div className="c-space py-[30px] md:py-15 lg:py-20">
          <div className="px-0 md:px-28">
            {/* Section heading */}
            <div>
              <h2 className="text-[23px] md:text-[40px] md:leading-11 text-primary uppercase mb-5">
                Go Big or Start Small!
              </h2>
              <p className="text-[13px] md:text-base">Be it small, medium or large, we have something for everyone.</p>
              <p className="text-[13px] md:text-base">Investment start from Tk 150,000 depends on store size.</p>
            </div>

            <div className="mt-6">
              <FranchiseOptions />
            </div>
          </div>
        </div>
      </section>



      <FranchiseTimeline />

      
    </>
  );
};

export default FranchisePage;
