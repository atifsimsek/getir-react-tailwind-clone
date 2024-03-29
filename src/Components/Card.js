import React from "react";

const Card = () => {
  const cards = [
    {
      title: "Her siparişinize bir kampanya",
      description:
        "Getir'de vereceğiniz her siparişe uygun bir kampanya bulabilirsiniz.",
      image:
        "https://getir.com/_next/static/images/intro-in-minutes-a7a9238a73013642a6597c4db06653c1.svg",
    },
    {
      title: "Dakikalar içinde kapınızda",
      description: "Getir’le siparişiniz dakikalar içinde kapınıza gelir.",
      image:
        "https://getir.com/_next/static/images/intro-market-courier-34cd8b0ca1d547580d506566edfacf8d.svg",
    },
    {
      title: "Binlerce çeşit mutluluk",
      description:
        "Getir’de binlerce çeşit arasından seçiminizi yapabilirsiniz.",
      image:
        "https://getir.com/_next/static/images/intro-discount-6248544cb695830a2e25debd3c0f3d29.svg",
    },
  ];

  return (
    <div className=" w-full  md:container mx-auto md:w-10/12 grid md:grid-cols-2 lg:grid-cols-3 gap-4 ">
      {cards.map((card, index) => (
        <div
          key={index}
          className="p-14 bg-white flex flex-col text-center items-center gap-y-4 shadow-sm border border-gray-50 md:rounded-lg"
        >
          <img className=" h-[150px] w-[150px]" src={card.image} alt="" />
          <h3 className="text-lg text-primary-brand-color font-semibold">
            {card.title}
          </h3>
          <p className="text-sm text-gray-700">{card.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Card;
