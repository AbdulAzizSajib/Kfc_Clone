const SocialReview = () => {
  const cardData = [
    {
      name: "SAJIB",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit.consequatur error atque in accusantium",
    },
    {
      name: "SHUYAIB",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit.consequatur error atque in accusantium",
    },
    {
      name: "SHAHED",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit.consequatur error atque in accusantium",
    },
    {
      name: "AMAN",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit.consequatur error atque in accusantium",
    },
    {
      name: "NOVEL",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit.consequatur error atque in accusantium",
    },
  ];
  return (
    <div>
      <section className="bg-[#fcf2e8]">
        <div className="flex flex-col justify-center gap-8 p-4 lg:flex-row lg:p-14">
          <div className="flex flex-col w-full gap-4 lg:w-1/2">
            {/* ... */}
            <div className="grid grid-cols-1 gap-4 text-xl font-bold sm:grid-cols-2">
              {cardData.slice(0, 2).map((card, index) => (
                <div key={index} className="p-5 bg-white border-2 rounded-2xl">
                  <h2 className="mb-5 text-2xl text-blue-800">{card.name}</h2>
                  <p className="font-normal text-gray-500">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
            {/* ...... */}
            <div className="grid grid-cols-1 gap-4 text-xl font-bold sm:grid-cols-2 lg:grid-cols-3">
              {cardData.slice(2).map((card, index) => (
                <div key={index} className="p-5 bg-white border-2 rounded-2xl">
                  <h2 className="mb-5 text-2xl text-blue-800">{card.name}</h2>
                  <p className="font-normal text-gray-500">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <iframe
              className="w-full h-64 sm:h-96 lg:h-full rounded-2xl"
              src="https://www.youtube.com/embed/8Dy7ADlOUXI?si=gB_UPXLJ4c96vmdF"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SocialReview;
