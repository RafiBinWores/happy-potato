import SEO from "../../components/seo/SEO";

const Career = () => {
  return (
    <>
      <SEO
        title="Careers"
        description="Crispy fries, French Fires, Shaker Fries, & more."
        url="/"
      />

      <section className="bg-white">
        <div className="c-space py-[30px] md:py-20 lg:py-24">
          <div className="grid grid-col-1 lg:grid-cols-12 gap-8 items-center">

            <div className="lg:col-span-5 text-center lg:text-left">
              <h3 className="text-[18px] md:text-[26px] text-secondary uppercase">
                Join the Happy Potato Family:
              </h3>
              <h1 className="mb-5 md:mb-6 text-primary text-[23px] md:text-[40px] md:leading-11 uppercase leading-[25px]">
                Grow Your <br /> Career with Us!
              </h1>
              <p className="text-[13px] md:text-base">
                We are looking for self-motivated, positive individuals who have
                a passion for the F&B industry and service excellence. Join us
                and be part of our family!
              </p>
            </div>
            <div className="lg:col-span-7">
              <img
                src="/assets/images/career/careers1.png"
                alt="Career Banner"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Career;
