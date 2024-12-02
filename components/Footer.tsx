import React from "react";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { socialMedia } from "@/data";

const Footer = () => {
  return (
    <footer className="w-full mb-[80px] md:mb-5 pb-10" id="contact">
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="footer"
          className="w-full h-full opacity-50"
        />
      </div>
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presensce to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today let's discuss how I can help you reach your
          goals.
        </p>
        <a href="mailto:igbafesimonpeter5@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex flex-col md:flex-row mt-16 justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Simon-Peter
        </p>
        <div className="flex items-center justify-center md:gap-3 gap-6 ">
          {socialMedia.map((profile) => (
            <div
              key={profile.id}
              className="flex w-10 h-10 cursor-pointer justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 rounded-lg border border-black-300 bg-black-200"
              aria-label={`${profile.id} profile link`}
            >
              <img src={profile.img} alt="" width={20} height={20} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
