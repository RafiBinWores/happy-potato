import { useForm } from "react-hook-form";
import FranchiseOptions from "../../components/collapse/FranchiseOptions";
import FranchiseTimeline from "../../components/franchiseTimeline/FranchiseTimeline";
import SEO from "../../components/seo/SEO";
import data from "../../data/invest.json";
import { useState } from "react";
import { Mail, PhoneCall } from "lucide-react";

const FranchisePage = () => {
  const invest = data.invest;
  const [result, setResult] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      name: "",
      nid: "",
      email: "",
      address: "",
      phone: "",
      experience: "", // yes / no
      experienceDetails: "",
      city: "",
      selfOperate: "", // yes / no
      investment: "",
      botcheck: "",
    },
  });

  const experienceValue = watch("experience");

  const onSubmit = async (values) => {
    if (values.botcheck) return; // stop bots

    setResult("");
    const fd = new FormData();
    fd.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY);
    fd.append("subject", "Franchise Inquiry - Happy Potato BD");
    fd.append("from_name", "Happy Potato Franchise Form");

    fd.append("name", values.name);
    fd.append("nid", values.nid);
    fd.append("email", values.email);
    fd.append("address", values.address);
    fd.append("phone", values.phone);
    fd.append("experience", values.experience);
    fd.append("experienceDetails", values.experienceDetails);
    fd.append("city", values.city);
    fd.append("selfOperate", values.selfOperate);
    fd.append("investment", values.investment);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: fd,
      });
      const data = await res.json();
      if (!data.success) throw new Error(data.message || "Failed");
      setResult("Thanks! We’ll contact you shortly.");
      reset();
    } catch {
      setResult("Could not send your message. Please try again.");
    }
  };

  // styles close to your image
  const inputBase =
    "bg-[#F7E8C6] w-full outline-none focus:ring-2 focus:ring-primary/50 rounded-md py-2.5 md:py-3 px-4 text-[#4b5563] placeholder:text-[#6b7280]";
  const labelBase =
    "min-w-[90px] text-customBlue font-semibold text-[13px] md:text-[15px]";
  const errText = "text-red-600 text-sm mt-1";

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
              <p className="text-[13px] md:text-base">
                Be it small, medium or large, we have something for everyone.
              </p>
              <p className="text-[13px] md:text-base">
                Investment start from Tk 150,000 depends on store size.
              </p>
            </div>

            <div className="mt-6">
              <FranchiseOptions />
            </div>
          </div>
        </div>
      </section>

      {/* Outlet Open Timeline */}
      <section className="bg-white">
        <div className="c-space py-12 md:py-16 lg:py-20">
          {/* Heading */}
          <h2 className="text-center text-[24px] md:text-[36px] font-headingNew text-[#E51E26] uppercase">
            Outlet Open
          </h2>

          <FranchiseTimeline />
        </div>
      </section>

      {/* Franchise Partner Criteria */}
      <section className="bg-flavor-bg">
        <div className="c-space py-8 md:py-16 lg:py-20">
          {/* Heading */}
          <div className="text-center">
            <p className="uppercase text-[18px] text-customBlue font-headingNew">
              Are you perfect match for happy Potato?
            </p>
            <h2 className="text-[18px] md:text-[28px] font-headingNew text-primary uppercase mb-8">
              Discover Our Ideal Franchise Partner Criteria!
            </h2>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-[30px] text-center rounded-4xl">
              <img src="assets/images/franchise/partner1.png" alt="" />
              <p className="text-[13px] md:text-base pt-6 lg:pt-10">
                Business People looking into F&B fast food business with short
                return on investment time
              </p>
            </div>
            <div className="bg-white p-[30px] text-center rounded-4xl">
              <img src="assets/images/franchise/partner2.png" alt="" />
              <p className="text-[13px] md:text-base pt-6 lg:pt-10">
                Excellent people skills and willing to work as a team
              </p>
            </div>
            <div className="bg-white p-[30px] text-center rounded-4xl">
              <img src="assets/images/franchise/partner3.png" alt="" />
              <p className="text-[13px] md:text-base pt-6 lg:pt-10">
                A commitment and focus on growing your business
              </p>
            </div>
            <div className="bg-white p-[30px] text-center rounded-4xl">
              <img src="assets/images/franchise/partner4.png" alt="" />
              <p className="text-[13px] md:text-base pt-6 lg:pt-10">
                Have passion to our brand and willing to grow the business with
                us.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nation wide franchise */}
      <section>
        <img
          src="assets/images/franchise/franchise-banner.jpg"
          alt="Nationwide Franchise"
          className="w-full"
        />
      </section>

      {/* Franchising contact */}
      <section className="bg-[url('/assets/images/bg/contact-bg.jpg')] bg-cover bg-center relative">
        <div className="c-space py-8 md:py-10 z-20 relative">
          <div className="grid grid-cols-1 lg:grid-cols-5 lg:gap-10 mt-5 lg:pb-10 md:mt-10 gap-y-6">
            {/* LEFT PANEL */}
            <div className="col-span-2 relative overflow-hidden">
              <div className="bg-primary rounded-4xl p-10">
                <h4 className="text-secondary text-[20px] md:text-[18px] lg:text-[26px] font-headingNew uppercase leading-tight">
                  Interested in Franchising with Happy Potato?
                </h4>

                <h5 className="mt-6 text-white font-semibold text-base md:text-[19px]">
                  Happy Potato benefit
                </h5>

                <ul className="mt-6 space-y-6 text-white text-sm md:text-base">
                  <li className="flex gap-3 items-start">
                    <img
                      src="/assets/images/franchise/check.png"
                      alt="check icon"
                      className="w-6"
                    />
                    <p>Top-quality product with affordable price</p>
                  </li>
                  <li className="flex gap-3 items-start">
                    <img
                      src="/assets/images/franchise/check.png"
                      alt="check icon"
                      className="w-6"
                    />
                    <p>Low franchise investment with high fast return</p>
                  </li>
                  <li className="flex gap-3 items-start">
                    <img
                      src="/assets/images/franchise/check.png"
                      alt="check icon"
                      className="w-6"
                    />
                    <p>
                      Simple business model and easily adapted once trained by
                      professional staff
                    </p>
                  </li>
                </ul>
              </div>

              {/* mascot */}
              <img
                src="/assets/images/icon/happy-potato.png"
                alt="Happy Potato Mascot"
                className="absolute bottom-0 left-0 scale-x-[-1] hidden lg:block w-[800px]"
              />
            </div>

            {/* RIGHT FORM */}
            <div className="col-span-3 bg-white rounded-4xl p-[22px] md:p-[50px] shadow-[0_4px_17px_5px_rgba(0,0,0,0.25)]">
              <p className="text-[12px] md:text-[14px] text-black/80 leading-relaxed mb-5">
                Greetings from Happy Potato Bangladesh! We would like to extend
                our warmest appreciation for your interest for us. In order for
                us to proceed further with your application, kindly provide us
                some information by filling in the below:
              </p>

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-4 md:space-y-5"
              >
                {/* Honeypot */}
                <input
                  type="text"
                  {...register("botcheck")}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                {/* Name */}
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                  <label className={labelBase}>Name</label>
                  <div className="w-full">
                    <input
                      type="text"
                      className={`${inputBase} ${
                        errors.name ? "ring-2 ring-red-500" : ""
                      }`}
                      {...register("name", { required: "Name is required" })}
                    />
                    {errors.name && (
                      <p className={errText}>{errors.name.message}</p>
                    )}
                  </div>
                </div>

                {/* NID */}
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                  <label className={labelBase}>NID No</label>
                  <div className="w-full">
                    <input
                      type="number"
                      className={`${inputBase} ${
                        errors.nid ? "ring-2 ring-red-500" : ""
                      }`}
                      {...register("nid", { required: "NID No is required" })}
                    />
                    {errors.nid && (
                      <p className={errText}>{errors.nid.message}</p>
                    )}
                  </div>
                </div>

                {/* Email */}
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                  <label className={labelBase}>Email</label>
                  <div className="w-full">
                    <input
                      type="email"
                      className={`${inputBase} ${
                        errors.email ? "ring-2 ring-red-500" : ""
                      }`}
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
                          message: "Enter a valid email",
                        },
                      })}
                    />
                    {errors.email && (
                      <p className={errText}>{errors.email.message}</p>
                    )}
                  </div>
                </div>

                {/* Address */}
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                  <label className={labelBase}>Address</label>
                  <div className="w-full">
                    <input
                      type="text"
                      className={`${inputBase} ${
                        errors.address ? "ring-2 ring-red-500" : ""
                      }`}
                      {...register("address", {
                        required: "Address is required",
                      })}
                    />
                    {errors.address && (
                      <p className={errText}>{errors.address.message}</p>
                    )}
                  </div>
                </div>

                {/* Phone */}
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                  <label className={labelBase}>Phone</label>
                  <div className="w-full">
                    <input
                      type="number"
                      className={`${inputBase} ${
                        errors.phone ? "ring-2 ring-red-500" : ""
                      }`}
                      {...register("phone", { required: "Phone is required" })}
                    />
                    {errors.phone && (
                      <p className={errText}>{errors.phone.message}</p>
                    )}
                  </div>
                </div>

                {/* Experience yes/no */}
                <div className="pt-1">
                  <p className="text-customBlue font-semibold text-[13px] md:text-[15px] mb-2">
                    Do you have any prior Food & Beverage experience?
                  </p>
                  <div className="flex items-center gap-8">
                    <label className="flex items-center gap-2 text-sm text-customBlue">
                      <input
                        type="radio"
                        value="yes"
                        className="accent-primary"
                        {...register("experience", {
                          required: "Select yes or no",
                        })}
                      />
                      Yes
                    </label>
                    <label className="flex items-center gap-2 text-sm text-customBlue">
                      <input
                        type="radio"
                        value="no"
                        className="accent-primary"
                        {...register("experience", {
                          required: "Select yes or no",
                        })}
                      />
                      No
                    </label>
                  </div>
                  {errors.experience && (
                    <p className={errText}>{errors.experience.message}</p>
                  )}
                </div>

                {/* Experience details */}
                <div>
                  <p className="text-customBlue font-semibold text-[13px] md:text-[15px] mb-2">
                    If yes, please briefly describe your experience:
                  </p>
                  <textarea
                    rows="2"
                    className={inputBase}
                    placeholder=""
                    {...register("experienceDetails", {
                      validate: (val) =>
                        experienceValue !== "yes" ||
                        val.trim().length > 0 ||
                        "Please describe your experience",
                    })}
                  />
                  {errors.experienceDetails && (
                    <p className={errText}>
                      {errors.experienceDetails.message}
                    </p>
                  )}
                </div>

                {/* City */}
                <div>
                  <p className="text-customBlue font-semibold text-[13px] md:text-[15px] mb-2">
                    Which City or Area are you interested to set up a Happy
                    Potato Outlet?*
                  </p>
                  <input
                    type="text"
                    className={`${inputBase} ${
                      errors.city ? "ring-2 ring-red-500" : ""
                    }`}
                    {...register("city", { required: "City/Area is required" })}
                  />
                  {errors.city && (
                    <p className={errText}>{errors.city.message}</p>
                  )}
                </div>

                {/* Self operate yes/no */}
                <div className="pt-1">
                  <p className="text-customBlue font-semibold text-[13px] md:text-[15px] mb-2">
                    Are you planning to self-operate the outlet?*
                  </p>
                  <div className="flex items-center gap-8">
                    <label className="flex items-center gap-2 text-sm text-customBlue">
                      <input
                        type="radio"
                        value="yes"
                        className="accent-primary"
                        {...register("selfOperate", {
                          required: "Select yes or no",
                        })}
                      />
                      Yes
                    </label>
                    <label className="flex items-center gap-2 text-sm text-customBlue">
                      <input
                        type="radio"
                        value="no"
                        className="accent-primary"
                        {...register("selfOperate", {
                          required: "Select yes or no",
                        })}
                      />
                      No
                    </label>
                  </div>
                  {errors.selfOperate && (
                    <p className={errText}>{errors.selfOperate.message}</p>
                  )}
                </div>

                {/* Investment */}
                <div>
                  <p className="text-customBlue font-semibold text-[13px] md:text-[15px] mb-2">
                    What is the total amount you expect to invest in starting
                    this business?*
                  </p>
                  <input
                    type="text"
                    className={`${inputBase} ${
                      errors.investment ? "ring-2 ring-red-500" : ""
                    }`}
                    {...register("investment", {
                      required: "Investment amount is required",
                    })}
                  />
                  {errors.investment && (
                    <p className={errText}>{errors.investment.message}</p>
                  )}
                </div>

                {/* Button */}
                <div className="pt-4 flex justify-center md:justify-start">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-primary px-8 md:px-10 py-2 md:py-2.5 font-headingNew text-white rounded-full text-[14px] md:text-[18px] uppercase ring-secondary ring-4 hover:bg-customBlue duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Sending..." : "Send Now"}
                  </button>
                </div>

                {result && (
                  <span className="block text-sm text-green-600 text-center md:text-left">
                    {result}
                  </span>
                )}
              </form>
            </div>
          </div>
        </div>

        {/* Fry BG bottom */}
        <img
          src="/assets/images/bg/fry-bg.png"
          alt="Fry bg"
          className="bottom-0 left-0 absolute w-screen object-cover"
        />
      </section>
    </>
  );
};

export default FranchisePage;
