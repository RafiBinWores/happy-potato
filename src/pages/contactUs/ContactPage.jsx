import { Mail, PhoneCall } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import SEO from "../../components/seo/SEO";

const ContactPage = () => {
  const [result, setResult] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      topic: "",
      message: "",
      botcheck: "",
    },
  });

  const onSubmit = async (values) => {
    // stop bots
    if (values.botcheck) return;

    setResult("");
    const fd = new FormData();
    fd.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY);
    fd.append(
      "subject",
      "Inquiries From Happy Potato BD"
    );
    fd.append(
      "from_name",
      "Happy Potato Business Inquiries Form"
    );

    // map your fields
    fd.append("name", values.name);
    fd.append("email", values.email);
    fd.append("topic", values.topic);
    fd.append("message", values.message);

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

  const base =
    "bg-secondary/25 w-full outline-none focus:border-primary focus:border py-2.5 md:py-3 px-5 placeholder:text-sm md:placeholder:text-xl text-zinc-500";
  const errText = "text-red-600 text-sm mt-1";

  return (
    <>
          <SEO
        title="Contact Us"
        description="Crispy fries, French Fires, Shaker Fries, & more."
        url="/"
      />
      
      <section className="bg-[url('/assets/images/bg/contact-bg.jpg')] bg-cover bg-center relative">
        <div className="c-space py-8 md:py-20 z-20 relative">
          <h2 className="text-[23px] md:text-[40px] uppercase md:leading-11 leading-[25px] text-primary text-center">
            Get in touch with us!
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-5 lg:gap-6 md:pb-7 lg:pb-40 mt-5 md:mt-10 gap-y-6">
            <div className="col-span-2 bg-customBlue-100 px-10 py-[70px] rounded-4xl shadow">
              <div className="border-b-2 border-b-secondary">
                <h4 className="text-secondary text-[18px]">
                  Available Office Hours:
                </h4>
                <p className="font-base text-white mt-1 pb-5">
                  Monday – Friday 9am – 5pm
                </p>
              </div>

              <div className="mt-4 space-y-2 md:space-y-3">
                <div className="flex items-center gap-3">
                  <PhoneCall className="text-secondary size-5" />
                  <p className="text-white md:text-[19px]">+880 17XXXXXXX</p>
                </div>
                <div className="flex gap-3">
                  <Mail className="text-secondary size-5 mt-2" />
                  <div className="text-white">
                    <p className="md:text-[19px]">Any feedback please email to:</p>
                    <a href="mailto:" className="md:text-[19px]">demo@example.com</a>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Mail className="text-secondary size-5 mt-2" />
                  <div className="text-white">
                    <p className="md:text-[19px]">Any marketing please email to:</p>
                    <a href="mailto:" className="md:text-[19px]">demo@example.com</a>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Mail className="text-secondary size-5 mt-2" />
                  <div className="text-white">
                    <p className="md:text-[19px]">Any leasing please email to:</p>
                    <a href="mailto:" className="md:text-[19px]">demo@example.com</a>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Mail className="text-secondary size-5 mt-2" />
                  <div className="text-white">
                    <p className="md:text-[19px]">Any job resume please email to:</p>
                    <a href="mailto:" className="md:text-[19px]">demo@example.com</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-3 bg-white rounded-4xl p-[30px] md:p-[50px] shadow-[0_4px_17px_5px_rgba(0,0,0,0.25)]">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                {/* Honeypot */}
                <input
                  type="text"
                  {...register("botcheck")}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                {/* Name */}
                <div>
                  <input
                    type="text"
                    placeholder="Name"
                    className={`${base} ${
                      errors.name ? "border border-red-500" : ""
                    }`}
                    {...register("name", { required: "The name field is required" })}
                  />
                  {errors.name && (
                    <p className={errText}>{errors.name.message}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    className={`${base} ${
                      errors.email ? "border border-red-500" : ""
                    }`}
                    {...register("email", {
                      required: "The email field is required",
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

                {/* 🆕 Select your inquiry (dropdown under Email) */}
                <div>
                  <select
                    className={`${base} ${
                      errors.topic ? "border border-red-500" : ""
                    }`}
                    defaultValue=""
                    {...register("topic", {
                      required: "Please select your inquiry type",
                    })}
                  >
                    <option value="" disabled>
                      Select Your Inquiry
                    </option>
                    <option value="Customer/Product Feedback">
                      Customer/Product Feedback
                    </option>
                    <option value="Marketing inquiry">Marketing inquiry</option>
                    <option value="Leasing">Leasing</option>
                    <option value="Franchise">Franchise</option>
                    <option value="Job Application">Job Application</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.topic && (
                    <p className={errText}>{errors.topic.message}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <textarea
                    placeholder="Your Comment"
                    className={`${base} min-h-32 ${
                      errors.message ? "border border-red-500" : ""
                    }`}
                    {...register("message", {
                      required: "The comment field is required",
                      minLength: {
                        value: 10,
                        message: "At least 10 characters",
                      },
                    })}
                  />
                  {errors.message && (
                    <p className={errText}>{errors.message.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-primary px-5 md:px-8 py-1 font-headingNew text-white rounded-full text-[12px] md:text-[26px] uppercase ring-secondary ring-4 hover:bg-customBlue duration-300 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
                >
                  {isSubmitting ? "Sending..." : "Send"}
                </button>

                <span className="block text-sm text-green-600">{result}</span>
              </form>
            </div>
          </div>

          <img
            src="assets/images/icon/happy-potato.png"
            alt="Fry bg"
            className="bottom-19 right-6 md:bottom-10 lg:bottom-6 md:right-8 lg:right-16 absolute w-[81px] md:w-[172px] lg:w-[280px] hidden lg:block"
          />
        </div>

        <img
          src="assets/images/bg/fry-bg.png"
          alt="Fry bg"
          className="bottom-0 left-0 absolute w-screen object-cover"
        />
      </section>
    </>
  );
};

export default ContactPage;
