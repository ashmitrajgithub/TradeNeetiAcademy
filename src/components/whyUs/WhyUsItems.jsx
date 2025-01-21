const WhyUsItems = ({ image, title, description, isReverse }) => {
  return (
    <div
      className={` whyUs w-full xl:w-4/5 whyUs flex flex-col ${isReverse ? "md:flex-row-reverse" : "md:flex-row"
        } items-center justify-center mb-12 rounded-3xl `}
    >
      <div className="flex-1 text-center">
        <div className="shadow-lg rounded-lg overflow-hidden  hover:shadow-xl">
          <img
            src={image}
            className="w-full  md:max-w-full"
            alt="service-img"
          />
        </div>
      </div>
      <div className="flex-1 text-left hover:opacity-100 ">
        <div className="mx-8">
          <h3 className="text-2xl pt-4 font-bold relative after:content-[''] after:block after:w-0 after:h-[3px] after:bg-gray-400 after:transition-all after:duration-300 hover:after:w-1/2">
            {title}
          </h3>
          <p className="text-base font-semibold leading-relaxed text-gray-600 pb-5">{description}</p>
        </div>
      </div>
    </div>

  );
};


export default WhyUsItems;