import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import ImageUpload from "../image/ImageUpload";

const Footer = () => {
  return (
    <>
      <div className="bg-secondary py-3 grid place-items-center">
        <ImageUpload
          src="logo.png"
          alt="Logo"
          className="h-[60px]"
        />
      </div>
      <div className="bg-primary py-5">
        <div className="c-space">
          <div className="flex items-center justify-between flex-col md:flex-row gap-5">
            {/* Social */}
            <div className="flex items-center gap-4">
              <p className="text-white font-heading">Follow Us On</p>
              <div className="flex items-center gap-3">
                <a href="https://www.facebook.com/bdhappypotato/" target="_blank" className="bg-white p-2 rounded-full">
                  <FaFacebook className="text-primary" />
                </a>
                <a href="https://www.instagram.com/happypotato_bd/" target="_blank" className="bg-white p-2 rounded-full">
                  <FaInstagram className="text-primary" />
                </a>
                <a href="https://www.tiktok.com/@happypotato_bangladesh" target="_blank" className="bg-white p-2 rounded-full">
                  <FaTiktok className="text-primary" />
                </a>
                {/* <a href="" className="bg-white p-2 rounded-full">
                  <FaXTwitter className="text-primary" />
                </a> */}
              </div>
            </div>

            {/* Copyright text */}
            <p className="text-white font-heading text-center md:text-left">
              @Copyright {new Date().getFullYear()} Happy Potato BD. All Right
              Reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
