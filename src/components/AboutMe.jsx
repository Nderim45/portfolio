import React from "react";

const AboutMe = () => {
  return (
    <div data-aos="fade-up" className="mt-20">
      <h1 className="text-3xl font-semibold mb-10">About Me</h1>
      <ol class="items-center md:flex">
        <li class="relative mb-6 sm:mb-0">
          <div className="flex justify-center">
            <h1 className="">December 2019 - March 2020</h1>
          </div>
          <div class="flex items-center">
            <div class="hidden md:flex z-10 flex items-center justify-center w-6 h-6 bg-gradient-to-r from-[#8b61d5] to-[#19a9c6] rounded-full shrink-0" />
            <div class="flex w-full bg-gray-200 h-1 dark:bg-gray-700"></div>
            <div class="hidden md:flex z-10 flex items-center justify-center w-6 h-6 bg-gradient-to-r from-[#8b61d5] to-[#19a9c6] rounded-full shrink-0" />
          </div>
          <div class="mt-3 sm:pe-8">
            <h1 class="text-lg font-semiboldtext-white">Solaborate L.L.C</h1>
            <h1 class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              Android Developer
            </h1>
            <p class="text-base font-normal text-gray-500 dark:text-gray-400">
              Created Android Application for virtual care project responsive to
              different devices.
            </p>
          </div>
        </li>
        <li class="relative mb-6 sm:mb-0">
          <div className="flex justify-center">
            <h1 className="">August 2021 - December 2021</h1>
          </div>
          <div class="flex items-center">
            <div class="flex w-full bg-gray-200 h-1 dark:bg-gray-700"></div>
            <div class="hidden md:flex z-10 flex items-center justify-center w-6 h-6 bg-gradient-to-r from-[#8b61d5] to-[#19a9c6] rounded-full shrink-0" />
          </div>
          <div class="mt-3 sm:pe-8">
            <h3 class="text-lg font-semiboldtext-white">
              Fornt-End React Developer
            </h3>
            <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              BONC Application
            </time>
            <p class="text-base font-normal text-gray-500 dark:text-gray-400">
              Created responsive web application for managing ANPR cameras.
            </p>
          </div>
        </li>
        <li class="relative mb-6 sm:mb-0">
          <div className="flex justify-center">
            <h1 className="">October 2022 - December 2023</h1>
          </div>
          <div class="flex items-center">
            <div class="flex w-full bg-gray-200 h-1 dark:bg-gray-700"></div>
            <div class="hidden md:flex z-10 flex items-center justify-center w-6 h-6 bg-gradient-to-r from-[#8b61d5] to-[#19a9c6] rounded-full shrink-0" />
          </div>
          <div class="mt-3 sm:pe-8">
            <h3 class="text-lg font-semibold text-white">
              Fornt-End React Developer
            </h3>
            <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              Suchagents
            </time>
            <p class="text-base font-normal text-gray-500 dark:text-gray-400">
              Created and maintained responsive real estate web application.
            </p>
          </div>
        </li>
      </ol>
    </div>
  );
};

export default AboutMe;
