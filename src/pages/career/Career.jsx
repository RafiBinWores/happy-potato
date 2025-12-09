import React, { useState } from "react";
import { useForm } from "react-hook-form";
import SEO from "../../components/seo/SEO";
import { Paperclip } from "lucide-react";

// Helper: upload resume to Cloudinary and return public URL
async function uploadResumeToCloudinary(file) {
  const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
  const uploadPreset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

  if (!cloudName || !uploadPreset) {
    throw new Error("Cloudinary env vars missing");
  }

  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", uploadPreset);
  // optional, in case you want to be extra sure about folder:
  formData.append("folder", "happy-potato/resumes");

  const res = await fetch(
    `https://api.cloudinary.com/v1_1/${cloudName}/auto/upload`,
    {
      method: "POST",
      body: formData,
    }
  );

  const data = await res.json();

  if (!res.ok || !data.secure_url) {
    console.error("Cloudinary upload error:", data);
    throw new Error(data.error?.message || "Cloudinary upload failed");
  }

  return {
    url: data.secure_url,
    name: `${data.original_filename}.${data.format}`,
    sizeKb: (data.bytes / 1024).toFixed(1),
  };
}

const Career = () => {
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
      dob: "",
      email: "",
      phone: "",
      position: "Junior",
      nationality: "",
      outletLocation: "",
      hearAbout: "",
      botcheck: "",
      resume: null,
    },
  });

  const resumeFiles = watch("resume");

  const onSubmit = async (values) => {
    if (values.botcheck) return; // honeypot

    setResult("");

    // --- 1) Validate & upload resume to Cloudinary ---
    if (!values.resume || values.resume.length === 0) {
      setResult("Please upload your resume.");
      return;
    }

    const file = values.resume[0];

    // Optional: size limit (10 MB)
    const maxSize = 10 * 1024 * 1024;
    if (file.size > maxSize) {
      setResult("Please upload a file smaller than 10 MB.");
      return;
    }

    let resumeUrl = "";
    let resumeName = "";
    let resumeSizeKb = "";

    try {
      setResult("Uploading resume...");
      const uploaded = await uploadResumeToCloudinary(file);
      resumeUrl = uploaded.url;
      resumeName = uploaded.name;
      resumeSizeKb = uploaded.sizeKb;
    } catch (err) {
      console.error(err);
      setResult("Resume upload failed. Please try again.");
      return;
    }

    // --- 2) Send data to Web3Forms with Cloudinary URL ---
    try {
      setResult("Sending your application...");

      const fd = new FormData();
      fd.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY);
      fd.append("subject", "Job Application - Happy Potato BD");
      fd.append("from_name", "Happy Potato Careers Form");

      fd.append("name", values.name);
      fd.append("dob", values.dob);
      fd.append("email", values.email);
      fd.append("phone", values.phone);
      fd.append("applied_position", values.position);
      fd.append("nationality", values.nationality);
      fd.append("outlet_location", values.outletLocation);
      fd.append("hear_about", values.hearAbout || "");

      // 🔗 send Cloudinary info instead of file
      fd.append("resume_url", resumeUrl);
      fd.append("resume_name", resumeName);
      fd.append("resume_size_kb", resumeSizeKb);

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: fd,
      });

      const data = await res.json();
      console.log("Web3Forms response:", data);

      if (!data.success) {
        setResult(data.message || "Could not send your application.");
        return;
      }

      setResult("Thanks! We’ll contact you shortly.");
      reset();
    } catch (err) {
      console.error("Request error:", err);
      setResult("Something went wrong. Please try again.");
    }
  };

  // styles
  const inputBase =
    "bg-[#F7E8C6] w-full outline-none focus:ring-2 focus:ring-primary/50 rounded-md py-2.5 md:py-3 px-4 text-[#4b5563] placeholder:text-[#6b7280]";
  const labelBase =
    "min-w-[110px] text-customBlue text-[13px] md:text-[15px]";
  const errText = "text-red-600 text-sm mt-1";

  const positions = ["Junior", "Senior", "Manager", "HQ"];

  return (
    <>
      <SEO
        title="Careers"
        description="Apply for exciting career opportunities at Happy Potato Bangladesh. Join a growing international food brand offering training, growth, and a fun work environment."
        url="/"
      />

      {/* Grow Your Career with Us! */}
      <section className="bg-white">
        <div className="c-space py-[30px] md:py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 text-center lg:text-left">
              <h3 className="text-[18px] md:text-[26px] text-secondary uppercase">
                Join the Happy Potato Family:
              </h3>
              <h1 className="mb-5 md:mb-6 text-primary text-[23px] md:text-[40px] md:leading-11 uppercase leading-[25px]">
                Grow Your <br /> Career with Us!
              </h1>
              <p className="text-[13px] md:text-base">
                We are looking for self-motivated, positive individuals who have
                a passion for the F&amp;B industry and service excellence. Join
                us and be part of our family!
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

      {/* Available Positions */}
      <section className="bg-secondary">
        <div className="c-space py-[30px] md:py-20 lg:py-24">
          <h2 className="text-[23px] md:text-[40px] uppercase md:leading-11 leading-[25px] text-customBlue text-center">
            Available Positions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-5 md:mt-[30px] gap-6">
            <div className="bg-white rounded-2xl py-5 px-8 md:px-10 flex items-center justify-center flex-col">
              <img
                src="assets/images/career/careers2.png"
                alt="Happy potato icon"
              />
              <p className="text-customBlue uppercase text-[20px] md:text-[30px] font-headingNew mt-5">
                junior
              </p>
            </div>
            <div className="bg-white rounded-2xl py-5 px-8 md:p-6 flex items-center justify-center flex-col">
              <img
                src="assets/images/career/careers2.png"
                alt="Happy potato icon"
              />
              <p className="text-customBlue uppercase text-[20px] md:text-[30px] font-headingNew mt-5">
                senior
              </p>
            </div>
            <div className="bg-white rounded-2xl py-5 px-8 md:p-6 flex items-center justify-center flex-col">
              <img
                src="assets/images/career/careers2.png"
                alt="Happy potato icon"
              />
              <p className="text-customBlue uppercase text-[20px] md:text-[30px] font-headingNew mt-5">
                manager
              </p>
            </div>
            <div className="bg-white rounded-2xl py-5 px-8 md:p-6 flex items-center justify-center flex-col">
              <img
                src="assets/images/career/careers2.png"
                alt="Happy potato icon"
              />
              <p className="text-customBlue uppercase text-[20px] md:text-[30px] font-headingNew mt-5">
                headquarters
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-[url('/assets/images/bg/bg-franchising1.jpg')] bg-cover bg-center">
        <div className="c-space py-[30px] md:py-16 lg:py-20">
          <div className="text-center">
            <h2 className="text-[23px] md:text-[40px] md:leading-11 text-white drop-shadow-[3px_4px_0px_#df0b1a] uppercase">
              Our Benefits
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 mt-4 md:mt-8 gap-4 md:gap-6 lg:gap-10 place-items-center">
            <img
              src="assets/images/career/shop.jpg"
              alt="Shop Image"
              className="rounded-3xl"
            />

            <div className="space-y-8">
              <div className="flex gap-4">
                <img
                  src="assets/images/career/icon-careers1.png"
                  alt="Icon"
                  className="size-[50px] md:size-[76px]"
                />
                <div>
                  <h3 className="text-secondary text-[18px] md:text-[26px] uppercase">
                    Training and Development
                  </h3>
                  <p className="text-white text-[13px] md:text-base mt-2">
                    Opportunities for professional development and training to
                    help our employees gain new skills and advance in their
                    career path.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <img
                  src="assets/images/career/icon-careers1.png"
                  alt="Icon"
                  className="size-[50px] md:size-[76px]"
                />
                <div>
                  <h3 className="text-secondary text-[18px] md:text-[26px] uppercase">
                    Health and Wellness Benefits
                  </h3>
                  <p className="text-white text-[13px] md:text-base mt-2">
                    We prioritise the health and wellness of all employees. All
                    full-time staff who have served us for more than a year are
                    eligible for dental and health screening benefits.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <img
                  src="assets/images/career/icon-careers1.png"
                  alt="Icon"
                  className="size-[50px] md:size-[76px]"
                />
                <div>
                  <h3 className="text-secondary text-[18px] md:text-[26px] uppercase">
                    Career Advancement
                  </h3>
                  <p className="text-white text-[13px] md:text-base mt-2">
                    We have a structured career pathway for our team members to
                    develop them into future leaders.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <img
                  src="assets/images/career/icon-careers1.png"
                  alt="Icon"
                  className="size-[50px] md:size-[76px]"
                />
                <div>
                  <h3 className="text-secondary text-[18px] md:text-[26px] uppercase">
                    Remuneration
                  </h3>
                  <p className="text-white text-[13px] md:text-base mt-2">
                    We pay way above the minimum wage for both full-time and
                    part-time employees.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Job Application */}
      <section className="bg-[url('/assets/images/bg/contact-bg.jpg')] bg-cover bg-center relative">
        <div className="c-space py-8 md:py-10 z-20 relative">
          <div className="grid grid-cols-1 lg:grid-cols-5 lg:gap-10 mt-5 lg:pb-10 md:mt-10 gap-y-6">
            {/* LEFT PANEL */}
            <div className="col-span-2 relative overflow-hidden">
              <div className="bg-primary rounded-3xl p-10">
                <h4 className="text-secondary text-[20px] md:text-[18px] lg:text-[26px] font-headingNew uppercase leading-tight">
                  Ready to sprinkle some happiness with every serving?
                </h4>
                <ul className="mt-6 space-y-6 text-white text-sm md:text-base">
                  <li className="flex gap-3 items-start">
                    <p>
                      Happy Potato is on the lookout for enthusiastic individuals
                      to join our vibrant team! If you’ve got a passion for
                      creating joyful moments and a knack for delivering
                      delightful customer experiences, we’d love to hear from you.
                    </p>
                  </li>
                  <li className="flex gap-3 items-start">
                    <p>
                      Dive into a world of flavour, fun, and friendship—fill in
                      our application form today and take the first step towards
                      a fulfilling career with Happy Potato. Let’s make happiness
                      happen, together!
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            {/* RIGHT FORM */}
            <div className="col-span-3 bg-white rounded-3xl p-[22px] md:p-[50px] shadow-[0_4px_17px_5px_rgba(0,0,0,0.25)]">
              <p className="text-[18px] md:text-[28px] text-primary leading-relaxed mb-5 text-center uppercase font-headingNew">
                Join Us now!
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

                {/* D.O.B. */}
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                  <label className={labelBase}>D.O.B.</label>
                  <div className="w-full">
                    <input
                      type="date"
                      className={`${inputBase} ${
                        errors.dob ? "ring-2 ring-red-500" : ""
                      }`}
                      {...register("dob", {
                        required: "Date of birth is required",
                      })}
                    />
                    {errors.dob && (
                      <p className={errText}>{errors.dob.message}</p>
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

                {/* Phone */}
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                  <label className={labelBase}>Phone</label>
                  <div className="w-full">
                    <input
                      type="tel"
                      className={`${inputBase} ${
                        errors.phone ? "ring-2 ring-red-500" : ""
                      }`}
                      {...register("phone", {
                        required: "Phone is required",
                      })}
                    />
                    {errors.phone && (
                      <p className={errText}>{errors.phone.message}</p>
                    )}
                  </div>
                </div>

                {/* Applied Position */}
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                  <label className={labelBase}>Applied Position</label>
                  <div className="w-full relative">
                    <select
                      className={`${inputBase} appearance-none pr-12 ${
                        errors.position ? "ring-2 ring-red-500" : ""
                      }`}
                      {...register("position", {
                        required: "Position is required",
                      })}
                    >
                      {positions.map((p) => (
                        <option key={p} value={p}>
                          {p}
                        </option>
                      ))}
                    </select>

                    {/* red dropdown box + white arrow */}
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center">
                      <div className="h-full w-10 bg-[#F21C1C] flex items-center justify-center rounded-r-md">
                        <span className="inline-block border-l-8 border-r-8 border-t-[9px] border-l-transparent border-r-transparent border-t-white" />
                      </div>
                    </div>

                    {errors.position && (
                      <p className={errText}>{errors.position.message}</p>
                    )}
                  </div>
                </div>

                {/* Nationality */}
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                  <label className={labelBase}>Nationality</label>
                  <div className="w-full">
                    <input
                      type="text"
                      className={`${inputBase} ${
                        errors.nationality ? "ring-2 ring-red-500" : ""
                      }`}
                      {...register("nationality", {
                        required: "Nationality is required",
                      })}
                    />
                    {errors.nationality && (
                      <p className={errText}>{errors.nationality.message}</p>
                    )}
                  </div>
                </div>

                {/* Outlets / locations */}
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                  <label className={labelBase}>Outlets/ locations</label>
                  <div className="w-full">
                    <input
                      type="text"
                      className={`${inputBase} ${
                        errors.outletLocation ? "ring-2 ring-red-500" : ""
                      }`}
                      {...register("outletLocation", {
                        required: "Outlet / location is required",
                      })}
                    />
                    {errors.outletLocation && (
                      <p className={errText}>{errors.outletLocation.message}</p>
                    )}
                  </div>
                </div>

                {/* How did you hear about this job opportunity? */}
                <div className="flex flex-col md:items-start gap-2 md:gap-4">
                  <label className={labelBase}>
                    How Did You Hear About This Job Opportunity?
                  </label>
                  <div className="w-full">
                    <textarea
                      rows={2}
                      className={`${inputBase} !h-auto py-2 resize-none`}
                      {...register("hearAbout")}
                    />
                  </div>
                </div>

                {/* Upload Your Resume */}
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                  <label className={labelBase}>Upload Your Resume</label>
                  <div className="w-full">
                    <label className="inline-flex items-center gap-2 rounded-full bg-[#D9D9D9] px-5 py-2 cursor-pointer text-[13px] md:text-[14px] font-semibold text-customBlue shadow-sm hover:opacity-90 transition">
                      <span>Upload File</span>
                      <span className="text-lg leading-none">
                        <Paperclip size={16} />
                      </span>
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        className="hidden"
                        {...register("resume", {
                          required: "Please upload your resume",
                        })}
                      />
                    </label>

                    {/* Simple preview */}
                    {resumeFiles && resumeFiles.length > 0 && (
                      <div className="mt-2 text-xs text-gray-700">
                        <p>Selected: {resumeFiles[0].name}</p>
                        <p>
                          Size: {(resumeFiles[0].size / 1024).toFixed(1)} KB
                        </p>
                      </div>
                    )}

                    {errors.resume && (
                      <p className={errText}>{errors.resume.message}</p>
                    )}
                  </div>
                </div>

                {/* Submit button */}
                <div className="pt-2 flex justify-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center cursor-pointer px-10 py-2.5 rounded-full bg-[#F21C1C] text-white font-headingNew text-[14px] md:text-[16px] uppercase tracking-[0.12em] shadow-[0_6px_0_0_#C90E0E] hover:translate-y-[1px] hover:shadow-[0_4px_0_0_#C90E0E] transition disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Sending..." : "Submit"}
                  </button>
                </div>

                {result && (
                  <span className="block text-sm text-center mt-2 text-green-500">
                    {result}
                  </span>
                )}
              </form>
            </div>
          </div>

          {/* mascot */}
          <img
            src="/assets/images/icon/happy-potato.png"
            alt="Happy Potato Mascot"
            className="absolute bottom-0 left-10 scale-x-[-1] hidden lg:block w-[400px]"
          />
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

export default Career;
