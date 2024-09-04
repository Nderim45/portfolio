import React from "react";

const Experience = () => {
  return (
    <div id="experience" data-aos="fade-up" className="mt-20">
      <h1 className="text-3xl font-semibold mb-10">Experience</h1>
      <ol className="grid grid-cols-1 items-center md:grid-cols-3">
        <li className="relative h-[100%] mb-6 sm:mb-0">
          <div className="flex justify-center mt-auto">
            <h1 className="">December 2019 - March 2020</h1>
          </div>
          <div className="flex items-center">
            <div className="hidden md:flex z-10 items-center justify-center w-6 h-6 bg-gradient-to-r from-[#8b61d5] to-[#19a9c6] rounded-full shrink-0" />
            <div className="flex w-full bg-gray-200 h-1 dark:bg-gray-700"></div>
            <div className="hidden md:flex z-10 items-center justify-center w-6 h-6 bg-gradient-to-r from-[#8b61d5] to-[#19a9c6] rounded-full shrink-0" />
          </div>
          <div className="mt-3 sm:pe-8">
            <h1 className="text-lg font-semiboldtext-white">
              Intern Android Developer
            </h1>
            <h1 className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              Solaborate L.L.C
            </h1>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              Created Android Application for virtual care project responsive to
              different devices. Used by doctors to monitor patients in hospital
              or in their home and assist them on using health care devices like
              glucometer, blood pressure devices and getting back the results
            </p>
          </div>
        </li>
        <li className="relative h-[100%] mb-6 sm:mb-0">
          <div className="flex justify-center mt-auto">
            <h1 className="">August 2021 - December 2021</h1>
          </div>
          <div className="flex items-center">
            <div className="flex w-full bg-gray-200 h-1 dark:bg-gray-700"></div>
            <div className="hidden md:flex z-10  items-center justify-center w-6 h-6 bg-gradient-to-r from-[#8b61d5] to-[#19a9c6] rounded-full shrink-0" />
          </div>
          <div className="mt-3 sm:pe-8">
            <h3 className="text-lg font-semiboldtext-white">React Developer</h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              BONC Application
            </time>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              Created responsive web application for managing ANPR cameras. Used
              by police to monitor if border cameras are working properly and
              filter through database of vehicles license plates that have
              passed in borders of Kosova.
            </p>
          </div>
        </li>
        <li className="relative h-[100%] mb-6 sm:mb-0">
          <div className="flex justify-center">
            <h1 className="">October 2022 - December 2023</h1>
          </div>
          <div className="flex items-center">
            <div className="flex w-full bg-gray-200 h-1 dark:bg-gray-700"></div>
            <div className="hidden md:flex z-10  items-center justify-center w-6 h-6 bg-gradient-to-r from-[#8b61d5] to-[#19a9c6] rounded-full shrink-0" />
          </div>
          <div className="mt-3 sm:pe-8">
            <h3 className="text-lg font-semibold text-white">
              React Developer
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              Suchagents
            </time>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              Created and maintained responsive real estate web application.
              Used different react libraries to ensure easier communication
              between clients, brokers and call agents to create appointments,
              sell and buy properties.
            </p>
          </div>
        </li>
      </ol>
    </div>
  );
};

export default Experience;
