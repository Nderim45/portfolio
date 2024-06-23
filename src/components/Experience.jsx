import React from "react";

const Experience = () => {
  return (
    <div id="about-me" data-aos="fade-up" className="mt-20">
      <h1 className="text-3xl font-semibold mb-10">Experience</h1>
      <ol className="items-center md:flex">
        <li className="relative mb-6 sm:mb-0">
          <div className="flex justify-center">
            <h1 className="">December 2019 - March 2020</h1>
          </div>
          <div className="flex items-center">
            <div className="hidden md:flex z-10 items-center justify-center w-6 h-6 bg-gradient-to-r from-[#8b61d5] to-[#19a9c6] rounded-full shrink-0" />
            <div className="flex w-full bg-gray-200 h-1 dark:bg-gray-700"></div>
            <div className="hidden md:flex z-10 items-center justify-center w-6 h-6 bg-gradient-to-r from-[#8b61d5] to-[#19a9c6] rounded-full shrink-0" />
          </div>
          <div className="mt-3 sm:pe-8">
            <h1 className="text-lg font-semiboldtext-white">
              Solaborate L.L.C
            </h1>
            <h1 className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              Android Developer
            </h1>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              Created Android Application for virtual care project responsive to
              different devices.
            </p>
          </div>
        </li>
        <li className="relative mb-6 sm:mb-0">
          <div className="flex justify-center">
            <h1 className="">August 2021 - December 2021</h1>
          </div>
          <div className="flex items-center">
            <div className="flex w-full bg-gray-200 h-1 dark:bg-gray-700"></div>
            <div className="hidden md:flex z-10  items-center justify-center w-6 h-6 bg-gradient-to-r from-[#8b61d5] to-[#19a9c6] rounded-full shrink-0" />
          </div>
          <div className="mt-3 sm:pe-8">
            <h3 className="text-lg font-semiboldtext-white">
              Fornt-End React Developer
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              BONC Application
            </time>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              Created responsive web application for managing ANPR cameras.
            </p>
          </div>
        </li>
        <li className="relative mb-6 sm:mb-0">
          <div className="flex justify-center">
            <h1 className="">October 2022 - December 2023</h1>
          </div>
          <div className="flex items-center">
            <div className="flex w-full bg-gray-200 h-1 dark:bg-gray-700"></div>
            <div className="hidden md:flex z-10  items-center justify-center w-6 h-6 bg-gradient-to-r from-[#8b61d5] to-[#19a9c6] rounded-full shrink-0" />
          </div>
          <div className="mt-3 sm:pe-8">
            <h3 className="text-lg font-semibold text-white">
              Fornt-End React Developer
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              Suchagents
            </time>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              Created and maintained responsive real estate web application.
            </p>
          </div>
        </li>
      </ol>
    </div>
  );
};

export default Experience;
