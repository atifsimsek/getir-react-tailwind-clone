import React from "react";

const MobileApp = () => {
  return (
    <div className="bg-mobile-background mx-auto w-full md:w-10/12 md:container bg-primary-brand-color flex-col md:flex-row flex justify-between items-center md:rounded-lg text-white">
      <div className="flex flex-col gap-y-3 items-center text-center md:items-start md:text-start p-10">
        <h3 className="text-2xl font-bold tracking-tight">Getir'i indirin</h3>
        <p className="font-semibold">
          İstediğiniz ürünleri dakikalar içinde kapınıza{" "}
          <br className="hidden md:block" /> getirelim
        </p>

        <nav className="mt-5  flex  md:flex-nowrap justify-center gap-2">
          <a className="transform transition-all hover:scale-105" href="/">
            <img
              src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg"
              alt=""
              className=""
            />
          </a>
          <a className="transform transition-all  hover:scale-105" href="/">
            <img
              src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg"
              alt=""
              className=" "
            />
          </a>
          <a className="transform transition-all hover:scale-105" href="/">
            <img
              src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg"
              alt=""
              className=" "
            />
          </a>
        </nav>
      </div>
      <picture className="hidden md:block  pt-6 self-end ">
        <img
          src="https://cdn.getir.com/getirweb-images/common/landing/phoneLanding.png"
          alt=""
        />
      </picture>
    </div>
  );
};

export default MobileApp;
