const WhyUsItems = ({ image, title, description, isReverse }) => {
  return (
    <div
      className={`w-[80%] sm:w-[99%] whyUs flex flex-col ${
        isReverse ? "md:flex-row-reverse" : "md:flex-row"
      } items-center justify-between mb-5 rounded-3xl`}
    >
      <div className="flex-1 text-center">
        <div className="shadow-lg rounded-lg overflow-hidden hover:shadow-xl">
          <img
            src={image}
            className="w-full md:max-w-full"
            alt="service-img"
          />
        </div>
      </div>
      <div className="flex-1 text-left md:text-center hover:opacity-100">
        <div className="mx-8">
          <h3 className="text-2xl font-semibold relative after:content-[''] after:block after:w-0 after:h-[3px] after:bg-gray-400 after:transition-all after:duration-300 hover:after:w-1/2">
            {title}
          </h3>
          <p className="text-base leading-relaxed text-gray-600 pb-4">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyUsItems;
