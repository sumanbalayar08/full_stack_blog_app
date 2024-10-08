import React from "react";
import { CiTwitter, CiFacebook, CiInstagram, CiLinkedin } from "react-icons/ci";

const Footer = () => {
  return (
    <div className="relative w-full bg-gray-900 text-white bottom-0 fixed">
      <div className="flex-1 md:flex md:justify-between md:px-[4%] items-center">
        <div className="flex-col md:w-96 md:space-y-4">
          <div className="text-2xl font-bold items-center justify-center py-[6%] md:py-0 text-center md:text-left">
            SUMAN BALAYAR
          </div>
          <hr className="md:hidden border-slate-600 border-1" />
          <div className="text-sm pt-[6%] px-[4%] md:pt-0 md:px-0 text-center md:text-left">
            Mark is the three-time #1 New York Times bestselling author of The
            Subtle Art of Not Giving a F*ck, as well as other titles. His books
            have sold around 20 million copies, been translated into more than
            65 languages, and reached number one in more than a dozen countries.
            In 2023, a feature film about his life and ideas was released
            worldwide by Universal Pictures.
          </div>
        </div>
        <div className="flex space-x-20 justify-center py-[6%]">
            <ul className="flex-col space-y-4 font-serif">
              <li>ARTICLES</li>
              <li>COURSES</li>
              <li>ABOUT SUMAN</li>
              <li>CONTACT</li>
            </ul>
            <ul className="flex-col space-y-4 font-serif">
              <li>BOOK</li>
              <li>NEWSLETTER</li>
              <li>SIGN UP</li>
            </ul>
          </div>
      </div>
    </div>
  );
};

export default Footer;
